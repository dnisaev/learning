import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    backgroundColor?: string
    fontSize?: string
    fontColor?: string
    color?: string
    btnType: "primary" | "outlined"
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  //background-color: orangered;
    //background-color: ${props => props.backgroundColor || "black"};
  padding: 10px 20px;
  border-radius: 50px;
  //color: white;
    //color: ${props => props.fontColor || "white"};
  //font-size: 2rem;
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;

  &:hover {
    background-color: yellow;
    color: darkslategrey;
  }

  ${props => props.btnType === "outlined" && css <StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "white"};
    color: ${props => props.color || "red"};
    background-color: transparent;

    &:hover {
      border-color: red;
      color: white;
      background-color: transparent;
    }
  `}

  ${props => props.btnType === "primary" && css <StyledBtnPropsType>`
    background-color: ${props => props.color || "black"};
    color: white;
  `}

  ${props => props.active && css <StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px #444444;
  `}
`