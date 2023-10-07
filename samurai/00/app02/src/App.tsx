import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="#">One</a></li>
                    <li><a href="#">Two</a></li>
                    <li><a href="#">Three</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
                <StyledBtn as={"a"} href={"#"}>Link</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperButton>Super Button</SuperButton>
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: crosshair;
  }
  
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`