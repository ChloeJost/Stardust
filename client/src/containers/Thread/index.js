import { connect } from 'react-redux';
import { dispatchCurrentThread } from 'src/actions/thread';
import Thread from 'src/components/Thread';

const mapStateToProps = (state) => ({
  display: state.threads.display,
  // name: state.register.name,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrentThread: (id) => {
    dispatch(dispatchCurrentThread(id));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Thread);
