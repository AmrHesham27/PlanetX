import ImgHeaderAbout from '../../components/ImgHeaderAbout/ImgHeaderAbout'
import './About.css'
import FooterFollowUs from '../../components/FooterFollowUs/FooterFollowUs'
import Footer from '../../components/Footer/Footer'
import { useHistory } from 'react-router'
import Header from '../../components/Header/Header'
import { useState, useEffect } from 'react'

const About = () => {
    // to be used in buttons to route the user
    const history = useHistory()
    const routeTo = (to) => {
        history.push(to)
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
            <div className="About">
                <Header style={offset === 0 ? firstStyle:secondStyle} />
                <ImgHeaderAbout/>

                <div className='aboutContent'>
                    <div className='header'><p>About Us</p></div>
                    <div className='content'>
                        Planet X was Established in May 2021 with ultimate goal to be the thought leaders in Entertainment Industry in Egypt through :
                        <ul>
                            <li>Be the first in Market to Offer the Top in the Industry Experiences using the highest available tech.</li>
                            <li>Offering Special Memorable Experiences for All Family Members through multiple venues & formats.</li>
                            <li>Applying the Guestology Concepts & Practices to show our Guests the Care they deserve.</li>
                        </ul>
                    </div>
                </div>

                <div className='aboutContent'>
                    <div className='header'><p>Our Mission</p></div>
                    <div className='content'>
                        To Provide Our Guests With Exciting , UpToDate , Memorable Experience with an affordable price .
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
                    </div>
                </div>

                <div className='aboutContent'>
                    <div className='header'><p>Our Vision</p></div>
                    <div className='content'>
                        To be the thought Leaders in the Entertainment Industry in the Middle East , through providing all entertainment categories through different Venues formats
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
                    </div>
                </div>

                <FooterFollowUs/>

                <div className='horizontalLayout'>
                    <div className='talkToUs'>
                        <p className='p1'>Talk to us</p>
                        <div className='horizontalFlex'>
                            <p className='p2'>tell us how we can make it better</p>
                            <div className='iContainer' onClick={()=>{routeTo('/Contact')}}>
                                <i className="fas fa-phone"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default About