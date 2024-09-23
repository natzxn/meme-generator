import React from 'react';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme'

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Meme />
    </div>
  )
}
