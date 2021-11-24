import React from 'react'
import FooterVideo from '../FooterVideo/FooterVideo'
//import '../App.css';
import './ImgHeader.css'

function ImgHeader() {
  return (
    <div className='hero-containerHeader'>
      <video src='/videos/4.mp4' autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
          <button className="headerButton1">Sign up</button>
          <button className="headerButton2">Discover Games</button>
      </div>
      <FooterVideo/>
    </div>
  )
}

export default ImgHeader