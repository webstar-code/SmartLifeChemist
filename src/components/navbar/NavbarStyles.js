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

  &:hover {
    border-bottom: 1px solid white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;


export const Item = styled.li`


`;

export const Link = styled.a`



`;