import styled from 'styled-components';

const LoginStyled = styled.div`
  .login-form-element {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .field-log {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    
  }

  .message-profil {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: ${props => props.theme.sizings.small};
  }

  .profil-link {
    padding: ${props => props.theme.sizings.small};
    color: ${props => props.theme.colors.white};
    font-weight: bold;

    &:hover {
      color: ${props => props.theme.colors.linkDark};
    }
  }

  .login-form-message {
    text-align: right;
    margin: 0.3em 1em;
  }

  .login-form-logged {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .login-form-button {
    font-weight: 700;
    font-size: 1em;
    color: #fff;
    background-color: #60a3bc;
    border-radius: 0.3em;
    border: 0;
    padding: 0.7em;
    height: 2.5em;
    margin-left: 0.3rem;
  }

  .link-register {
    width: 100%;
    text-align: left;
    margin-left: 12px;
    color: ${props => props.theme.colors.white};

    &:hover {
      color: ${props => props.theme.colors.linkDark};
    }
  }

  .register {
    font-size: ${props => props.theme.fontSizes.default};
    margin-left: ${props => props.theme.sizings.medium};
  }

`;

export default LoginStyled;
