import React, { useContext } from 'react';

import { AppContext } from '../contexts/app';
import Turtles from './Turtles';
import Quiz from './Quiz';
import Result from './Result';

const Layout = () => {
  const { currentPage } = useContext(AppContext);
  let page;
  switch (currentPage) {
    case 'quiz':
      page = <Quiz />
      break;
    case 'result':
      page = <Result />
      break;
    default:
      page = <Turtles />
      break;
  }
  return (
    <>
      <nav>
        <div className="nav-wrapper blue accent-3">
          <a href="!#" className="brand-logo center">Turtle Quiz</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          { page }
        </div>
      </div>
    </>
  )
};

export default Layout;
