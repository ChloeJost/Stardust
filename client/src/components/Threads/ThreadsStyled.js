import styled from 'styled-components';

const ThreadsStyled = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  position: fixed;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  justify-content: flex-start;
  width: 80%;

  @media screen and (max-width: 650px) {
    width: 100%;
  }

  .thread {
    padding: ${(props) => props.theme.sizings.large};
    margin-bottom: ${(props) => props.theme.sizings.larger};
    width: 100%;
    overflow-y: auto;
    max-height: 600px;
    border-radius: ${(props) => props.theme.radius.medium};

    @media screen and (max-width: 650px) {
      padding: 0.1rem;
      margin-bottom: ${(props) => props.theme.sizings.larger};
      width: 100%;
      overflow-y: auto;
      max-height: 600px;
      border-radius: ${(props) => props.theme.radius.medium};
    }
  }

  .not-logged-comment {
    text-align: center;
    color: ${(props) => props.theme.colors.darkBlue};

    a {
      color: ${(props) => props.theme.colors.linkDark};
    }
  }

  h1 {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.larger};
    font-weight: bold;
    text-align: center;
    margin: ${(props) => props.theme.sizings.medium};
  }
`;

export default ThreadsStyled;
