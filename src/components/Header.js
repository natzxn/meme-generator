import React from 'react';
import img from '../images/troll-face.png'

function Header() {
    return (
        <header className='header'>
            <img 
            src={img} 
            className='header-image'
            alt=''/>
            <h2 className='header-title'>Meme generator</h2>
            
        </header>
        
    )
}

export default Header;