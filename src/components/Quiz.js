import React from 'react'

export default function Quiz({ question }) {
    return (
        <div>
            <p>{question.question}</p>
            {
                question.answers.map(ans =>
                    <div key={ans}>
                        <input type="radio" id={ans} name="question" value={ans} />
                        <label htmlFor={ans}>{ans}</label>
                    </div>
                )
            }
        </div>
    )
}
