import './App.css';

import { useState } from 'react';

import QuestionPrompt from './components/QuestionPrompt';
import End from './components/End';
import Start from './components/Start';
import Info from './components/Info';

import startImage from './images/start_screen.png';
import { clearChoicesRecord, recordBadge } from "./utils/utils";

const endInfo = {
  'highDensityHighInfrastructure': {
    'name': 'High Density and High Infrastructure',
    'badge': '🏙️',
    'text': 'In your old age, you are grateful you can walk to get your groceries and take the bus to your doctor appointments without relying on cars.  Your children were able to find affordable housing nearby. You are excited for the coming weekend - you are taking your grandchild on the trolley to the pier and will visit the aquarium and get the best ice cream in the city!',
    'image': 'highrises.png'
  },
  'lowDensityHighInfrastructure': {
    'name': 'Low Density and High Infrastructure',
    'badge': '🏠',
    'text': 'Your city keeps raising taxes in order to maintain all the public transit it has invested in.  You live far from the station and it is difficult for you to get there.  As an elderly person, you feel stuck at home and wish you could take one of those trains to visit your children who live a few states away.  They were not able to find housing nearby and you miss them.',
    'image': 'caronroad.png'
  },
  'highDensityLowInfrastructure': {
    'name': 'High Density and Low Infrastructure',
    'badge': '🚗',
    'text': 'In your old age, you moved into a condo and are grateful that your upstairs neighbor has taken an interest in you and frequently brings you meals when they make too much food.  You love going for morning walks, but whenever you need to visit across town you have to rely on someone to pick you up.  Your children come over every Sunday for waffles and then you take your grandchildren to the park.',
    'image': 'apartments.png'
  },
  'lowDensityLowInfrastructure': {
    'name': 'Low Density and Low Infrastructure',
    'badge': '🏜️',
    'text': 'Your children moved away after school, and visit a couple times a year.  The road near your house continues to be expanded and it is not pleasant for you to take walks, your doctor told you that you can no longer drive.  You feel lonely and wish people would visit more often.',
    'image': 'desert.png'
  }
}

function App() {
  const [isInStart, setIsInStart] = useState(true);
  const [questionsSeen, setQuestionsSeen] = useState(-1);
  const [isInInfo, setIsInInfo] = useState(false);
  const [densityScore, setDensityScore] = useState(0);
  const [infrastructureScore, setInfrastructureScore] = useState(0);

  const startGame = () => {
    clearChoicesRecord()
    setIsInStart(false);
    setQuestionsSeen(questionsSeen+1)
  }

  const nextQuestion = () => {
    setIsInInfo(false);
    setQuestionsSeen(questionsSeen+1);
  }

  const nextInfo = () => {
    setIsInInfo(true);
  }

  const updateScores = (densityEffect, infrastructureEffect) => {
    setDensityScore(densityScore+densityEffect)
    setInfrastructureScore(infrastructureScore+infrastructureEffect)
  }

  const getEnding = () => {
    let data = {}
    if (densityScore >= 4 && infrastructureScore >= 1) {
      data = endInfo['highDensityHighInfrastructure']
    } else if (densityScore >= 4) {
      data = endInfo['highDensityLowInfrastructure']
    } else if (infrastructureScore >= 1) {
      data = endInfo['lowDensityHighInfrastructure']
    } else {
      data = endInfo['lowDensityLowInfrastructure']
    }
  
    recordBadge(data.badge)
    return data
  }

  const questions = require('./components/data/questionsData.json')
  const numQuestions = Object.keys(questions).length

  const game = () => {
      if (isInStart) {   
        return <Start startGame={startGame} image={startImage} questions={questions} />;
      }
      if (isInInfo) {   
        return <Info nextQuestion={nextQuestion} text={questions[questionsSeen].fact} />;
      }
      if (questionsSeen < numQuestions) { 
        return <QuestionPrompt nextInfo={nextInfo} updateScores={updateScores} id={questions[questionsSeen].id} text={questions[questionsSeen].question.text} image={questions[questionsSeen].question.image} options={questions[questionsSeen].question.options} />;
      }
      else {
        return <End data={getEnding()} />
      }
    }

  return (
    <div>{ game() }</div>
  )
}

export default App;
