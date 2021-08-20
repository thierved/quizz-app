import { useEffect, useState } from 'react';
import './App.css';
import Quiz from "./components/Quiz";
import { data } from './data';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);

  const nextQuestion = () => {
    if(data.indexOf(currentQuestion) + 1 < data.length - 1) {
      setCurrentQuestion(data[data.indexOf(currentQuestion) + 1]);
    }
  }

  return (
    <div className="App">
      <h1>QuizzApp!</h1>
      <Quiz question={currentQuestion} />
      <button onClick={nextQuestion}>next</button>
    </div>
  );
}

export default App;
