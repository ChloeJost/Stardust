import { connect } from 'react-redux';

import HomePage from 'src/components/HomePage';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  isVerified: state.register.isVerified,
  signupMessage: state.register.signupMessage,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);