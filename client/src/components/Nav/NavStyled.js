import styled from 'styled-components';
import planet from './icons/planet.svg';
import helmet from './icons/helmet.svg';

const NavStyled = styled.nav`
  width: 100%;
  top: 10px;
  z-index: 5;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  color: ${props => props.theme.colors.white};
  position: fixed;
  background-color: transparent;

  nav {
    padding: .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 650px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .button-planet {
    background-image: url(${planet});
    padding: ${props => props.theme.sizings.large};
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    margin-left: ${props => props.theme.sizings.medium};

    @media screen and (max-width: 650px) {
      
      height: ${props => props.theme.sizings.small};
    }
  }

  .button-login {
    background-image: url(${helmet});
    padding: ${props => props.theme.sizings.large};
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    
  }

  .link-menu {
    margin: ${props => props.theme.sizings.medium};
    font-size: ${props => props.theme.fontSizes.large};
    &:hover {
      text-decoration: none;
      color: ${props => props.theme.colors.linkDark};
    }
  }

  .loginForm {
    max-width: 390px;
    animation: fadein 2s;
    transition: transform 0.3s ease-in-out;
  }

  .loginForm--closed {
    display: none;
  }

  .nav-menu {
    max-width: 390px;
    animation: fadein 2s;
    transition: transform 0.3s ease-in-out;
  }

  .nav-menu--closed {
    display: none;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default NavStyled;
