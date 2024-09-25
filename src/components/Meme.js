import React, { useState } from "react";
import memesData from "../memesData.js"

function Meme() {

    //const [memeImage, setMemeImage] = useState("https://i.imgflip.com/3i7p.jpg");
    const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/3i7p.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const getMeme = () => {
        const array = allMemeImages.data.memes;
        const randomItem = array[Math.floor(Math.random() * array.length)]
        const url = randomItem.url;
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
        }));
    }


  return (
    <main className="main">
      <div className="form">
        <label>Top Text
          <input type="text" className="form-input" placeholder="Hello" />
        </label>
        <label>Bottom Text
          <input type="text" className="form-input" placeholder="World" /> 
        </label>
        <button className="btn" onClick={getMeme}>Get a new meme image!</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme image" className="meme-img"/>
        <h2 className="meme-text"></h2>
        <h2 className="meme-text"></h2>
      </div>
    </main>
  );
}

export default Meme;
