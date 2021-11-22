import Star from '../../components/starComponent/star' 
import './SimilarGame.css'

const SimilarGame = (props) => {
    return (
        <div className='SimilarGame'>
            <img src={props.Img} alt='game'/>
            <p>{props.name}</p>
            <Star stars='4'/>
        </div>
        
    )
}

export default SimilarGame