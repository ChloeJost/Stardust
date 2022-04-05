import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getUrlByThreadTitle } from 'src/selectors';
import Button from 'src/components/Button';

import ThreadStyled from './ThreadStyled';

const Thread = ({ title, name, _id, dispatchCurrentThread, comments }) => {
  return (
    <ThreadStyled>
      <div className='content'>
        <Link
          className='show-thread'
          onClick={() => {
            dispatchCurrentThread(_id);
          }}
          to={getUrlByThreadTitle(title)}
        >
          {title}
        </Link>
        <p className='content-text'>par : {name}</p>
        <p className='nbr-comments'>Commentaires: {comments.length}</p>
      </div>
    </ThreadStyled>
  );
};

Thread.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dispatchCurrentThread: PropTypes.func.isRequired,
};

Thread.defaultProps = {
  isLogged: false,
};

export default Thread;
