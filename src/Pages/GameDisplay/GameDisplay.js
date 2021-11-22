// css
import './GameDisplay.css'
// components
import Header from '../../components/Header/Header'
import DemoCarousel from '../../components/Gallery/Gallery'
import img1 from '../../utils/img1.jpg'
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
                <img alt='game' src={img1} style={{width:'300px',height:'169px'}} />
                <h1>City Z</h1>
              </div>
            
            </div>
          </div>

          <div className='GameDescribtion'>
              <p>Game Describtion</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
          </div>
         
        <div className='gallery'>
          <DemoCarousel/>
        </div>
      </div>
     
      </>
    )
}

export default GameDisplay
//      <Footer/>  
