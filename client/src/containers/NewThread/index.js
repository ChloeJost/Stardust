import { connect } from 'react-redux';

import NewThread from 'src/components/NewThread';

import { newThread, changeValue } from 'src/actions/thread';

const mapStateToProps = (state) => ({
  title: state.threads.title,
  active: state.threads.active,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeValue(value, name));
  },
  newThread: (thread) => {
    dispatch(newThread(thread));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewThread);
