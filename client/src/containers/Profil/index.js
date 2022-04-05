import { connect } from 'react-redux';
import { toggleOpenModify, modifyField, changeUserInfos, deleteUser } from 'src/actions/user';
import Profil from 'src/components/Profil';


const mapStateToProps = (state) => ({
  name: state.auth.name,
  email: state.auth.email,
  city: state.auth.city,
  toggleOpen: state.auth.toggleOpen,
  newName: state.auth.newName,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => {
    dispatch(toggleOpenModify());
  },
  changeValue: (value, name) => {
    dispatch(modifyField(value, name));
  },
  changeUserInfos: (newName) => {
    dispatch(changeUserInfos(newName));
  },
  deleteUser: () => {
    dispatch(deleteUser());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Profil);
