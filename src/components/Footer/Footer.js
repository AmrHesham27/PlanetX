import './Footer.css'

function Footer() {
    return (
    <footer className="Footer">
        <div className='logo'>
            <p style={{color:'blueviolet'}}>Planet</p>
            <span style={{color:'crimson',paddingLeft:'5px'}}> X</span>
        </div>

        <div className='Links'>
            <a href={'/'}>Home</a>
            <a href={'/Games'}>Games</a>
            <a href={'/About'}>About</a>
            <a href={'./Contact'}>Contact</a>
        </div>
        <p className='copyRight'>Copyright © 2021 planet X ® </p>

    </footer>
    )
}
  
export default Footer
