import React from "react";
import "../Components/style.css"
export default function Header() {
    return (
    <header className="header">
        <img className="header--image" src={require("../Images/troll-face.png")} alt="Logo"></img>
        <h3 className="header--title">MEME GENERATOR</h3>
        <h5 className="header--desc">React Course - Project 3</h5>
    </header>
    );
}