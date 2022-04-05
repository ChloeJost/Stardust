// == Imports NPM
import { connect } from 'react-redux';

// == Imports locaux
// composant + actions creator
import NavLeft from 'src/components/Nav/NavLeft';
import { toggleOpenLeft } from 'src/actions/nav';

// == Branchements
// lecture
const mapStateToProps = (state) => ({
  openLeft: state.nav.openLeft,
});

// modification
const mapDispatchToProps = (dispatch) => ({
  toggleLeft: () => {
    dispatch(toggleOpenLeft());
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(NavLeft);