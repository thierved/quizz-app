import { useState } from "react";

export default function Quiz({question, next}) {
    
    return (
        <div className="question">
            <h3>{question.question}</h3>
            <ul>
                {question.answers.map(ans => 
                    <li key={question.answers.indexOf(ans)}>{ans.choice}</li>)}
            </ul>
            
        </div>
    )
}