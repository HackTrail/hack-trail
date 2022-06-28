import './App.css';

import { useState } from 'react';

import QuestionPrompt from './components/QuestionPrompt';
import Start from './components/Start';
import Info from './components/Info';

import startImage from './images/start_screen.png';

function App() {
  const [isInStart, setIsInStart] = useState(true);
  const [questionsSeen, setQuestionsSeen] = useState(-1);
  const [isInInfo, setIsInInfo] = useState(false);

  const startGame = () => {
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

  const questions = require('./components/data/questionsData.json')
  const numQuestions = Object.keys(questions).length

  const game = () => {
      if (isInStart) {   
        return <Start startGame={startGame} image={startImage} questions={questions} />;
      }
      if (isInInfo) {   
        return <Info nextQuestion={nextQuestion} text={"random text for now but this will come from the json"} />;
      }
      if (questionsSeen < numQuestions) { 
        return <QuestionPrompt nextInfo={nextInfo} key={questions[questionsSeen].id} question={questions[questionsSeen].question} image={questions[questionsSeen].image} options={questions[questionsSeen].options} />;
      }
      else {
        return <div>
          <h1>McMuffy's World</h1>
              ggwp
        </div>;
      }
    }

  return (
    <div>{ game() }</div>
  )
}

export default App;
