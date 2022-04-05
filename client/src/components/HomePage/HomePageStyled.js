import styled from 'styled-components';
import cosmos from './background-images/cosmos-3.jpg';

const HomePageStyled = styled.header`
  .header {
    background-color: rgba(0, 0, 0, 0.3);
    background-image: url(${cosmos});
    background-position: center;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    color: white;
    font-weight: bold;
    font-size: 10rem;
    font-family: ${(props) => props.theme.fonts.headings};
  }

  .signup-confirmation {
    position: absolute;
    border: 1px solid #81b2c9;
    border-radius: 3px;
    background-color: rgba(129, 178, 201, 0.8);
    color: white;
    text-align: center;
    margin-top: 7rem;
    margin-left: 1rem;
    padding: .5rem;
  }

  @media screen and (max-width: 650px) {
    .header {
      height: 100vh;
    }
    .title {
      font-size: 4rem;
    }
  }
`;

export default HomePageStyled;
