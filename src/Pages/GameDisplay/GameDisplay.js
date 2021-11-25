// css
import './GameDisplay.css'
// components
// In this page we will use  (Carousel and Modal and Swiper) which we will need in the next projects 
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UserComment from '../../components/UserComment/UserComment'
// utils 
import img1 from '../../utils/img1.jpg'
import SwiperGameDisplay from '../../components/SwiperGameDisplay/SwiperGameDisplay'
import Star from '../../components/starComponent/star'
import img2 from '../../utils/img2.jpg'
import GameCard from '../../components/GameCard/GameCard'
import SimpleSlider from '../../components/slick'

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

        <div className='ReviewAndComments'>
          <div className='ReviewOfGame'>
              <p className='GameReviewHeader'>Review</p>  
              <div className='startAndPercent'>
                <Star stars={5} />
                <p className='percentInReview'>65%</p>
              </div>
              <div className='startAndPercent'>
                <Star stars={4} />
                <p className='percentInReview'>20%</p>
              </div>
              <div className='startAndPercent'>
                <Star stars={3} />
                <p className='percentInReview'>10%</p>
              </div>
              <div className='startAndPercent'>
                <Star stars={2} />
                <p className='percentInReview'>3%</p>
              </div>
              <div className='startAndPercent'>
                <Star stars={1} />
                <p className='percentInReview'>2%</p>
              </div>
          </div>

          <div className='GameDisplayComments'>
            <UserComment stars='5' userName='Amr Hesham' comment='I love this Game' head='Great game' date='10/09/2021'/>
            <UserComment stars='5' userName='Amr Hesham' comment='I love this Game' head='Great game' date='10/09/2021'/>
            <UserComment stars='5' userName='Amr Hesham' comment='I love this Game' head='Great game' date='10/09/2021'/>
          </div>
        </div>

        <div className='SimilarGames'>
              <p className='SimilarGamesHeader'>Similar Games</p>
              <div className='GamesContainerSimilar'>
                <GameCard img={img2} name={'City Z'} />
                <GameCard img={img2} name={'City Z'}/>
                <GameCard img={img2} name={'City Z'}/>
                <GameCard img={img2} name={'City Z'}/>
                <GameCard img={img2} name={'City Z'} />
                <GameCard img={img2} name={'City Z'}/>
              </div>
        </div>
        <SimpleSlider/>
        <Footer/>
      </div>
     
      </>
    )
}

export default GameDisplay
