import styled from 'styled-components';

const TeamPhotosStyled = styled.div`
  width: 50vh;

  h1 {
    font-size: ${(props) => props.theme.fontSizes.largest};
    margin: 0 auto;
    text-align: center;
    margin-bottom: ${(props) => props.theme.sizings.medium};
  }

  .team-photos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: ${(props) => props.theme.sizings.medium};
  }

  .team-photos--member {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-shadow: 1px 1px 3px ${(props) => props.theme.colors.dark};
  }

  .team-photos--photo {
    background-size: cover;
    width: 150px;
    height: 150px;
    border: 1px solid ${(props) => props.theme.colors.white};
    margin: ${(props) => props.theme.sizings.medium};
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    text-align: center;
  }
`;

export default TeamPhotosStyled;
