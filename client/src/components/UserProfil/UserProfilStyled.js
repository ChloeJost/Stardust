import styled from 'styled-components';

import profilbg from './profil-bg.jpg';
import galaxy from './galaxy.jpg';

const UserProfil = styled.section`

  background-image: url(${profilbg});
  background-position: center;
  background-size: cover;
  min-height : 100vh;

  @media screen and (max-width:650px) {
    background-image: url(${galaxy});
  }

  .container {
    display: flex;
    min-height: 80vh;
    height: 100vh;
    justify-content: space-between;
    width: 70%;
    width: 80%;
    margin: auto auto;
    padding: 30px;
    
    @media screen and (max-width:650px) {
      width: 90%;
      min-height: 90vh;
      width: 95%;
      padding-top: 5rem;
      height: 80vh;
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
      justify-content: space-around;
    }
  }
`;

export default UserProfil;
