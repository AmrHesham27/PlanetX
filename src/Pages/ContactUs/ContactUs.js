import './ContactUs.css'
import FooterFollowUs from "../../components/FooterFollowUs/FooterFollowUs"
import ImgHeaderContact from "../../components/ImgHeaderContact/ImgHeaderContact"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

function ContactUs() {
    return (
        <>
            <Header/>
            <div className='contactUsPage'>
                <div className='ContactUs'>
                    <ImgHeaderContact/>
                </div>
            </div>
            <div className='footerDiv'>
                <FooterFollowUs/>
                <Footer/>
            </div>
        </>
    )
}

export default ContactUs
