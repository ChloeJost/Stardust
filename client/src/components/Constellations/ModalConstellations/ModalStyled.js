import styled from 'styled-components';

const ModalStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.darkBlue};

  .modal {
    border-radius: ${props => props.theme.sizings.medium};
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.dark};
    width: 50%;
    z-index: 40;
    padding-bottom: ${props => props.theme.sizings.medium};
    padding-right: ${props => props.theme.sizings.medium};
  }

  .modal-mask {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }

  .modal-text {
    margin-left: ${props => props.theme.sizings.larger};
  }

  p {
    padding: ${props => props.theme.sizings.small};
    font-size: 0.8rem;
  }

  button {
    margin: ${props => props.theme.sizings.medium};
    padding: ${props => props.theme.sizings.small};
    border-radius: ${props => props.theme.sizings.small};
    border: 1px solid ${props => props.theme.colors.dark};
  }
`;

export default ModalStyled;
