import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Threads from 'src/containers/Threads';
import ThreadwithComments from 'src/containers/ThreadWithComments';

import ForumStyled from './ForumStyled';

const Forum = ({ fetchThreads }) => {
  useEffect(fetchThreads, []);
  return (
    <ForumStyled>
      <Router>
        <Route exact path='/forum' component={Threads} />
        <Switch>
          <Route path='/forum/:threadId' component={ThreadwithComments} />
        </Switch>
      </Router>
    </ForumStyled>
  );
};

Forum.propTypes = {
  fetchThreads: PropTypes.func.isRequired,
};

Forum.defaultProps = {
  isLogged: false,
};

export default Forum;
