import styled from "styled-components";
import {mainTheme} from "../styles/Theme";

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  width: 86px;
  height: 30px;
  font-family: "Inter", sans-serif;
  color: ${mainTheme.colors.white};
  background-color: ${mainTheme.colors.blue};

  &:hover {
    border: 2px solid ${mainTheme.colors.blue};
    color: ${mainTheme.colors.blue};
    background-color: ${mainTheme.colors.white};
  }

  &:last-child {
    border: 2px solid ${mainTheme.colors.blue};
    color: ${mainTheme.colors.blue};
    background-color: ${mainTheme.colors.transparent};

    &:hover {
      color: ${mainTheme.colors.white};
      background-color: ${mainTheme.colors.blue};
    }
  }



`