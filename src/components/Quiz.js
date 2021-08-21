import React, {useState} from "react";

export default function Quiz({question, next}) {
    const [choice, setChoice] = useState("");

    const gradeChoice = (selected) => {
        if(selected.correct) {
            console.log("you're right")
        } else {
            console.log("wrong answer");
        }
        next();
    }
    
    return (
        <div className="question">
            <h3>{question.question}</h3>
            <ul>
                {question.answers.map(ans => 
                    <li key={question.answers.indexOf(ans)} 
                        onClick={() => setChoice(ans)}
                    >{ans.choice}</li>)}
            </ul> 
         <button onClick={() => gradeChoice(choice)}>next</button>
        </div>
    )
}