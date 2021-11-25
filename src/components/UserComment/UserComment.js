import Star from "../starComponent/star"
import './UserComment.css'

function UserComment(props) {
    return (
        <div className='UserComment'>
            <div className='nameAndIcon'>
                <div className='IconDiv'>
                    <i className="far fa-user"></i>
                </div>
                <div className='nameAndDate'>
                    <p className='userNameComment'>{props.userName}</p>
                    <p>{props.date}</p>
                </div>
            </div>
            
            <div className='starsOfComment'>
                <Star stars={props.stars}/>
            </div>
            <p className='userNameCommentHead'>{props.head}</p>
            <p>{props.comment}</p>
        </div>
    )
}

export default UserComment
