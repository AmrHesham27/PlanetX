import './HomeSection.css'
import GameCard from '../GameCard/GameCard'
import img1 from '../../utils/img1.jpg'
import img2 from '../../utils/img2.jpg'
import img3 from '../../utils/img3.jpg'

function HomeSection(props) {
    return (
        <div className='HomeSection'>
            <p className='HomeSectionP'>Come to play exciting games</p>
            <div className='CardsContainer'>
                <GameCard name='Action Games' img={img1} />
                <GameCard name='Adventure Games' img={img2} />
                <GameCard name='Multiplayer Games' img={img3} />
            </div>
            
            <p className='HomeSectionP'>Most played Games this week</p>
            <div className='CardsContainer'>
                <GameCard name='City Z' img={img1} />
                <GameCard name='City Z' img={img2} />
                <GameCard name='City Z' img={img3} />
                <GameCard name='City Z' img={img2} />
            </div>

            <p className='HomeSectionP'>New Games</p>
            <div className='CardsContainer'>
                <GameCard name='City Z' img={img1} />
                <GameCard name='City Z' img={img2} />
                <GameCard name='City Z' img={img3} />
                <GameCard name='City Z' img={img2} />
            </div>
            
        </div>
    )
}

export default HomeSection
