import React from 'react';
import {mainTheme} from "./styles/Theme";
import styled from "styled-components";
import {Button} from "./components/Button.styled";
import {Card} from "./components/Card.styled";
import mainPicture from "./images/hero.jpg";

function App() {
    return (
        <Album>
            <Card>
                <img src={mainPicture} alt={"Hero"}/>
                <h3>Headline</h3>
                <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
                <Button background={mainTheme.colors.blue}>See more</Button>
                <Button background={mainTheme.colors.transparent}>Save</Button>
            </Card>
        </Album>
    );
}

export default App;

const Album = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${mainTheme.media.tablet} {
    flex-direction: column;
  }
`