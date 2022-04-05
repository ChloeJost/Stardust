import { connect } from 'react-redux';
import { fetchThreads } from 'src/actions/thread';
import UserProfil from 'src/components/UserProfil';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchThreads: () => {
    dispatch(fetchThreads());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfil);
