import './App.css';
import Prompt from './Prompt';

function App() {

  const questions = [
    {
      id: 1,
      question: "What do you choose?",
      image: "url-link/relative-link-in-assets",
      options: [{
        option: "Choose and move to 2",
        nextId: 2
      },
      {
        option: "Choose and move to 3",
        nextId: 3
      }
    ]
    },
    {
      //choosing option 1 moves control here
      id: 2,
      question: "What do you choose2?",
      image: "url-link/relative-link-in-assets",
      options: [{
        option: "Choose and move to 4",
        nextId: 2
      },
      {
        option: "Choose and move to 5",
        nextId: 3
      }
    ]
    },
    {
       //choosing option 2 moves control here
      id: 3,
      question: "What do you choose?",
      image: "url-link/relative-link-in-assets",
      options: [{
        option: "Choose and move to 2",
        nextId: 2
      },
      {
        option: "Choose and move to 3",
        nextId: 3
      }
    ]
    }
  ]


  return (
    questions.map((questionPrompt) => {
      return <Prompt key={questionPrompt.id} question={questionPrompt.question} image={questionPrompt.image} options={questionPrompt.options} />
    })
  );
}

export default App;
