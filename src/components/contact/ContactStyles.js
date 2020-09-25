import styled from 'styled-components/macro';

export const Container = styled.div`
display: flex;
background: black;
color: white;
padding: 50px 25px;
`;

export const Header = styled.h1`
font-size: 50px;
font-weight: 600;
text-align: center;


@media (max-width: 768px) {
  font-size: 35px;
}

`;

export const Pane = styled.div`
width: 50%;
display: flex;
flex-direction: ${({direction}) => direction};
justify-content: center;


@media (max-width: 768px) {
  width: 80%;
}
`;

export const Title = styled.h2`
font-size: 40px;
margin: 10px 0px;

@media (max-width: 768px) {
  font-size: 32px;
}
`;

export const Text = styled.p`
font-size: 18px;
margin: 0;
margin-bottom: 10px;
font-family: 'Lora', serif;


@media (max-width: 768px) {
  font-size: 16px;
}

`;

export const Details = styled.div`
display: flex;
flex-direction : column;
  

`;

export const Item = styled.div`
display: flex;
align-items: center;
margin-left: 20px;

`;

export const Icon = styled.img`
height: 20px;
margin-right: 10px;
margin-bottom: 10px;
`;

export const Map = styled.iframe`
width: ${({width}) => width};
height: ${({height}) => height};


@media (max-width: 768px) {
  display: none;
}


`;


