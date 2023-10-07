import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: orangered;
  padding: 10px 20px;
  border-radius: 50px;
  color: aliceblue;
  font-size: 2rem;
  font-weight: bold;

  &:last-child {
    background-color: black;
    color: white;
  }

  &:hover {
    background-color: yellow;
    color: darkslategrey;
  }
`

export const SuperButton = styled(StyledBtn)`
  background-color: aqua;
  color: darkslategrey;
  
  &:hover {
    animation: ${MyAnimation} 1s ease-in-out infinite; 
  };
`