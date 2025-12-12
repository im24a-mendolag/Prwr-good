'use client'

import { useState } from 'react'
import { useContent } from '@/hooks/useContent'
import ScrollAnimation from '@/components/ScrollAnimation'

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export default function QuizPage() {
  const { content, lang } = useContent()
  const quiz = content.quiz
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())
  const [quizCompleted, setQuizCompleted] = useState(false)

  const questions: QuizQuestion[] = quiz.questions

  const handleAnswerSelect = (index: number) => {
    if (showResult || answeredQuestions.has(currentQuestion)) return
    setSelectedAnswer(index)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer
    if (isCorrect) {
      setScore(score + 1)
    }

    setShowResult(true)
    setAnsweredQuestions(prev => {
      const newSet = new Set(prev)
      newSet.add(currentQuestion)
      return newSet
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions(new Set())
    setQuizCompleted(false)
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="container-custom py-12">
        <ScrollAnimation>
          <div className="max-w-2xl mx-auto text-center">
            <div className="card p-8">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {quiz.completed.title}
              </h1>
              <div className="text-6xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                {score} / {questions.length}
              </div>
              <div className="text-2xl mb-6 text-gray-700 dark:text-gray-300">
                {percentage}%
              </div>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
                {percentage >= 80
                  ? quiz.completed.excellent
                  : percentage >= 60
                  ? quiz.completed.good
                  : quiz.completed.keepLearning}
              </p>
              <button
                onClick={handleRestart}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                {quiz.completed.restart}
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    )
  }

  return (
    <div className="container-custom py-12">
      <ScrollAnimation>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {quiz.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {quiz.description}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>
                {quiz.progress.question} {currentQuestion + 1} {quiz.progress.of} {questions.length}
              </span>
              <span>
                {quiz.progress.score}: {score} / {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="card mb-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {currentQ.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === currentQ.correctAnswer
                const isWrong = showResult && isSelected && !isCorrect
                const showCorrect = showResult && isCorrect

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult || answeredQuestions.has(currentQuestion)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      showResult
                        ? showCorrect
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                          : isWrong
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'border-gray-200 dark:border-gray-700'
                        : isSelected
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                    } ${showResult || answeredQuestions.has(currentQuestion) ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                          showResult
                            ? showCorrect
                              ? 'border-green-500 bg-green-500'
                              : isWrong
                              ? 'border-red-500 bg-red-500'
                              : 'border-gray-300 dark:border-gray-600'
                            : isSelected
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                      >
                        {showResult && showCorrect && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {showResult && isWrong && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <span className="text-gray-800 dark:text-gray-200">{option}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            {showResult && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">
                  {quiz.explanation}:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{currentQ.explanation}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  if (currentQuestion > 0) {
                    setCurrentQuestion(currentQuestion - 1)
                    setSelectedAnswer(null)
                    setShowResult(false)
                  }
                }}
                disabled={currentQuestion === 0}
                className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {quiz.actions.previous}
              </button>

              {!showResult ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {quiz.actions.submit}
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  {currentQuestion < questions.length - 1 ? quiz.actions.next : quiz.actions.finish}
                </button>
              )}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

