import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Thread from 'src/containers/Thread';
import NewThread from 'src/containers/NewThread';
import ThreadsStyled from './ThreadsStyled';

const Threads = ({ list, isLogged }) => {
  console.log(list);
  return (
    <ThreadsStyled>
      <h1>FORUM STARDUST : Liste des sujets</h1>

      <div className='thread'>
        <Router>
          {isLogged && <Route exact path='/forum' component={NewThread} />}
          {!isLogged && (
            <div className='not-logged-comment'>
              <p>
                {' '}
                Pour poster un nouveau sujet vous devez être{' '}
                <a
                  className='link-register'
                  href='http://localhost:8080/register'
                >
                  inscrit
                </a>{' '}
                et connecté.
              </p>
            </div>
          )}
        </Router>
        {list.map((thread) => (
          <Thread key={thread._id} {...thread} />
        ))}
      </div>
    </ThreadsStyled>
  );
};

Threads.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Threads;
