import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const form = styled.form`
 
  
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
 
  button {
    color: #fff;
    font-size: 16px;
    background: #FFC757;
    height: 46px;
    border: 0;
    border-radius: 2px;
    width: 90%;
    margin-top: 40px;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }

  .input-container {
    position: relative;
  }
  
  input {
    border: 0;
    border-bottom: 2px solid #D8D8D8;
    outline: none;
    transition: .2s ease-in-out;
    box-sizing: border-box;
  }
  
  label {
    top: 0;
    left: 0; right: 0;
    color: #616161;
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 1rem;
    cursor: text;
    transition: .2s ease-in-out;
    box-sizing: border-box;
  }
  
 
`;