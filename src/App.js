import './App.css';

import QuestionPrompt from './components/QuestionPrompt';
import { useState } from 'react';
import Start from './components/Start';
import startImage from './images/start_screen.png';

function App() {
  const [isInStart, setisInStart] = useState(true);
  const [answered, setAnswered] = useState(-1);

  const startGame = () => {
    setisInStart(false);
    setAnswered(answered+1)
  }
  const nextQuestion = () => {
    setAnswered(answered+1);
    console.log(answered)
  }  

  const questions = require('./components/data/questionsData.json')
  return (
    <div>
        {isInStart ? (
          <Start image={startImage} questions={questions} />
        ) : <div/>}
        {answered>=0 && answered<3 ? (
            <QuestionPrompt nextQuestion={nextQuestion} key={questions[answered].id} question={questions[answered].question} image={questions[answered].image} options={questions[answered].options} />
        ) : <div/>}
        {answered===3 ? (
          <div >
          <h1>McMuffy's World</h1>
              ggwp
          </div>
        ): <div/>}
    </div>
);
}

export default App;
