import './App.css';
import QuestionPrompt from './components/QuestionPrompt';

function App() {

  const questions = require('./components/data/questionsData.json')
  let questionPrompt = questions[0]
  return (
    <QuestionPrompt key={questionPrompt.id} question={questionPrompt.question} image={questionPrompt.image} options={questionPrompt.options} />
    // questions.map((questionPrompt) => {
    //   return <QuestionPrompt key={questionPrompt.id} question={questionPrompt.question} image={questionPrompt.image} options={questionPrompt.options} />
    // })
  );
}

export default App;
