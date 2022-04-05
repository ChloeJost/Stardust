import { connect } from 'react-redux';

import Login from 'src/components/Login';


import { changeValue, login, logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,
  isLogged: state.login.isLogged,
  loggedMessage: `Bienvenue ${state.auth.name}`,
  userId: state.auth.id,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeValue(value, name));
  },
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
