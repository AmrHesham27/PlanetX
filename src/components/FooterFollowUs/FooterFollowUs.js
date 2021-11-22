import './FooterFollowUs.css'
const FooterFollowUs = () => {
    return (
        <div className='FooterFollowUs'>
            <div className='FooterWrapper'>
                <p className='P1'>Follow us on socila media</p>
                <div className='iconsContainer'>
                    <i style={{color:'blue'}} className="fab fa-facebook-square"></i>
                    <i style={{color:'rgb(29, 155, 240)'}} className="fab fa-twitter"></i>
                    <i style={{color:'blueviolet'}} className="fab fa-instagram-square"></i>
                    <i style={{color:'red'}} className="fab fa-youtube"></i>
                </div>
            </div>
        </div>
    )
}

export default FooterFollowUs