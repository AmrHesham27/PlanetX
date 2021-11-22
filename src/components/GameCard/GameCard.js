import './GameCard.css'

function HomeCard(props) {
    return (
        <div className='GameCard' >
            <p>{props.name}</p>
            <figure className='Figure'>
                <img src={props.img} alt='game'/>
            </figure>
        </div>
    )
}

export default HomeCard

 