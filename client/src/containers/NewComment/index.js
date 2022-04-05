import { connect } from 'react-redux';

import NewComment from 'src/components/NewComment';

import { newComment, changeValue } from 'src/actions/thread';

const mapStateToProps = (state) => ({
  text: state.threads.text,
  isLogged: state.login.isLogged,
  active: state.threads.active,
  currentThread: state.threads.currentThread,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeValue(value, name));
  },
  newComment: (text) => {
    dispatch(newComment(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);
