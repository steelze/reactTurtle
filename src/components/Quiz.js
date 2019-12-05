import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/app';

const Quiz = () => {
  const { questions, selectAnswer, endQuiz } = useContext(AppContext);
  const [state, setstate] = useState(0);
  const question = questions[state];

  const prevQuestion = () => {
    if (state > 0) {
      setActiveQuestion(state - 1);
    }
  }

  const nextQuestion = () => {
    const length = questions.length - 1;
    if (state < length) {
      setActiveQuestion(state + 1);
    }
  }

  const setActiveQuestion = (index) => {
    setstate(index);
  }

  const submitQuiz = () => {
    const unansweredIndex = questions.findIndex(({ selected }) => selected === null);
    if (unansweredIndex >= 0 ) {
      setActiveQuestion(unansweredIndex);
    } else {
      endQuiz();
    }
  }

  const questionButtons = () => {
    const buttons = [];
    for (let index = 0; index < questions.length; index++) {
      buttons.push(index);
    }
    return buttons;
  }

  return (
    <div style={{ padding: '1rem 0' }}>
      <div className="col s12 right-align">
        {
          questionButtons().map(index => (
              <button
                className={`btn waves-effect waves-light btn-small mx-0 my-half ${(questions[index].selected === null) ? 'red lighten-1' : 'blue accent-3'}`}
                key={ index }
                onClick={ () => setActiveQuestion(index) }>
                { index + 1 }
              </button>
            )
          )
        }
      </div>
      <div className="col s12">
        <p><strong>{ state + 1 }. { question.text }</strong></p>
        {
          question.possibilities.map((possibility, index) => {
            if (question.type === 'text') {
              return (
                <div className="col s12 m6" key={ index }>
                  <section className={`box ${(question.selected === index) ? 'selected' : ''}`} onClick={ () => selectAnswer(state, index) }>
                    { possibility.answer }
                  </section>
                </div>
              )
            }
            return (
              <div className="col s12 m6" key={ index }>
                  <section className={`box ${(question.selected === index) ? 'selected' : ''}`} onClick={ () => selectAnswer(state, index) }>
                    <img src={ possibility.answer } className="responsive-img" alt={possibility.answer} height="100"/>
                  </section>
                </div>
            )
          })
        }
      </div>
      <div className="col s6">
        <button className="btn waves-effect waves-light btn-small blue accent-3 my-1" onClick={ prevQuestion } disabled={ state === 0 }>Prev</button>
        <button className="btn waves-effect waves-light btn-small blue accent-3 my-1" onClick={ nextQuestion } disabled={ state === (questions.length - 1) }>Next</button>
      </div>
      <div className="col s6 right-align">
        <button className="btn waves-effect waves-light btn-small blue accent-3" onClick={ submitQuiz }>Submit</button>
      </div>
    </div>
  )
}

export default Quiz;
