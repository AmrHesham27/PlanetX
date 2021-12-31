// css
import styles from './Games.module.css'
// compnents
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
// utils
import { useHistory } from 'react-router'
import GameCard from '../../components/GameCard/GameCard'
import FooterFollowUs from '../../components/FooterFollowUs/FooterFollowUs'
// react strap
import { Spinner } from 'reactstrap'


const Games = (props) => {
    // function to route user
    const history = useHistory();
    const routeTo = (to) => {
        history.push(to);
    }

    // gamesData
    const gamesData = props.gamesData 

    return (
        <div className={styles.GamesPage}>
            <Header />
            <div className={styles.containerCards}>
                {gamesData ? gamesData.map((game, index) => {
                    return (
                        <div onClick={()=>routeTo('/City Z')} key={index} >
                            <GameCard   
                                        name={game.title} 
                                        img={ game['cover_image'] ? `https://planetxegy.herokuapp.com/${game['cover_image'].substring(5)}` 
                                        : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUAAAD///9bWVrm5uaqqqqgoKBPT0/z8/ORkZHg4OB1dXWzs7PU1NTr6+vv7+86OjqAfn/MzMxsbGyXl5fAwMCHh4djY2PHx8dfX1+dnZ1ISEguLi66urpVVVV3d3evr69BQUElJSUvLy8MDAwXFxes5b5hAAADzUlEQVR4nO3b23LaMBSFYQljsDEQGxtIiM2hzfs/Y6UtnEna5EITSbDo+i8am4LQF587U1UPk0duqNWgHrtBTW49hchNKISPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvyCCk/TUJ3CTSqoUIcr3KQo9MrMrHzJf9pLedfCuxpHotArClOPI1HoFYWpx5Eo9IrC1ONIFHpFYepxJAq9ojD1OBKFXlGYehyJQq8oTD2ORKFXFKYeR6LQKwpTjyNR6BWFqceRKPSKwtTjSBR6RWHqcSQKvaIw9TgShV5RmHociUKvKEw9jkShVxSmHkei0CsKU48jUegVhanHkSj0isLU40gUekVh6nEkCr0yM5seZj/tML1rYajCTYpCr7JgrcJNiv9bHT8K8aMQv9sLL23c8W8uzPUy7hfcWljrRxcutG7ifkMUYd3vq4VdeO2rWg39shvMcrVstua1Q1Ud1bYpm41Zafdar6YnVVTuA3ZhF3YyEYSvc7l3Xl+UOmtd5bJWb+SH2SPNQlXKSqfU+nqfvTVQ+bBZ+RV2OhGEBrjuM63nIpzr8iSO+Wlp/lyonV1ZCfJFlfa3sV6L7EkJvww8nfDCqTt39Fq3VqinSuZvvGpp13Zu6yn3nLu5Hofm7bn50Wm9DTyf8MK52xrKbo3z9UlvZbn2yqB7EY5v3NkzjZxLZ243Dfpk6AovtLvi8Xi0x516cttOZXb3NKcRu/WMMJM3NloX70L7Szjbvwt+Zg0uvHx8UB+F5qB7Vlfh82jq7IH4LmztHmz21U3Y6UQQ/jaybSG13wndafPzNjSfW8fYSePspW/j8gehvcqNQveGT8ehgM01owo8mxjCvZvmptn33wobt6LlnuZ6eXAXzFng2cQQ2vNnt2ntzvqlcCK3A5W9OLZyDtXLprBvktcDT0ZFueLX1/NM9dVeurfCLBvvaWRfdddMuUDmoScT5770qc/m68aSLvtODqy86+zut+u6wgpLVSyzxp01L325ymq7dHZ3bMdt2Gt++meLYbwe/l0rh+SszRdB773vRziRI1dN2vw56DXxXoRyYMoxu62LoN93E+EXZ0wBnmN8X3rh2+xw/vfVTVEEfvIdu/W/YsSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjE738QDreeQuQGVQ+TR26o/wC/TiXuOSy+6AAAAABJRU5ErkJggg==' }
                            />
                        </div>
                    )
                }) 
                :
                <div className={styles.spinner}>
                    <Spinner/> 
                </div>
                
                }
            </div>
            <div style={{width:'100%'}}>
                <FooterFollowUs/>
                <Footer/>
            </div>
        </div>
    )
}
  
export default Games
 