import React from 'react'
import HomeSection from '../../components/HomeSection/HomeSection'
//import './Home.css'
import HeroSection from '../../components/ImgHeader/ImgHeader'
//import Cards from '../Cards'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

function Home() {
  return (
    <>
      <Header/>
      <div className='HomePage'>
        <HeroSection />
        <HomeSection />
      </div>
      <Footer/>
    </>
  )
}

export default Home
//<Cards/>
//<Footer/>
