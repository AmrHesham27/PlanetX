import './header.css'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react';
import  Off  from './Offcanavas';
import { NavDropdown } from 'react-bootstrap'

function Header(props) {
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

  // transparent header
  const trans = props.trans
  let firstStyle = {backgroundColor:'transparent',backdropFilter:'none'};
  let secondStyle = {backgroundColor:'rgba(0,0,0,0.7)',backdropFilter:'blur(10px)'};
  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const trans = props.trans
      if (trans) {
      window.onscroll = () => {
      setOffset(window.pageYOffset)
      }}
  }, [props]);
  const style = (!trans ? secondStyle : (offset? secondStyle:firstStyle))
  
  return (
    <div className='Header' style={ style } >
      <div className='LogoContainer'>
        <h2 onClick={() => routeTo('/')} className='logo'>Planet <span style={{color:'red'}}>X</span></h2>
      </div>

      {button?
      <div className='buttonsContainer'>
        <button className='myA' onClick={() => routeTo('/')}>Home</button>
        <button className='myA' onClick={() => routeTo('/About')}>About</button>
        <button className='myA' onClick={() => routeTo('/ContactUs')}>Contact</button>
        <NavDropdown title="Games" id="basic-nav-dropdown">
          <button className='myA' style={{color:'black'}} onClick={() => routeTo('/Games')}>VR Games</button>
          <button className='myA' style={{color:'black'}} onClick={() => routeTo('/Games')}>Escape room</button>
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