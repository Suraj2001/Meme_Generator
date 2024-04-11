import { useState } from "react";
import memeData from "./memeData";

export default function Meme(){
    let [memeImage, setMemeImage] = useState("");

    function showMeme(){
        const memesData = memeData.data.memes;
        const randomNum = Math.floor(Math. random()*memesData.length);
        setMemeImage(memesData[randomNum].url);
    }

    return(
        <main>
        <div className="form">
            <div>
                <label>Top Text
                    <input
                        type="text"
                        placeholder="Shut up"
                        className="form--input"
                    /></label>
            </div>
            <div>
                <label htmlFor="bottom-text">Bottom Text</label>
                <input
                        id="bottom-text"
                        type="text"
                        placeholder="and take my money"
                        className="form--input"
                    />
            </div>
            <button
                className="form--button"
                onClick={showMeme}> 
                Get a new meme image 🖼
            </button>
        </div>
        <img src={memeImage} alt={memeImage} className="meme--Image"/>
    </main>
    );
}