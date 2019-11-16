import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 16px;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }

    ol,
    ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    body {
        @import url('https://fonts.googleapis.com/css?family=Work+Sans|Anton|Biryani:400,700,900&display=swap');
        font-family: 'Work Sans', -apple-system, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #5c5c5c;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

`;

export default GlobalStyles;
