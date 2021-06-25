import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: roboto;
 }

 body {
    background: #373535;
    color: white;
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    width: 9rem;
    height: 2rem;
    background-color: #7B7979;
    color: black;
    border: 0.5px solid #7B7979;
    border-radius: 5px;
    margin: 5px;
    font-weight: bold;
    font-size: 0.8rem;
  }

  button:hover {
    box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    transition: 0.2s;
    background-color: white;
    color: black;
  }
  
  a {
    text-decoration: none;
    color: #7B7979;
  }
`;
