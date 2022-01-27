import React, {useState} from 'react';
import { fetchQuizQuestions } from './API';

// Components
import QuestionCard from './components/QuestionCard';

// Types
import { Difficulty, QuestionState } from './API';

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

function App() {

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

    const startTrivia = async () => {

    }

    const checkAnswer = async (e : React.MouseEvent<HTMLButtonElement>)=> {

    }

    const nextQuestion = () => {

    }

  return (
    <div className="Quiz">
        <h1>REACT QUIZ</h1>
        <button className="start" onClick={startTrivia} >
            Start
        </button>
        <p className="score">Score: 0</p>
        <p> Loading Questions... </p>
        {/* <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answer={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined  }
            callback={checkAnswer}
        /> */}
        <button className='next' onClick={nextQuestion}>
            Next Question
        </button>
    </div>
  );
}

export default App;
