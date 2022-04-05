import { connect } from 'react-redux';
import { dispatchCommentInfos, deleteComment } from 'src/actions/thread';
import Comments from 'src/components/Comments';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  idOnlineUser: state.auth.id,
});

const mapDispatchToProps = (dispatch) => ({

  dispatchCommentInfos: (id, author) => {
    dispatch(dispatchCommentInfos(id, author));
  },

  deleteComment: () => {
    dispatch(deleteComment());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
