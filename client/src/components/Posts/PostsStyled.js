import styled from 'styled-components';

const PostsStyled = styled.div`
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
    height: 200px;
  }
  
`;

export default PostsStyled;
