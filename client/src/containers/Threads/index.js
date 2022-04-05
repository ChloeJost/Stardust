import { connect } from 'react-redux';
import Threads from 'src/components/Threads';

const mapStateToProps = (state) => ({
  list: state.threads.list,
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = () => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Threads);
