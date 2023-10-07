import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {myTheme} from "./styles/Theme";

function App() {
    return (
        <div className="App">

            <Box>
                {/*<StyledBtn backgroundColor={"red"} fontSize={"3rem"}>Hello</StyledBtn>*/}
                {/*<StyledBtn fontColor={"green"}>how</StyledBtn>*/}
                {/*<StyledBtn fontColor={"blue"} fontSize={"1rem"}>are</StyledBtn>*/}
                {/*<StyledBtn>you?</StyledBtn>*/}

                <StyledBtn color={myTheme.colors.primary} btnType={"primary"} active>Hi</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} btnType={"outlined"}>there</StyledBtn>
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

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`