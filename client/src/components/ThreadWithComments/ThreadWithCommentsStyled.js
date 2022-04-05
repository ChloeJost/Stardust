import styled from 'styled-components';

const ThreadsWithCommentsStyled = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  border-radius: 3px;
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  margin: auto auto;
  padding: 30px;

  @media screen and (max-width: 650px) {
    width: 100%;
  }

  .content-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    margin-bottom: 2rem;

    @media screen and (max-width: 650px) {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 0.3rem;
      margin-top: 1rem;
    }
  }

  .comments-section {
    padding: ${(props) => props.theme.sizings.large};
    margin-bottom: ${(props) => props.theme.sizings.larger};
    width: 100%;
    overflow-y: auto;
    max-height: 600px;
    border-radius: ${(props) => props.theme.radius.medium};
    background-color: white;
  }

  .content {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.darkBlue};
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.radius.medium};
    border: 1px solid ${(props) => props.theme.colors.darkBlue};
    padding: 2rem;
    text-align: center;

    h2 {
      color: ${(props) => props.theme.colors.darkBlue};
      size: ${(props) => props.theme.sizings.largest};
      font-weight: bold;
      text-transform: uppercase;
    }

    @media screen and (max-width: 650px) {
      margin-right: 0rem;
      padding: 1rem;
      margin: 1rem;
    }
  }

  .content-post {
    width: 60vw;
    height: 5rem;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.darkBlue};
    border-radius: ${(props) => props.theme.radius.medium};
    border: 1px solid ${(props) => props.theme.colors.darkBlue};
    text-align: left;
    margin-bottom: 0.5rem;
    padding: 0.3rem 0.5rem;
  }

  .action-post {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: right;
  }

  .info-author {
    color: black;
    font-style: italic;
    margin-right: 1rem;
  }

  .delete-post {
    background-color: #81b2c9;
    border-radius: 3px;
    border: 1px solid #ccc;
    color: white;

    &:hover {
      color: #222f3e;
    }
  }

  .form-comments {
    border-radius: 3px;
    text-align: center;
  }
`;

export default ThreadsWithCommentsStyled;
