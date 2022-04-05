import styled from 'styled-components';
export const TermesStyled = styled.div`
background-color: ${(props) => props.theme.colors.darkBlue};
margin-bottom: ${(props) => props.theme.sizings.medium};
height: 80vh;
overflow-y: auto;
.termes {
max-width: 50%;
margin: 0 auto;
padding: ${(props) => props.theme.sizings.small};
text-align: center;
}
h1 {
max-width: auto;
color: white;
text-align: center;
padding-top: 12rem;
margin-top: ${(props) => props.theme.sizings.large};
text-transform: uppercase;
font-size: ${(props) => props.theme.fontSizes.larger};
padding-bottom: ${(props) => props.theme.sizings.larger};
line-height: 2rem;
font-weight: bold;
}
h2 {
color: ${(props) => props.theme.colors.white};
font-size: ${(props) => props.theme.sizings.medium};
padding: ${(props) => props.theme.sizings.large};
text-align: center;
font-weight: bold;
}
p,
li {
font-size: ${(props) => props.theme.fontSizes.medium};
color: ${(props) => props.theme.colors.white};
margin-left: ${(props) => props.theme.sizings.large};
padding: ${(props) => props.theme.sizings.small};
max-width: 80%;
text-align: justify;
}
/* MEDIA QUERIES */
@media only screen and (max-width : 480px){
background-color:green;
h1,h2{
text-align:left;
font-size: ${(props) => props.theme.fontSizes.medium};;
}
p,li{
text-align:left;
font-size: ${(props) => props.theme.fontSizes.small};;
width:100%;
}
}
`;
export default TermesStyled;
