import styled from 'styled-components';

const TeamPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;

  .team-page--header {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
  }

  .team-page--header h1 {
    width: 50vh;
  }

  .team-page--content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .contact {
    width: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input,
  text-area {
    display: block;
    width: 100%;

    &:hover {
      border: 1px solid ${(props) => props.theme.colors.linkDark};
    }
  }

  input,
  .message-text {
    display: block;
    padding: ${(props) => props.theme.sizings.small};
    font-size: ${(props) => props.theme.fontSizes.default};
    border: 1px solid ${(props) => props.theme.colors.darkBlue};
    border-radius: ${(props) => props.theme.radius.medium};
    margin: ${(props) => props.theme.sizings.large} 0;

    &:hover {
      border: 1px solid ${(props) => props.theme.colors.linkDark};
    }
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.largest};
    margin-bottom: ${(props) => props.theme.sizings.medium};
  }

  p {
    padding: ${(props) => props.theme.sizings.small};
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  button {
    margin: ${(props) => props.theme.sizings.medium} 0;
  }
`;

export default TeamPageStyled;
