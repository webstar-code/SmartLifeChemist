import styled, {createGlobalStyle} from 'styled-components/macro';

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;

export const Container = styled.div`
position: absolute;
top: 50px;
width: 100%;
background-color: ${({ bg }) => bg};
height: ${({ active }) => active === true ? "100vh" : "0"};
display: ${({ active }) => active === true ? "block" : "none"};
transition: all linear 1s;
z-index: 1000;
`;

export const List = styled.div`
display: flex;
flex-direction: column;
margin: 10px 20px;
`;

export const ListTitle = styled.h4`
font-size: 18px;
font-weight: 600;
margin: 10px 0px 5px 0px;
`;

export const Item = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-left: 10px;
padding: 5px;
border-bottom: 1px solid black;
cursor: pointer;
`;
export const Text = styled.p`
font-size: 16px;
font-weight: 600;
`;

export const Icon = styled.img`
width: 20px;
height: auto;
padding: 5px;
`;





