import styled from 'styled-components';

const NewThreadStyled = styled.div`
  border: 1px solid ${(props) => props.theme.colors.darkBlue};
  border-radius: ${(props) => props.theme.radius.medium};

  .new-thread {
    color: ${(props) => props.theme.colors.darkBlue};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border: 1px solid #dddddd;
    border-radius: ${(props) => props.theme.radius.medium};
  }

  .field-newthread {
    width: 80%;
    color: red;
    border: 1px solid ${(props) => props.theme.colors.darkBlue};
    border-radius: ${(props) => props.theme.radius.medium};
  }

  input {
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
`;

export default NewThreadStyled;
