import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Field from './Field';

import LoginStyled from './LoginStyled';

// import { useField } from './hooks';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
  userId,
}) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    handleLogin();
  };
  return (
    <LoginStyled>
      <div className='login-form'>
        {isLogged && (
          <div className='login-form-logged'>
            <div className='message-profil'>
              <p>{loggedMessage}</p>
              <NavLink className='profil-link' exact to={`/users/${userId}`}>
                Mon profil
              </NavLink>
            </div>
            <button
              type='button'
              className='login-form-button'
              onClick={handleLogout}
            >
              Déconnexion
            </button>
          </div>
        )}
        {!isLogged && (
          <form className='login-form-element' onSubmit={handleSubmit}>
            <div className='field-log'>
              <Field
                name='email'
                placeholder='Adresse Email'
                onChange={changeField}
                value={email}
              />
              <Field
                name='password'
                type='password'
                placeholder='Mot de passe'
                onChange={changeField}
                value={password}
              />
            <button type='submit' className='login-form-button'>
              OK
            </button>
            </div>
            <div className="link-register">
            <NavLink exact to='/register'>
            S'inscrire
            </NavLink>
            </div>
          </form>
        )}
      </div>
    </LoginStyled>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loggedMessage: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default Login;
