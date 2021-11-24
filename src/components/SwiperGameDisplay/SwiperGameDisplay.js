// utils
import img1 from '../../utils/img1.jpg'
// css
import './SwiperGameDisplay.css'
import './Modal.css'
import './Swiper.css'
// Components
import { Swiper, SwiperSlide } from 'swiper/react'
import Modal from 'react-bootstrap/Modal'
// react
import { useState } from "react";
import Gallery2 from '../Gallery2/Gallery2'


const params = {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    clickable: true
  }
}

const SwiperGameDisplay = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <div className='swiperHeader'>
            Game gallery
        </div>

        <Swiper {...params}>
            <SwiperSlide>
                <img src={img1} alt='swiper 1' className='img-fluid' onClick={handleShow} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img1} alt='swiper 2' className='img-fluid' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img1} alt='swiper 3' className='img-fluid' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img1} alt='swiper 4' className='img-fluid' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img1} alt='swiper 5' className='img-fluid' />
            </SwiperSlide>
        </Swiper>
        
        <Modal show={show} onHide={handleClose} dialogAs={'div'} dialogClassName={'myModal'}>
                <Modal.Header closeButton bsPrefix='myModalTitle'>
                    <Modal.Title >Game gallery</Modal.Title>
                </Modal.Header>

                <Modal.Body bsPrefix={'myModalBody'}>
                    <Gallery2/>
                </Modal.Body>

                <Modal.Footer bsPrefix={'myModalFooter'}>
                <button className='closeButton' onClick={handleClose}>
                    Close
                </button >
                </Modal.Footer>
        </Modal>
    </>
  )
}

export default SwiperGameDisplay

