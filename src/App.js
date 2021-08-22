import { useState } from 'react';
import './App.css';
import Quiz from "./components/Quiz";
import Result from './components/Result';
import { data } from './data';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const questionNumber = data.indexOf(currentQuestion) + 1;

  const nextQuestion = () => {
    if( questionNumber <= data.length - 1) {
      setCurrentQuestion(data[questionNumber]);
    } else {
      setDone(true)
    }
  }

  return (
    <div className="container">
      <h1>QuizzApp!</h1>
      <span>{questionNumber} / {data.length}</span>
      {!done ? <Quiz question={currentQuestion} next={nextQuestion} score={score} setScore={setScore}/>
              : <Result score={score} numQuestions={data.length} />
      }
    </div>
  );
}

export default App;
