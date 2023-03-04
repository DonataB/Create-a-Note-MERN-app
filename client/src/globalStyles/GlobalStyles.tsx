import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, *:before, *:after{
   box-sizing: border-box;
   padding: 0;
   margin: 0;
}

html {
   scroll-behavior: smooth;
}
body {
   font-family: 'Poppins', sans-serif;
}
`;

export default GlobalStyles;
