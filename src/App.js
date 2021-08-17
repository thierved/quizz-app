import { useEffect, useState } from 'react';
import './App.css';
import QuizList from "./components/QuizList";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(res => res.json())
      .then(d => setData(d));
  }, []);

  return (
    <div className="App">
      <h1>QuizzApp!</h1>
      <QuizList quizData={data} />
    </div>
  );
}

export default App;
