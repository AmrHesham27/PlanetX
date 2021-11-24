// css
import './GameDisplay.css'
// components
// In this page we will use  (Carousel and Modal and Swiper) which we will need in the next projects 
import Header from '../../components/Header/Header'
// utils 
import img1 from '../../utils/img1.jpg'
import SwiperGameDisplay from '../../components/SwiperGameDisplay/SwiperGameDisplay'
//import img2 from '../../utils/img2.jpg'

const GameDisplay = (props) => {

    return (
      <>
        <Header/>
        <div className='GameDisplay'>
          <div class='headerContainer'>
            <div class="bg-image"> <p className='hiddenText'>this text is hidden</p> </div>
            <div class="bg-text">
              {// add down here your img and game name
              }
              <div className='gameInfo'>
                <div className='ImgAndButton'>
                  <img className='ImgOfInfo' alt='game' src={img1} />
                  <button className='ButtonBooking'>Book Game</button>
                </div>
                
                <div className='textInfoContainer'>
                  <h1 className='gameInfoHeader'>City Z</h1>
                  <p className='gameInfoDescription'>Action & adventure</p>
                </div>
              </div>
            
            </div>
          </div>

          <div className='GameDescribtion'>
              <p className='DescriptionHeader'>Game Describtion</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
          </div>
        
        <SwiperGameDisplay/>
      </div>
     
      </>
    )
}

export default GameDisplay
