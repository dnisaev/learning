import styled from "styled-components";
import {mainTheme} from "../styles/Theme";

export const Card = styled.div`
  padding: 10px;
  display: block;
  width: 280px;
  height: 330px;
  background-color: ${mainTheme.colors.white};
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  font-family: "Inter", sans-serif;

  img {
    width: 280px;
    height: 170px;
    border-radius: 10px;
  }

  h3 {
    width: 70px;
    margin-top: 20px;
    margin-left: 10px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }

  p {
    width: 260px;
    height: 40px;
    margin-top: 20px;
    margin-left: 10px;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: ${mainTheme.colors.grey}
  }

  button {
    margin-top: 20px;
    margin-left: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
  }

`