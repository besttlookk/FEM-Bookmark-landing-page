import { createGlobalStyle } from "styled-components";
import media from "./media";

const GlobalStyle = createGlobalStyle`

  :root{
    --col-blue:hsl(231, 69%, 60%);
    --col-red: hsl(0, 94%, 66%);
    --col-gray: hsl(229, 8%, 60%);
    --col-dark: hsl(229, 31%, 21%);

    --font-primary: 'Rubik', sans-serif;

    --height-header: 8rem;

    --shadow: 0px 5px 10px rgba(0,0,0,.2);

    --divider: 1px solid rgba(0, 0, 0, 0.2);
  }

  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  ::-webkit-scrollbar{
    width: 1.8rem;
  }

  ::-webkit-scrollbar-track{
    background-color: var(--col-gray);
  }

  ::-webkit-scrollbar-thumb{
    background-color: var(--col-red);
    border-radius: 10rem;
  }

  body{
    min-height: 100vh;
    font: 1.8rem;
    overflow-x: hidden;
    font-family: var(--font-primary);
    max-width: 100vw;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
}

h1,h2,h3{
  font-weight: 500;
  color: var(--col-dark);
}

h2{
  font-size: 2.4rem;
  margin-bottom: 1.4rem;
  letter-spacing: 1.1px;

  ${media.tablet}{
  font-size: 2.6rem;
  margin-bottom: 1.6rem;

  }

  ${media.laptop}{
  font-size: 2.8rem;
  margin-bottom: 1.8rem;

  }
}

h3{
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  letter-spacing: 1px;

  ${media.tablet}{
  font-size: 2rem;
  margin-bottom: 1.4rem;

  }

  ${media.laptop}{
  font-size: 2.4rem;
  margin-bottom: 1.6rem;

  }
}

p{
  color:var(--col-gray);
  line-height:1.8;
  font-size: 1.5rem;
}

`;

export default GlobalStyle;
