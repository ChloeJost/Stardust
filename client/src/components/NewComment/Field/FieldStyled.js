import styled from 'styled-components';

const FieldStyled = styled.div`
  .field {
    margin: 0.3em;
    position: relative;
    height: 100%;
  }
  .field-input {
    display: block;

    height: 10rem;
    padding: ${(props) => props.theme.sizings.small};
    font-size: ${(props) => props.theme.fontSizes.default};
    border: 1px solid ${(props) => props.theme.colors.darkBlue};
    border-radius: ${(props) => props.theme.radius.medium};
    margin: 0 auto;

    &:hover {
      border: 1px solid ${(props) => props.theme.colors.linkDark};
    }
  }
  .field-input:focus {
    border-color: #f17f42;
  }
  .field-input:focus + .field-label {
    color: #f17f42;
  }

  .field--has-content .field-label {
    display: block;
  }

  .field--has-content .field-input {
    padding: 1.4em 0.7em 0.4em;
  }

  .field-label {
    display: none;
    position: absolute;
    top: 0.2rem;
    left: 0.7rem;
    font-weight: 700;
    color: #999;
    font-size: 0.7em;
    text-transform: uppercase;
    font-family: sans-serif;
    animation: labelSlideUpAndShow 0.3s;
  }
  @keyframes labelSlideUpAndShow {
    0% {
      transform: translateY(1em);
      opacity: 0;
    }
    100% {
      transform: translateY(0em);
      opacity: 1;
    }
  }
`;

export default FieldStyled;
