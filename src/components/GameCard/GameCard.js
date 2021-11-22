import './GameCard.css'
import { useHistory } from 'react-router'
 

const GameCard = (props) => {
    const history = useHistory()
    const name = props.name
    const img = props.img

    const router = () => {
        history.push(`/${name}`)
    }
    
    return (
      <div className="GameCard" onClick={router} >
        <p>{name}</p>
        <img src={img} alt='game'/>
      </div>
    )
}

export default GameCard
 