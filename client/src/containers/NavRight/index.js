// == Imports NPM
import { connect } from 'react-redux';

// == Imports locaux
// composant + actions creator
import NavRight from 'src/components/Nav/NavRight';
import { toggleOpenRight } from 'src/actions/nav';

// == Branchements
// lecture
const mapStateToProps = (state) => ({
  openRight: state.nav.openRight,
});

// modification
const mapDispatchToProps = (dispatch) => ({
  toggleRight: () => {
    dispatch(toggleOpenRight());
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(NavRight);