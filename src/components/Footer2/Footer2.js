import './Footer2.css'

function Footer2() {
    return (
        <div className='footerVideo'>
            <video src='/videos/4.mp4' autoPlay loop muted />
            <p style={{visibility:'hidden'}}>Hidden Footer</p>
        </div> 
    )
}

export default Footer2;
