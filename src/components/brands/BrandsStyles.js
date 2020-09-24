import styled from 'styled-components/macro';


export const Container = styled.div`
width: 100%;
background: grey;
overflow: hidden;

`;

export const Inner = styled.div`
display: flex;
flex-direction: column;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(11, 150px);
margin-left: ${({marginLeft}) => marginLeft};
align-items: center;
grid-gap: 50px;
margin: 20px 0px;
padding: 0px 100px;
transform: translate(0,0);
animation: slide ${({speed}) => speed} linear ${({delay}) => delay} infinite;

@keyframes slide {
0% { transform: translate(0,0); }
100% { transform: translate(-100%,0); }
}

@media (max-width: 768px) {
grid-template-columns: repeat(10, 100px);

}

`;

export const Icon = styled.img`
width: 100%;

`;
