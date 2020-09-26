import styled from 'styled-components/macro';

export const Container = styled.div`
background: linear-gradient(180deg, rgba(129, 241, 111, 0.51) 0%, rgba(196, 196, 196, 0) 100%);
padding: 50px 0px;
@media (max-width: 768px) {
  background: none;
}
`;

export const Header = styled.h1`
font-size: 50px;
font-weight: 600;
text-align: center;


@media (max-width: 768px) {
  font-size: 35px;
}

`;

export const Item = styled.div`
display: flex;
padding: 20px 5%;

@media (max-width) {
  flex-direction: column;
}

`;

export const Inner = styled.div`
width: 100%;
display: flex;
flex-direction: ${({ direction }) => direction};
justify-content: space-between;
padding: 20px;
align-items: center;

@media (max-width: 768px) {
  flex-direction: column;
  background: linear-gradient(180deg, rgba(129, 241, 111, 0.51) 0%, rgba(196, 196, 196, 0) 100%);
  border-radius: 48px;
padding-bottom: 100px;

}

`;

export const Pane = styled.div`
display: flex;
flex-direction: column;
width: 50%;

@media (max-width: 768px) {
  text-align:center;
  width: 80%;
}
`;


export const Title = styled.h2`
font-size: 40px;
color: black;
font-weight: bold;
margin-bottom: 20px;
@media (max-width: 768px) {
  font-size: 32px;
}
`;

export const Subtitle = styled.p`
font-size: 18px;
margin: 0;
font-family: 'Lora', serif;

@media (max-width: 768px) {
  font-size: 16px;
}
`;

export const Image = styled.img`
max-width: 50%;
height: auto;
margin: auto;

`;


