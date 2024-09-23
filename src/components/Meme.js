import React, { useState } from "react";
import memesData from "../memesData.js"

function Meme() {

    const [memeImage, setMemeImage] = useState("https://i.imgflip.com/3i7p.jpg");

    const getMeme = () => {
        const array = memesData.data.memes;
        const randomItem = array[Math.floor(Math.random() * array.length)]
        setMemeImage(randomItem.url);
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
      <img src={memeImage} alt="meme image" className="meme-img"/>
    </main>
  );
}

export default Meme;
