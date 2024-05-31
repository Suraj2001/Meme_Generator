import { useState, useEffect } from "react";

export default function Meme(){
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImg:"http://i.imgflip.com/1bij.jpg",
    });

    const [allMemes, setAllMemes] = useState([]); // [{}, {}, {}

    useEffect(() => {
        async function getAllMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await (res).json();
            setAllMemes(data.data.memes);
        }
        getAllMemes();
    }, []);

    function onChange(event){
        const {name, value} = event.target;
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    function showMeme(){
        const memesData = allMemes;
        const randomNum = Math.floor(Math.random()*memesData.length);
        const url = memesData[randomNum].url;
        setMeme(prevState => {
            return {
                ...prevState,
                randomImg: url,
            };
        });
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
                        name="topText"
                        onChange={onChange}
                        value={meme.topText}
                    /></label>
            </div>
            <div>
                <label htmlFor="bottom-text">Bottom Text</label>
                <input
                        id="bottom-text"
                        type="text"
                        placeholder="and take my money"
                        className="form--input"
                        name="bottomText"
                        onChange={onChange}
                        value={meme.bottomText}
                    />
            </div>
            <button
                className="form--button"
                onClick={showMeme}> 
                Get a new meme image 🖼
            </button>
        </div>
        <div className="meme">
            <img src={meme.randomImg} alt={meme.randomImg} className="meme--image"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
    );
}