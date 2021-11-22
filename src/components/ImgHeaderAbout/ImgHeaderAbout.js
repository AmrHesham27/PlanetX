import React from 'react'
import Footer2 from '../Footer2/Footer2'
import './ImgHeaderAbout.css'

function ImgHeaderAbout() {
  return (
    <div className='hero-container'>
      <video src='/videos/4.mp4' autoPlay loop muted />
      <h1>Planet X</h1>
      <div className='secondP_Wrapper'>
        <p className='firstP'>The Future of Entertainment</p>
      </div>
      <Footer2/>
    </div>
  )
}

export default ImgHeaderAbout