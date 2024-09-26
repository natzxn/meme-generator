import React, { useEffect, useState } from "react";

function Meme() {

    //const [memeImage, setMemeImage] = useState("https://i.imgflip.com/3i7p.jpg");
    const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/3i7p.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    const getMeme = () => {
        const array = allMemes;
        const randomItem = array[Math.floor(Math.random() * array.length)]
        const url = randomItem.url;
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
        }));
    }

    const handleChange = (e) => {
      const {name, value} = e.target
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
      }))
    }

  return (
    <main className="main">
      <div className="form">
        <label>Top Text
          <input type="text" className="form-input" placeholder="Hello" name="topText" value={meme.topText} onChange={handleChange}/>
        </label>
        <label>Bottom Text
          <input type="text" className="form-input" placeholder="World" name="bottomText" value={meme.bottomText} onChange={handleChange}/> 
        </label>
        <button className="btn" onClick={getMeme}>Get a new meme image!</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme image" className="meme-img"/>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
