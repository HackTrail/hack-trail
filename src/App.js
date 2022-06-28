import './App.css';

import QuestionPrompt from './components/QuestionPrompt';
import { useState } from 'react';
import Start from './components/Start';
import startImage from './images/start_screen.png';

function App() {
  const [isInStart, setisInStart] = useState(true);
  const [questionsSeen, setQuestionsSeen] = useState(-1);

  const startGame = () => {
    setisInStart(false);
    setQuestionsSeen(questionsSeen+1)
  }
  const nextQuestion = () => {
    setQuestionsSeen(questionsSeen+1);
  }  

  const questions = require('./components/data/questionsData.json')
  return (
    <div>
        {isInStart ? (
          <Start startGame={startGame} image={startImage} questions={questions} />
        ) : <div/>}
        {questionsSeen>=0 && questionsSeen<3 ? (
            <QuestionPrompt nextQuestion={nextQuestion} key={questions[questionsSeen].id} question={questions[questionsSeen].question} image={questions[questionsSeen].image} options={questions[questionsSeen].options} />
        ) : <div/>}
        {questionsSeen===3 ? (
          <div >
          <h1>McMuffy's World</h1>
              ggwp
          </div>
        ): <div/>}
    </div>
  );
}

export default App;
