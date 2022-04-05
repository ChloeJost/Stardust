import React from 'react';

import Login from 'src/containers/Login';
import PropTypes from 'prop-types';

const NavLeft = ({ openLeft, toggleLeft }) => (
  <div className='login'>
    <nav>
      <button onClick={toggleLeft} className='button-login'></button>
      <div className={openLeft ? 'loginForm' : 'loginForm loginForm--closed'}>
        <Login />
      </div>
    </nav>
  </div>
);

NavLeft.propTypes = {
  openLeft: PropTypes.bool.isRequired,
  toggleLeft: PropTypes.func.isRequired,
};

export default NavLeft;
