import { useState } from 'react';
import './App.css';
import Quiz from "./components/Quiz";
import { data } from './data';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);

  const questionNumber = data.indexOf(currentQuestion) + 1;

  const nextQuestion = () => {
    if( questionNumber <= data.length - 1) {
      setCurrentQuestion(data[questionNumber]);
    }
  }

  return (
    <div className="App">
      <span>{questionNumber} / {data.length}</span>
      <h1>QuizzApp!</h1>
      <Quiz question={currentQuestion} next={nextQuestion}/>
    </div>
  );
}

export default App;
