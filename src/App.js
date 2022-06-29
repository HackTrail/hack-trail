import './App.css';

import { useState } from 'react';

import QuestionPrompt from './components/QuestionPrompt';
import Start from './components/Start';
import Info from './components/Info';

import startImage from './images/start_screen.png';
import { clearChoicesRecord } from "./utils/utils";

function App() {
  const [isInStart, setIsInStart] = useState(true);
  const [questionsSeen, setQuestionsSeen] = useState(-1);
  const [isInInfo, setIsInInfo] = useState(false);
  const [densityScore, setDensityScore] = useState(0);
  const [infrastructureScore, setInfrastructureScore] = useState(0);
  const [isInEvent, setInEvent] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(-1);


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

 const nextEvent = (choiceId) => {
  setSelectedChoice(choiceId);
  setInEvent(true);
 }

  const questions = require('./components/data/questionsData.json')
  const numQuestions = Object.keys(questions).length

  const getConsequence = (choiceId) => {
    questions[questionsSeen].options.map((option) => {
      if (option.choiceId === choiceId) {
        return option.consequence;
      }
    })
  }

  const game = () => {
      if (isInStart) {   
        return <Start startGame={startGame} image={startImage} questions={questions} />;
      }
      if(isInEvent) {
        const consequence = getConsequence(selectedChoice);
        return <Event nextInfo={nextInfo} event={questions[questionsSeen].event} consequence={consequence} />;
      }
      if (isInInfo) {   
        return <Info nextQuestion={nextQuestion} text={questions[questionsSeen].fact} />;
      }
      if (questionsSeen < numQuestions) { 
        return <QuestionPrompt nextEvent={nextEvent} updateScores={updateScores} id={questions[questionsSeen].id} text={questions[questionsSeen].question.text} image={questions[questionsSeen].question.image} options={questions[questionsSeen].question.options} />;
      }
      else {
        return <div>
          <h1>McMuffy's World</h1>
              ggwp <br></br>
              density: {densityScore}, infrastructure: {infrastructureScore}
        </div>;
      }
    }

  return (
    <div>{ game() }</div>
  )
}

export default App;
