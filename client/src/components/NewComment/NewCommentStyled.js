import styled from 'styled-components';

const NewThreadStyled = styled.div`
  z-index: 6;

  .link-register {
    color: ${(props) => props.theme.colors.danger};

    &:hover {
      color: ${(props) => props.theme.colors.linkDark};
    }
  }

  .comment {
    border-radius: ${(props) => props.theme.radius.medium};
    border: 1px solid ${(props) => props.theme.colors.darkBlue};
    background-color: white;
  }

  .comment p {
    color: ${(props) => props.theme.colors.darkBlue};
    padding-top: ${(props) => props.theme.sizings.medium};
  }

  .not-logged-comment {
    padding: 0.8rem;
    background-color: ${(props) => props.theme.colors.darkBlue};
    border-radius: ${(props) => props.theme.radius.medium};
  }

  Button {
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: ${(props) =>
      props.color === 'warning'
        ? props.theme.colors.dark
        : props.theme.colors.white};
    padding: 0.75rem 1.25rem;
    margin: ${(props) => props.theme.sizings.large};
    border-radius: ${(props) => props.theme.radius.medium};
    font-size: ${(props) => props.theme.fontSizes.default};
    font-family: ${(props) => props.theme.fonts.default};
    border: 1px solid ${(props) => props.theme.colors.white};
    width: ${(props) => props.isFullwidth && '100%'};
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.colors.linkDark};
    }
  }
`;

export default NewThreadStyled;
