// css
import './Games.css'
// compnents
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
// utils
import Img1 from '../../utils/1.jpg'
import { useHistory } from 'react-router'
import HomeCard from '../../components/HomeSection/HomeCard'



const Games = () => {
    const history = useHistory();
    const routeTo = (to) => {
        history.push(to);
    }

    return (
        <>
            <Header/>
            <div className="GamesPage">
                <div className="containerCards">
                    <div onClick={()=>routeTo('/City Z')}>
                        <HomeCard name='City Z' img={Img1} />
                    </div>
                    <div onClick={()=>routeTo('/City Z')}>
                        <HomeCard name='City Z' img={Img1} />
                    </div><div onClick={()=>routeTo('/City Z')}>
                        <HomeCard name='City Z' img={Img1} />
                    </div><div onClick={()=>routeTo('/City Z')}>
                        <HomeCard name='City Z' img={Img1} />
                    </div><div onClick={()=>routeTo('/City Z')}>
                        <HomeCard name='City Z' img={Img1} />
                    </div>
                </div>
                
                <Footer/>
            </div>
        </>
    )
}
  
export default Games
