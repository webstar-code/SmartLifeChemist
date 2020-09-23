import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
body, html {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F9F9F9;
  color: #333333;
  font-size: 16px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: inherit;
}


`;
