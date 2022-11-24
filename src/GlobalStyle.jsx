import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    
    padding:0;
    box-sizing:border-box;
}
html{
    overflow-x:hidden; 
}
body {
    overflow-x: hidden;
     scrollbar-color: rgb(98 84 243);
      scrollbar-width: thin;
  }
  body::-webkit-scrollbar {
    width: 1.5rem;
  }
  body::-webkit-scrollbar-track {
     background-color: rgb(24 24 29);
  }
  body::-webkit-scrollbar-thumb {
   
    background: #fff;
      border: 5px solid transparent;
      border-radius: 9px;
      background-clip: content-box;
  }
  
a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  .container {
    max-width: 120rem;
    margin: 0 auto;
  }
  .grid {
    display: grid;
    gap: 9rem;
  }
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-three-column {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 4.8rem;

  }
  .grid-four-column{
     grid-template-columns: 1fr 1.2fr .5fr .8fr ;
  }
@media (max-width:${({ theme }) => theme.media.mobile}) {
    html{
      font-size: 50%;
    }
    .grid{
      gap: 3.2rem;
    }
    .grid-two-column, .grid-three-column, .grid-four-column{
      grid-template-columns: 1fr;
    }
}
`