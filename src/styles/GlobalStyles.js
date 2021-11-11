import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  :root {
    //status
    --color-status-pending: #56CCF270;
    --color-status-complete: #21965370;

    //priority
    --color-priority-minor: #27AE6080;
    --color-priority-normal: #F2C94C80;
    --color-priority-critical: #F3477A80;  
    
  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif, system-ui;
    color: #555555;
    outline: none;

  }
 
  a {
    color: inherit;
    text-decoration: none;

  }

  button {
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;

  }
`;
