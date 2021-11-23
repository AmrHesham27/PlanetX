// css
import './LoginPage.css'
// components
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

const LoginPage = () => {
    return (
        <div className="LoginPage" >
            <Header/>
            <div className="LoginWrapper">
                <div className='Login'>
                    <h1>LOGIN</h1>
                    <button> sign In as a guest</button>
                    <h4>OR</h4>
                    <p>please enter your username and password</p>
                    <input placeholder="user name"/>
                    <input placeholder="password"/>
                    <p className="underLineP">forgot password?</p>
                    <p className="underLineP">sign up</p>
                    <button>Login</button>
                    <div className="containerRow">
                        <i style={{color:'blue'}} className="fab fa-facebook-square"></i>
                        <i style={{color:'rgb(29, 155, 240)'}} className="fab fa-twitter"></i>
                        <i style={{color:'blueviolet'}} className="fab fa-instagram-square"></i>
                        <i style={{color:'red'}} className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default LoginPage;

