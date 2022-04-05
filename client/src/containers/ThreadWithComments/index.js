import { connect } from 'react-redux';
import ThreadWithComments from 'src/components/ThreadWithComments';


const mapStateToProps = (state) => ({
  list: state.threads.list,
  currentThread: state.threads.currentThread,
});

const mapDispatchToProps = () => ({});


export default connect(mapStateToProps, mapDispatchToProps)(ThreadWithComments);