import React, { useContext } from 'react';

import { AppContext } from '../contexts/app';
import turtles from '../lib/turtles';

const Turtles = () => {
  const { startQuiz } = useContext(AppContext);
  return (
    <div style={{ padding: '1rem 0' }}>
      <div className="col s12 right-align">
        <button className="btn waves-effect waves-light" onClick={ () => startQuiz() }>Start Quiz</button>
      </div>
      {
        turtles.map((turtle, index) => {
        return (
          <div className="col s12 m6" key={ index }>
            <div className="card small">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={ turtle.image_url } alt="turtle" />
              </div>
              <div className="card-content">
                <span className="card-title activator">{ turtle.type } <i className="material-icons right">visibility</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{ turtle.type }<i className="material-icons right">close</i></span>
                <p><strong>Locations: </strong>{ turtle.locations }</p>
                <p><strong>Size: </strong>{ turtle.size }</p>
                <p><strong>Lifespan: </strong>{ turtle.lifespan }</p>
                <p><strong>Diet: </strong>{ turtle.diet }</p>
                <p><strong>Description: </strong>{ turtle.description }</p>
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  )
};

export default Turtles;
