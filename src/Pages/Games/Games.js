import { useState, useEffect } from 'react'
// css
import './Games.css'
// compnents
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
// utils
import Img1 from '../../utils/1.jpg'
import { useHistory } from 'react-router'
import GameCard from '../../components/GameCard/GameCard'
import FooterFollowUs from '../../components/FooterFollowUs/FooterFollowUs'



const Games = () => {
    const history = useHistory();
    const routeTo = (to) => {
        history.push(to);
    }

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
            <Header style={offset === 0 ? firstStyle:secondStyle} />
            <div className="GamesPage">
                <div className="containerCards">
                    <div onClick={()=>routeTo('/City Z')}>
                        <GameCard name='City Z' img={Img1} />
                    </div>
                    <div onClick={()=>routeTo('/City Z')}>
                        <GameCard name='City Z' img={Img1} />
                    </div><div onClick={()=>routeTo('/City Z')}>
                        <GameCard name='City Z' img={Img1} />
                    </div><div onClick={()=>routeTo('/City Z')}>
                        <GameCard name='City Z' img={Img1} />
                    </div><div onClick={()=>routeTo('/City Z')}>
                        <GameCard name='City Z' img={Img1} />
                    </div>
                </div>
                <FooterFollowUs/>
                <Footer/>
            </div>
        </>
    )
}
  
export default Games
