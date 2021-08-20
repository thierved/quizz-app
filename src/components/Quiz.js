import { useState } from "react";

export default function Quiz({question, score, setScore}) {
    const verifyAnswer = (choice) => {
        if(choice.correct) {
            setScore(score + 1)
        }
    }
    return (
        <div className="question">
            <h3>{question.question}</h3>
            <ul>
                {question.answers.map(ans => 
                    <li key={question.answers.indexOf(ans)} 
                        onClick={() => verifyAnswer(ans)}
                    >{ans.choice}</li>)}
            </ul>            
        </div>
    )
}