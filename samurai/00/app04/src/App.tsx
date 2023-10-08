import React from 'react';
import {mainTheme} from "./styles/Theme";
import styled from "styled-components";
import {Button} from "./components/Button.styled";
import {Card} from "./components/Card.styled";

function App() {
    return (
        <Album>
            <Card>
                {mainTheme.images.hero}
                <h3>Headline</h3>
                <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
                <Button>See more</Button>
                <Button>Save</Button>
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