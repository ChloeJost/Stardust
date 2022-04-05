import styled from 'styled-components';

const ThreadStyled = styled.div`
  font-size: 1em;
  background-color: ${(props) => props.theme.colors.darkBlue};
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 0.3em;
  margin: ${(props) => props.theme.sizings.medium};
  padding: ${(props) => props.theme.sizings.medium};

  .show-thread {
    color: ${(props) => props.theme.colors.white};

    &:hover {
      color: ${(props) => props.theme.colors.linkDark};
    }
  }

  .nbr-comments {
    text-align: right;
  }

  a {
    font-weight: bold;
    color: red;
  }
`;

export default ThreadStyled;
