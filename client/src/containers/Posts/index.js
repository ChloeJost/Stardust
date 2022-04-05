import { connect } from 'react-redux';

import Posts from 'src/components/Posts';


const mapStateToProps = (state) => ({
  list: state.threads.list,
  authorId: state.auth.id,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
