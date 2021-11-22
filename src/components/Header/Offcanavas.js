import { Offcanvas } from 'react-bootstrap'
import { useState } from 'react';
import './off.css'
import { useHistory } from 'react-router';

function Off({ ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // to be used in buttons to route the user
    const history = useHistory()
    const routeTo = (to) => {
      history.push(to)
    }
  
    return (
      <>
        <div className='wrapperIcon'>
            <div onClick={handleShow} className="menuIcon">
                <i className="fas fa-bars"></i>
            </div>
        </div>
        
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p className='pLink' onClick={()=>{routeTo('/')}}>Home</p>
            <p className='pLink' onClick={()=>{routeTo('/Games')}}>Games</p>

            <div className='smallContainer'>
              <p className='pLink' onClick={()=>{routeTo('/Games')}}>VR Games</p>
              <p className='pLink' onClick={()=>{routeTo('/Games')}}>Escape room</p>
            </div>
            
            <p className='pLink' onClick={()=>{routeTo('/Contact')}}>Contact</p>
            <p className='pLink' onClick={()=>{routeTo('/About')}}>About</p>            
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}
  
export default Off