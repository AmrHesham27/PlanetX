import './header.css'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react';
import  Off  from './Offcanavas';
import { NavDropdown } from 'react-bootstrap'

function Header() {
  // to be used in buttons to route the user
  const history = useHistory()
  const routeTo = (to) => {
    history.push(to)
  }

  /// Menu or buttons
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 700) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener('resize', showButton);
  useEffect(() => {
    showButton();
    return () => {
      window.removeEventListener('resize' , showButton)
    }
  }, []);
   
  return (
    <div className='Header' >
      <div className='LogoContainer'>
        <h2 onClick={() => routeTo('/')} className='logo'>Planet <span style={{color:'red'}}>X</span></h2>
      </div>

      {button?
      <div className='buttonsContainer'>
        <a className='myA' href="/"> Home </a>
        <a className='myA' href="/About"> About </a>
        <a className='myA' href="/Contact"> Contact </a>
        <NavDropdown title="Games" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Games">VR Games</NavDropdown.Item>
          <NavDropdown.Item href="/Games">Escape room</NavDropdown.Item>
        </NavDropdown>
      </div>
      :
      undefined
      }
      {!button?
      <Off/>
      :
      undefined
      }
      
    </div>
  )
}

export default Header
//const _ = require("lodash");

//style={{backgroundColor:'rgba(0,0,0,0.7)' , backdropFilter:'blur(10px)'}}

/*
const [style, setStyle] = useState(JSON.stringify({backgroundColor:'transparent'}));
  useEffect(() => {
    let style = JSON.stringify({backgroundColor:'transparent'});
    function callback (){
      if(style===JSON.stringify({backgroundColor:'transparent'}) && window.scrollY > 1){(JSON.stringify({backgroundColor:'rgba(0,0,0,0.7)' , backdropFilter:'blur(10px)'}));console.log(1);}
      else{return};
    };
    window.addEventListener('scroll', _.throttle(callback, 200));
    return () => {
      window.removeEventListener('scroll',_.throttle(callback, 200));
    }
  },[])
 */

  //        <button className='Hbutton' onClick={() => routeTo('/Games')}> Games </button>
