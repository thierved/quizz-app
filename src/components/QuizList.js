import React from 'react';
import Quiz from './Quiz';

export default function QuizList({quizData}) {
    return (
        <div>
            {quizData.map(item => <Quiz key={item.id} question={item} />)}
        </div>
    )
}
