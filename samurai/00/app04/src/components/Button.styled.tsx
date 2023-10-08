import styled from "styled-components";
import {mainTheme} from "../styles/Theme";

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  width: 86px;
  height: 30px;
  font-family: "Inter", sans-serif;
  color: ${mainTheme.colors.cardBackground};
  background-color: ${mainTheme.colors.btnBackground};

  &:hover {
    border: 2px solid ${mainTheme.colors.btnBorder};
    color: ${mainTheme.colors.btnBorder};
    background-color: ${mainTheme.colors.cardBackground};
  }

  &:last-child {
    border: 2px solid ${mainTheme.colors.btnBorder};
    color: ${mainTheme.colors.btnBackground};
    background-color: ${mainTheme.colors.transparent};

    &:hover {
      color: ${mainTheme.colors.cardBackground};
      background-color: ${mainTheme.colors.btnBackground};
    }
  }



`