import mainPicture from "../images/hero.jpg";
import React from "react";

export const mainTheme = {
    colors: {
        mainBackground: "#e3e3e3",
        cardBackground: "#fff",
        textTitle: "#000",
        textCard: "#abb3ba",
        btnBackground: "#4e71fe",
        btnBorder: "#4e71fe",
        transparent: "transparent"
    },

    images: {
        hero: <img src={mainPicture} alt={"Hero"}/>
    },

    media: {
        tablet: "screen and (max-width: 768px)",
        mobile: "screen and (max-width: 576px)",
    }
}