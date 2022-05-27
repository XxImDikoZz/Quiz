import React, { useState } from 'react';
import './App.css';
function App() {
  const questions = [
    {
      questionText: 'Что не является языком программирования? ',
      answerOptions: [
        {answerText: 'Ruby', isCorrect: false },
        {answerText: 'GO', isCorrect: false },
        {answerText: 'Sass', isCorrect: true },
        {answerText: 'Kotlin', isCorrect: false },
      ]
    },
    {
      questionText: 'Какого типа данных не существует в Python? ',
      answerOptions: [
        {answerText: 'tuple', isCorrect: true },
        {answerText: 'array', isCorrect: false },
        {answerText: 'list', isCorrect: false },
        {answerText: 'integer', isCorrect: false },
      ]
    },
    {
      questionText: 'Что не является языком программирования? ',
      answerOptions: [
        {answerText: 'Ruby', isCorrect: false },
        {answerText: 'GO', isCorrect: false },
        {answerText: 'Sass', isCorrect: true },
        {answerText: 'Kotlin', isCorrect: false },
      ]
    },
    {
      questionText: 'Какого типа данных не существует в Python? ',
      answerOptions: [
        {answerText: 'tuple', isCorrect: true },
        {answerText: 'array', isCorrect: false },
        {answerText: 'list', isCorrect: false },
        {answerText: 'integer', isCorrect: false },
      ]
    },
    {
      questionText: 'Что не является языком программирования? ',
      answerOptions: [
        {answerText: 'Ruby', isCorrect: false },
        {answerText: 'GO', isCorrect: false },
        {answerText: 'Sass', isCorrect: true },
        {answerText: 'Kotlin', isCorrect: false },
      ]
    },
    {
      questionText: 'Какого типа данных не существует в Python? ',
      answerOptions: [
        {answerText: 'tuple', isCorrect: true },
        {answerText: 'array', isCorrect: false },
        {answerText: 'list', isCorrect: false },
        {answerText: 'integer', isCorrect: false },
      ]
    },
    {
      questionText: 'Что не является языком программирования? ',
      answerOptions: [
        {answerText: 'Ruby', isCorrect: false },
        {answerText: 'GO', isCorrect: false },
        {answerText: 'Sass', isCorrect: true },
        {answerText: 'Kotlin', isCorrect: false },
      ]
    },
    {
      questionText: 'Какого типа данных не существует в Python? ',
      answerOptions: [
        {answerText: 'tuple', isCorrect: true },
        {answerText: 'array', isCorrect: false },
        {answerText: 'list', isCorrect: false },
        {answerText: 'integer', isCorrect: false },
      ]
    },

  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }
  return (
      <div className="app">
        {
          showScore
            ?
            <div className="section-score">
              <div>Правильных ответов {score} из {questions.length}</div>
              <div>Вы ответили правильно на {Math.floor(score / questions.length * 100)}%</div>
              <button className='refresh-btn' onClick={refresh}>Попробовать еще раз...</button>
            </div>
            :
            <div className="quiz">
              
              <div className="qustion-section">
                <div className="question-text">{questions[score].questionText}</div>
              </div>

              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(item => (
                  <button onClick={() => handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>
                ))}
              </div>

            </div>
        }
      </div>
  )
}

export default App;