import styled from 'styled-components/macro';


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 300px;
margin: 100px auto;

`;

export const Icon = styled.img`
position: absolute;
left: ${({ left }) => left};
right: ${({ right }) => right};
cursor: pointer;
padding: 10px;
height: 70px;
background-color: rgba(255,255,255,0.5);

&:hover {
  background-color: rgba(189, 245, 180, 1);
}

@media (max-width: 768px) {
  height: 30px;
}


`;

export const Image = styled.img`
height: 100%;
-webkit-animation-name: fade;
-webkit-animation-duration: 1.5s;
animation-name: fade;
animation-duration: 1.5s;
}
@media (max-width: 768px){
width: 100%;

}

@-webkit-keyframes fade {
from {opacity: .4}
to {opacity: 1}
}

@keyframes fade {
from {opacity: .4}
to {opacity: 1}
}
`;
