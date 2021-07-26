import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: auto;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cart {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  section {
    height: 100vh;
    width: 100%;
    background: #CCD1D9;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: 20px 20px 0 0;
    margin-top: 16px;

    .product-container {
      display: grid;
      text-align: center;
      height: 350px;
      background: #fff;
      border-radius: 12px;
      padding: 12px;
      margin-top: 16px;
    }

    .product-container span, h4, h6, button {
      margin-top: 8px;
    }

    button {
      height: 40px;
      border: solid 1px #CCD1D9;
      border-radius: 20px;
      color: grey;
    }

    button:hover{
      color: white;
      background-color: green;
      transition: 0.5s;
    }
  }
`