import styled from "styled-components";
import {mainTheme} from "../styles/Theme";

type ButtonPropsType = {
    background?: string
    active?: boolean
}

export const Button = styled.button<ButtonPropsType>`
  border: none;
  border-radius: 5px;
  width: 86px;
  height: 30px;
  font-family: "Inter", sans-serif;
  color: ${mainTheme.colors.white};
  background-color: ${props => props.background};

  &:hover {
    border: 2px solid ${mainTheme.colors.blue};
    color: ${mainTheme.colors.blue};
    background-color: ${mainTheme.colors.black};
  }

  &:last-child {
    border: 2px solid ${mainTheme.colors.blue};
    color: ${mainTheme.colors.blue};
    background-color: ${props => props.background};

    &:hover {
      color: ${mainTheme.colors.white};
      background-color: ${mainTheme.colors.black};
    }
  }



`