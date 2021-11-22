import './HomeSection.css'
import HomeCard from './HomeCard'
import img1 from '../../utils/img1.jpg'
import img2 from '../../utils/img2.jpg'
import img3 from '../../utils/img3.jpg'

function HomeSection(props) {
    return (
        <div className='HomeSection'>
            <p className='HomeSectionP'>Come to play exciting games</p>
            <div className='CardsContainer'>
                <HomeCard name='Action Games' img={img1} />
                <HomeCard name='Adventure Games' img={img2} />
                <HomeCard name='Multiplayer Games' img={img3} />
            </div>
            
            <p className='HomeSectionP'>Most played Games this week</p>
            <div className='CardsContainer'>
                <HomeCard name='City Z' img={img1} />
                <HomeCard name='City Z' img={img2} />
                <HomeCard name='City Z' img={img3} />
                <HomeCard name='City Z' img={img2} />
            </div>

            <p className='HomeSectionP'>New Games</p>
            <div className='CardsContainer'>
                <HomeCard name='City Z' img={img1} />
                <HomeCard name='City Z' img={img2} />
                <HomeCard name='City Z' img={img3} />
                <HomeCard name='City Z' img={img2} />
            </div>
            

        </div>
    )
}

export default HomeSection
