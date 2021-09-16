import styled from "styled-components";
import backgroundLogin from "../../assets/backgroundLogin.jpg";
import { shade } from "polished";
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 20px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
      color: #4c4c66;
    }
    
    
    a {
      color: #53b9ea;
  
      margin-top: 7vh;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#53B9EA")};
      }
    }

    > a {
      color: #6f6c99;
      display: block;
      text-decoration: none;
      transition: color 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 16px;
      }
      &:hover {
        color: ${shade(0.2, "#6F6C99")};
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundLogin}) no-repeat center;
  background-size: cover;
`;
