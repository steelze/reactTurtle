import React, { createContext, useState } from 'react';

import quizQuestions from '../lib/quiz';
import quizAnswer from '../lib/answer';

export const AppContext = createContext();

const AppProvider = (props) => {
  const [questions, setQuestion] = useState([...quizQuestions]);
  const [currentPage, setCurrentPage] = useState('turtles');

  const startQuiz = () => setCurrentPage('quiz');

  const endQuiz = () => {
    const data = [...questions];
    for (let index = 0; index < data.length; index++) {
      data[index].correct =  quizAnswer[index];
    }
    setQuestion(data);
    setCurrentPage('result');
  }

  const selectAnswer = (questionIndex, answerIndex) => {
    const data = [...questions];
    data[questionIndex].selected = answerIndex;
    setQuestion(data);
  };

  const resetQuiz = () => {
    const data = [...questions];
    for (let index = 0; index < data.length; index++) {
      data[index].selected = null;
      data[index].correct = null;
    }
    setQuestion(data);
    setCurrentPage('turtles');
  };

  return (
    <AppContext.Provider value={{ questions, selectAnswer, resetQuiz, currentPage, startQuiz, endQuiz }}>
      { props.children }
    </AppContext.Provider>
  )
};

export default AppProvider;
