import './App.css';
import Prompt from './components/Prompt';

function App() {

  const questions = require('./components/data/questionsData.json')

  return (
    questions.map((questionPrompt) => {
      return <Prompt key={questionPrompt.id} question={questionPrompt.question} image={questionPrompt.image} options={questionPrompt.options} />
    })
  );
}

export default App;
