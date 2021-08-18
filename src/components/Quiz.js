import {useState} from "react";

export default function Quiz({ question }) {
    const [selectedOption, setSelectedOption] = useState("");
    
    const submit = () => {
        console.log(question.question)
    }
    
    
    return (
        <div className="question">
            <h3>{question.question}</h3>
            {question.answers.map(ans => 
                <p className=""
                    key={question.answers.indexOf(ans)} onClick={() =>setSelectedOption(ans)}>
                    {ans}
                </p>)
            }
            <button onClick={submit}>Submit</button>
        </div>
    )
}