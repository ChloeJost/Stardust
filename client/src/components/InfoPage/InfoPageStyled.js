import styled from 'styled-components';

const InfoPageStyled = styled.div`
  background-color: ${props => props.theme.colors.darkBlue};
  height: 100vh;
  display: flex;
  justify-content: center;

  h1 {
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.largest};
    font-weight: bold;
    text-align: center;
    margin-bottom: ${props => props.theme.sizings.large};
  }

  .info-page {
    justify-content: space-between;
    width: 50%;
    margin: auto;
    padding: ${props => props.theme.sizings.large};
  }

  .text-infos {
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.default};
    text-align: justify;
    margin: ${props => props.theme.sizings.medium};
  }

  .contact-link {
    margin: ${props => props.theme.sizings.medium};
    padding: ${props => props.theme.sizings.medium};
    border-radius: ${props => props.theme.sizings.small};
    border: 1px solid ${props => props.theme.colors.white};
  }

  @media screen and (max-width: 650px) {
    height: 100vh;

    .info-page {
      width: auto;
      padding: ${props => props.theme.sizings.small};
    }

    h1 {
      font-size: ${props => props.theme.fontSizes.larger};
    }

    .text-infos {
      font-size: ${props => props.theme.fontSizes.default};
      margin: ${props => props.theme.sizings.medium};
    }

    button {
      display: block;
      margin: auto;
    }
  }
`;

export default InfoPageStyled;
