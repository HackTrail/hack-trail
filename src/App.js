import './App.css';

import { useState } from 'react';

import QuestionPrompt from './components/QuestionPrompt';
import End from './components/End';
import Start from './components/Start';
import Info from './components/Info';
import Results from './components/Results';

import startImage from './images/start_screen.png';
import { clearChoicesRecord, recordBadge } from "./utils/utils";

const endInfo = {
  'highDensityHighInfrastructure': {
    'name': 'High Density and High Infrastructure',
    'badge': '🏙️',
    'text': 'end 1',
    'image': 'highrises.png'
  },
  'lowDensityHighInfrastructure': {
    'name': 'Low Density and High Infrastructure',
    'badge': '🏠',
    'text': 'end 2',
    'image': 'caronroad.png'
  },
  'highDensityLowInfrastructure': {
    'name': 'High Density and Low Infrastructure',
    'badge': '🚗',
    'text': 'end 3',
    'image': 'apartments.png'
  },
  'lowDensityLowInfrastructure': {
    'name': 'Low Density and Low Infrastructure',
    'badge': '🏜️',
    'text': 'end 4',
    'image': 'desert.png'
  }
}

function App() {
  const [isInStart, setIsInStart] = useState(true);
  const [questionsSeen, setQuestionsSeen] = useState(-1);
  const [isInInfo, setIsInInfo] = useState(false);
  const [isInResults, setIsInResults] = useState(false);
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

  const showResults = () => {
    setIsInResults(true);
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

  const getResults = () => {
      setIsInResults(true)
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
      if (isInResults) {
          return <Results data={getResults()}/>
      }
      else {
        return <End data={getEnding()} showResults={showResults} />
      }
    }

  return (
    <div>{ game() }</div>
  )
}

export default App;
