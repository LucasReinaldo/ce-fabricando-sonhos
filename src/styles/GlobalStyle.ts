import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    /* UI Colors */
    --primary-color: #FFF;
    --secondary-color: #FF890c;
    --tertiary-color: #FF9D0C;
    --quaternary-color: #003049;
    --background-color: #EDEDED;

    --text-color: #3F3F3F;

    --color--primary: hsl(var(--primary-hue), 100%, 44%);
    --color--primary--hover: hsl(var(--primary-hue), 100%, 39%);
    --color--primary--active: hsl(var(--primary-hue), 84%, 30%);

    /* ... */
    --border-color: #EDEDED;

    /* Box Shadows */
    --primary-shadow: rgba(255, 255, 255, 0.15);
    --secondary-shadow: rgba(255, 137, 12, 0.5);
    --shadow: 0px 2px 4px rgba(37, 37, 37, 0.1);
  }

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body{
      background: var(--primary-color);
      color: var(--text-color);
      min-height: 100vh;
      max-width: 100vw;
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
      font: 1.6rem 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
      font-family: 'Poppins', sans-serif;
    }

    button, a {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    // Responsive
  html {
    font-size: 62.5%;

    @media (min-width: 2000px) {
      body{
        margin: auto;
        max-width: 200rem;
      }
    }

    @media (max-width: 1080px) {
      font-size: 50%;
    }

    @media (max-width: 720px) {
      font-size: 45%;
    }

    @media (max-width: 425px) {
      font-size: 40%;
    }
  }
`;
