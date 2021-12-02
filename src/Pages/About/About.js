import ImgHeaderAbout from '../../components/ImgHeaderAbout/ImgHeaderAbout'
import './About.css'
import FooterFollowUs from '../../components/FooterFollowUs/FooterFollowUs'
import Footer from '../../components/Footer/Footer'
import about1 from '../../utils/about1.jpg'
import about2 from '../../utils/about2.jpg'
import { useHistory } from 'react-router'
import Header from '../../components/Header/Header'
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react'

const About = () => {
    // to be used in buttons to route the user
    const history = useHistory()
    const routeTo = (to) => {
        history.push(to)
    }
    // for animation
    const [ animation1, setAnimation1 ] = useState(false);
    const onEnterViewport1 = () => {
        setAnimation1(true)
    }
    const onExitViewport1 = () => {
        setAnimation1(false)
    }
    //
    const [ animation2, setAnimation2 ] = useState(false);
    const onEnterViewport2 = () => {
        setAnimation2(true)
    }
    const onExitViewport2 = () => {
        setAnimation2(false)
    }
    //
    const [ animation3, setAnimation3 ] = useState(false);
    const onEnterViewport3 = () => {
        setAnimation3(true)
    }
    const onExitViewport3 = () => {
        setAnimation3(false)
    }
    return (
        <>
            <div className="About">
                <Header/>
                <ImgHeaderAbout/>
                <div className='content1'>
                    <ScrollTrigger onEnter={onEnterViewport1} onExit={onExitViewport1} throttleScroll={100}>
                        <p  className={animation1 ? 'header1p leftAnimation' : 'header1p'}> About planet X </p>
                    </ScrollTrigger>
                    <p className='p2p'> Planet X was Established in May 2021 with ultimate goal to be the thought leaders in Entertainment Industry in Egypt through :</p >
                    <ul>
                        <li>
                            <p className='p2p'> Be the first in Market to Offer the Top in the Industry Experiences using the highest available tech.</p>
                        </li>
                        <li>
                            <p className='p2p'>Offering Special Memorable Experiences for All Family Members through multiple venues & formats. </p>
                        </li><li>
                            <p className='p2p'>Applying the Guestology Concepts & Practices to show our Guests the Care they deserve.</p>
                        </li>
                    </ul>
                </div>

                <div className='content2'>
                    <img src={about1} alt='planet X'/>
                    <div className='textContainer'>
                        <ScrollTrigger onEnter={onEnterViewport2} onExit={onExitViewport2} throttleScroll={100}>
                            <p  className={animation2 ? 'p3p rightAnimation' : 'p3p'}>Our Mission</p>
                        </ScrollTrigger>
                        <p className='p2p'>To Provide Our Guests With Exciting , UpToDate , Memorable Experience with an affordable price .</p>
                    </div>
                </div>

                <div className='content3'>
                    <img src={about2} alt='planet X'/>
                    <div className='textContainer'>
                        <ScrollTrigger onEnter={onEnterViewport3} onExit={onExitViewport3} throttleScroll={100}>
                            <p className={animation3 ? 'p3p leftAnimation' : 'p3p'}>Our Vision</p>
                        </ScrollTrigger>
                        <p className='p2p'>To be the thought Leaders in the Entertainment Industry in the Middle East , through providing all entertainment categories through different Venues formats</p>
                    </div>
                </div>
                
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

                <FooterFollowUs/>
            </div>
            <Footer/>
        </>
    )
}

export default About