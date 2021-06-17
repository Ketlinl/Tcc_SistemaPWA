import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      font-family: 'Hammersmith One',Open Sans, sans-serif;
      background: ${({ theme }) => theme.colors.background}
    }

    .textoHeader{
      font-size: 20px;
      font-weight: 600;
    }
  .headerAlign{
  display: flex;
    justify-content: space-evenly;
    text-align: center;
    width: 75%;
}

   .btn {
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      background: #FFC757;
      height: 46px;
      border: 0;
      border-radius: 2px;
      width: 90%;
      margin-top: 40px;
      box-shadow: 2px 2px 4px #0000003b;
    }
    input,
    label {
      width: 100%;
      height: 3rem;
      font-size: 1rem;
      margin-top: 30px;
      color: #000;
    }
  
    
    /* Interation */
    input:valid,
    input:focus {
      border-bottom: 2px solid #A5A5A5;  
    }
    
    input:valid + label,
    input:focus + label {
      color: #D8D8D8;
      font-size: .8rem;
      top: -30px;
      pointer-events: none;
    }
    .input-container {
      position: relative;
    }
    input {
      border: 0;
      border-bottom: 2px solid #D8D8D8 !important;
      outline: none;
      transition: .2s ease-in-out;
      box-sizing: border-box;
    }
`
