import styled from 'styled-components/macro';

export const Container = styled.div`
  color: white;
  background: black;
  display: flex;
  align-items: center;
  padding: 10px 5px;
`;

export const Title = styled.h1`\
  margin: 0;
  font-size: 36px;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Icon = styled.img`
  width: 25px;
  cursor: pointer;
  margin: 0 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const List = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-left: auto;
  padding: 0;
  &:last-of-type {
    margin-right: 20px;
  }
  `;

export const Text = styled.p`
  font-size: 16px;
  padding: 0 5px;
  cursor: pointer;
  margin: 0 25px;
  background: ${({ active }) => active ? "#f9f9f9" : null}
  &:hover {
    border-bottom: 1px solid white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SubMenu = styled.div`
position: absolute;
height: 100px;
color: black;
z-index: 1100;
left: 0;
top: 40px;
padding: 10px;
display: flex;
flex-direction: column;
background: #f9f9f9;
transition: all linear 0.3s;

 p {
  font-weight: 400;
  margin: 10px 25px;
}
`;









export const Item = styled.li`


`;

export const Link = styled.a`



`;