import styled from "styled-components";

type ImageCardPropsType = {
    image?: string
}

export const ImageCard = styled.img<ImageCardPropsType>`
    width: 280px;
    height: 170px;
`
