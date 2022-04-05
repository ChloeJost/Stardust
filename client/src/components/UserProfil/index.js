import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Profil from 'src/containers/Profil';
import Posts from 'src/containers/Posts';
import UserProfilStyled from './UserProfilStyled';


const UserProfil = ({
  fetchThreads,
}) => {
  useEffect(fetchThreads, []);
  return (
    <UserProfilStyled>
      <div className="container">
        <Profil />
        <Posts />
      </div>
    </UserProfilStyled>
  );
};

UserProfil.propTypes = {
  fetchThreads: PropTypes.func.isRequired,
};

export default UserProfil;
