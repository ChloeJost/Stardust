import styled from 'styled-components';

const ProfilStyled = styled.div`
  padding: ${props => props.theme.sizings.large};
  margin: auto;
  flex-direction: row;
  background-color: ${props => props.theme.colors.darkBlue};
  border-radius: ${props => props.theme.radius.medium};
  border: 1px solid ${props => props.theme.colors.white};
  height: 400px;
  width: 500px;
  opacity: 0.6;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;

  @media screen and (max-width:650px) {
    width: 100%;
    height: 300px;
  }


  .user-infos p {
    padding: ${props => props.theme.sizings.small};
    font-size: ${props => props.theme.sizings.default};
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.darkBlue};
    border: none;
    border-radius: ${props => props.theme.radius.medium};
    margin: ${props => props.theme.sizings.medium};
  }

  button {
    background-color: ${props => props.theme.colors.darkBlue};
    color: ${props =>
    props.color === 'warning'
      ? props.theme.colors.dark
      : props.theme.colors.white};
    padding: 0.75rem 1.25rem;
    margin: ${props => props.theme.sizings.large};
    border-radius: ${props => props.theme.radius.medium};
    font-size: ${props => props.theme.fontSizes.default};
    font-family: ${props => props.theme.fonts.default};
    border: 1px solid ${props => props.theme.colors.white};
    width: ${props => props.isFullwidth && '100%'};
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.colors.linkDark};
    }
  }
`;

export default ProfilStyled;
