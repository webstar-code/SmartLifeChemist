import styled from 'styled-components/macro';

export const Container = styled.div``;


// export const Background = styled.div`

// background-image: url("/images/drugstore.gif");
// background-size: cover;
// position: absolute;
// width: 284px;
// height: 287px;
// left: 70px;
// top: 346px;
// @media (max-width: 768px) {
// background-image: url(/images/drug.png);


// }

// `;
export const GIF = styled.img`
display: block;
@media (max-width: 768px) {
  display: none;
}
`;


export const Image = styled.img`
position: absolute;
width: 284px;
height: 287px;
left: 70px;
top: 346px;

@media(min-width: 768px) {
  display: none;
}

`;




export const Title = styled.h1`
font-size: 50px;


@media (max-width: 768px) {
  font-size: 35px
}

`;