import { useState } from 'react';
import './App.css';
import Quiz from "./components/Quiz";
import { data } from './data';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const [score, setScore] = useState(0);
  const questionNumber = data.indexOf(currentQuestion) + 1

  const nextQuestion = () => {
    if( questionNumber <= data.length - 1) {
      setCurrentQuestion(data[questionNumber]);
    }
  }

  const submit = () => {
    console.log(score )
  }

  return (
    <div className="App">
      <span>{questionNumber} / {data.length}</span>
      <h1>QuizzApp!</h1>
      <Quiz question={currentQuestion} score={score} setScore={setScore}/>
      {questionNumber <= data.length - 1 ? <button onClick={nextQuestion}>next</button>
      : <button onClick={submit}>submit</button>}
    </div>
  );
}

export default App;
