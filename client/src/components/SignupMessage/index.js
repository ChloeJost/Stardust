import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SignupMessage = ({ signupMessage }) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 5000);

    return () => clearTimeout(timer);
  }, [setShowMessage]);

  return showMessage ? (
    <div className='signup-confirmation'>
      <p>{signupMessage}</p>
    </div>
  ) : null;
};

SignupMessage.propTypes = {};

export default SignupMessage;
