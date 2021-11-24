import './Modal.css'
import { useState } from "react";
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import DemoCarousel from '../Gallery/Gallery'

function ModalComponent() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button>
   
        <Modal show={show} onHide={handleClose} dialogAs={'div'} dialogClassName={'myModal'}>
            <Modal.Header closeButton bsPrefix='myModalTitle'>
                <Modal.Title >Game gallery</Modal.Title>
            </Modal.Header>

            <Modal.Body bsPrefix={'myModalBody'}>
                <DemoCarousel/>
            </Modal.Body>

            <Modal.Footer bsPrefix={'myModalFooter'}>
            <button className='closeButton' onClick={handleClose}>
                Close
            </button >
            </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalComponent
  
