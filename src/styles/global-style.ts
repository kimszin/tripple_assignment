import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize"; 
export const GlobalStyle = createGlobalStyle`  
  ${normalize}  
  html {    
    min-width: 1200px;  
  }  
`;
