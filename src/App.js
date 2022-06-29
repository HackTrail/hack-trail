import './App.css';

import { useState } from 'react';

import QuestionPrompt from './components/QuestionPrompt';
import End from './components/End';
import Start from './components/Start';
import Info from './components/Info';
import Event from './components/Event';
import Results from './components/Results';
import startImage from './images/start_screen.png';
import { clearChoicesRecord, recordBadge } from "./utils/utils";
import {incrementOutcomeTally} from "./db/firestore";

const endInfo = {
  'highDensityHighInfrastructure': {
    'name': 'High Density and High Infrastructure',
    'badge': '🏙️',
    'text': 'As you age, you are grateful that you can walk to the grocery store and take the bus to your doctor appointments without needing a car.  Local affordable housing means your kids now live nearby. You are excited for the coming weekend when you will take your grandchild by trolley to the pier to visit the aquarium and get the best ice cream in the city!',
    'image': 'highrises.png'
  },
  'lowDensityHighInfrastructure': {
    'name': 'Low Density and High Infrastructure',
    'badge': '🏠',
    'text': 'Your city keeps raising taxes to maintain all the public transit it has invested in.  You live far from the station and it is difficult for you to get there as you can no longer drive.  You feel stuck at home and wish you could take one of those trains to visit your children who live a few states away.  They were not able to find housing nearby due to high cost of housing, and you miss them.',
    'image': 'caronroad.png'
  },
  'highDensityLowInfrastructure': {
    'name': 'High Density and Low Infrastructure',
    'badge': '🚗',
    'text': 'During retirement, you downsized to a condo and are grateful that your upstairs neighbor has taken an interest in you, frequently bringing you meals when they cook too much food.  You love going for morning walks, but getting around town means finding a ride due to lack of public transportation.  Most Sundays your children bring the grandkids over for waffles and a trip to the park.',
    'image': 'apartments.png'
  },
  'lowDensityLowInfrastructure': {
    'name': 'Low Density and Low Infrastructure',
    'badge': '🏜️',
    'text': 'As adults, you kids moved away, but visit a couple of times a year.  The road near your house continues to be expanded, and sidewalks were removed to make way for more cars. You can no longer even take walks in your neighborhood. Health problems make it impossible for you to drive. You feel lonely and wish family and friends would visit more often.',
    'image': 'desert.png'
  }
}

function App() {
  const [isInStart, setIsInStart] = useState(true);
  const [questionsSeen, setQuestionsSeen] = useState(-1);
  const [isInInfo, setIsInInfo] = useState(false);
  const [densityScore, setDensityScore] = useState(0);
  const [infrastructureScore, setInfrastructureScore] = useState(0);
  const [isInEvent, setInEvent] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(-1);
  const [isInResults, setIsInResults] = useState(false);


  const startGame = () => {
    clearChoicesRecord();
    setIsInStart(false);
    setQuestionsSeen(questionsSeen+1);
  }

  const resetGame = () => {
    setIsInStart(true);
    setQuestionsSeen(-1);
    setIsInInfo(false);
    setDensityScore(0);
    setInfrastructureScore(0);
    setInEvent(false);
    setSelectedChoice(-1);
    setIsInResults(false);
  }

  const nextQuestion = () => {
    setIsInInfo(false);
    setQuestionsSeen(questionsSeen+1);
  }

  const nextInfo = () => {
    setInEvent(false);
    setIsInInfo(true);
  }

  const updateScores = (densityEffect, infrastructureEffect) => {
    setDensityScore(densityScore+densityEffect)
    setInfrastructureScore(infrastructureScore+infrastructureEffect)
  }

 const nextEvent = (choiceId) => {
  setSelectedChoice(choiceId);
  setInEvent(true);
 }

 const getResults = () => {
      setIsInResults(true)
  }
  
  const getEnding = () => {
    let data = {}
    if (densityScore >= 4 && infrastructureScore >= 1) {
      data = endInfo['highDensityHighInfrastructure'];
      incrementOutcomeTally('high-density-high-infrastructure');
    } else if (densityScore >= 4) {
      data = endInfo['highDensityLowInfrastructure'];
      incrementOutcomeTally('high-density-low-infrastructure');
    } else if (infrastructureScore >= 1) {
      data = endInfo['lowDensityHighInfrastructure'];
      incrementOutcomeTally('low-density-high-infrastructure');
    } else {
      data = endInfo['lowDensityLowInfrastructure'];
      incrementOutcomeTally('low-density-low-infrastructure');
    }
  
    recordBadge(data.badge)
    return data
  }

  const questions = require('./components/data/questionsData.json')
  const numQuestions = Object.keys(questions).length

  const getConsequence = (choiceId) => {
    return questions[questionsSeen].question.options[choiceId].consequence
  }

  const game = () => {
      if (isInStart) {   
        return <Start startGame={startGame} image={startImage} questions={questions} />;
      }
      if(isInEvent) {
        const consequence = getConsequence(selectedChoice)
        return <Event nextInfo={nextInfo} image={questions[questionsSeen].question.image} event={questions[questionsSeen].event} consequence={consequence} />;
      }
      if (isInInfo) {   
        return <Info nextQuestion={nextQuestion} text={questions[questionsSeen].fact} />;
      }
      if (questionsSeen < numQuestions) { 
        return <QuestionPrompt nextEvent={nextEvent} updateScores={updateScores} id={questions[questionsSeen].id} text={questions[questionsSeen].question.text} image={questions[questionsSeen].question.image} options={questions[questionsSeen].question.options} />;
      }
      if (isInResults) {
        return <Results resetGame={resetGame} />
      }
      else {
        return <End data={getEnding()} getResults={getResults}/>
      }
    }

  return (
    <div>{ game() }</div>
  )
}

export default App;
