import { connect } from 'react-redux';
import { fetchThreads } from 'src/actions/thread';
import Forum from 'src/components/Forum';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  fetchThreads: () => {
    dispatch(fetchThreads());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
