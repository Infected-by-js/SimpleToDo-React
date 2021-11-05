import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  :root {

    //light theme
    --color-black: #555555;
    --color-gray: #AFAFAF;
    --color-violet: #AE80CF;
    --color-red: #F3477A;
    --color-inactive: #959EA6;

    --color-background-inactive:  #F4F5F7;
    --color-background: #FCFDFF;

    --color-border: #DEE4EB;

    //status
    --color-status-pending: rgba(#56CCF2, 0.5);
    --color-status-complete: rgba( #219653, 0.5);


    //priority
    --color-priority-minor: rgba(#27AE60, 0.7);
    --color-priority-normal: rgba(#F2C94C, 0.7);
    --color-priority-critical: rgba(#F3477A, 0.7);



  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif, system-ui;
	color: var(--color-black);
  outline: none;

  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d3d5d7 ;

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
