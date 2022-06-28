import './App.css';
import Start from './components/Start';
import startImage from './images/start_screen.png';

function App() {

  const questions = require('./components/data/questionsData.json')

  return <Start image={startImage} questions={questions} />;
}

export default App;
