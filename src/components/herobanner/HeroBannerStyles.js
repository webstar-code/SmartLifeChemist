import styled from 'styled-components/macro';

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;

@media (max-width: 768px) {
 
  height: 100vh;
}
`;

export const GIF = styled.img`
height: 100%;
position: absolute;
top: 0;
right: 0;
display: block;
@media (max-width: 768px) {
  display: none;
}
`;


export const Image = styled.img`
position: absolute;
  max-width: 280px;
  width: 60%;
  height: auto;
  bottom: 0;

@media(min-width: 768px) {
  display: none;
}

`;

export const Title = styled.h1`
z-index: 100;
font-size: 84px;
position: absolute;
top: 75px;
left: 100px;
max-width: 80%;
text-align: left;
text-shadow: 2px 2px 0px beige;

@media (max-width: 768px) {
  font-size: 50px;
  left: 25px;
}
`;