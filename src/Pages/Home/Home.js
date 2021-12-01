import React , {useState,useEffect} from 'react'
//import './Home.css'
import HeroSection from '../../components/ImgHeader/ImgHeader'
//import Cards from '../Cards'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HomeSection from '../../components/HomeSection/HomeSection'

function Home() {
  let firstStyle = {backgroundColor:'transparent',backdropFilter:'none'};
  let secondStyle = {backgroundColor:'rgba(0,0,0,0.7)',backdropFilter:'blur(10px)'};
  const [offset, setOffset] = useState(0);
  useEffect(() => {
      window.onscroll = () => {
      setOffset(window.pageYOffset)
      }
  }, []);  

  return (
    <>
      <Header style={offset === 0 ? firstStyle:secondStyle}/>
      <div className='HomePage'>
        <HeroSection />
        <HomeSection />
      </div>
      <Footer/>
    </>
  )
}

export default Home
