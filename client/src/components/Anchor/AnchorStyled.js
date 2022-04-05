import styled from 'styled-components';

const AnchorStyled = styled.div`
  display: flex;
  position: fixed;
  z-index: 0;
  bottom: 0;
  width: 100vw;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  a {
    color: ${props => props.theme.colors.white};
    padding-bottom: ${props => props.theme.sizings.medium};
    font-size: ${props => props.theme.sizings.larger};
    animation: pulse 1s infinite;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.mediumBlue};
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export default AnchorStyled;
