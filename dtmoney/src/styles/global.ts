import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --blue: #5429CC;
    --blue-light:#6933FF;
    --green:#33CC95;
    --red:#E52E4D;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff;
}

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html{
    @media(max-width:1080px){
        font-size: 93.75%;
    }
    @media(max-width:720px){
        font-size:87.5%;
    }
}

body{
    background: var(--background);
    -webkit-font-smoothing:antialiased;
}

button{
    cursor:pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay{
    background:rgba(0,0,0,0.5);

    position:fixed;
    top: 0;
    left: 0;
    bottom:0;
    right:0;

    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content{
    width:100%;
    max-width:576px;
    background:var(--background);
    padding:3rem;
    position:relative;
    border-radius: 0.24rem;
}
.react-modal-close{
    position:absolute;
    right:1.5rem;
    top:1.5rem;
    border:0;
    background:transparent;

    transition: filter 0.2s;

    &:hover{
        filter:brightness(0.8);
    }
}
`