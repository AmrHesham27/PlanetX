// React and libraries
import React, { Component } from "react";
import Slider from "react-slick";
import Modal from 'react-bootstrap/Modal'
//compnents 
import ModalSwiper from '../ModalSwiper/ModalSwiper'
// Import css files
import './slick.css'

let images = [  'https://questroom.com.ua/dist/pict_rooms/pGzuPeKb.jpg',
                'https://questroom.com.ua/dist/pict_rooms/pGzuPeKb.jpg',
                'https://questroom.com.ua/dist/pict_rooms/pGzuPeKb.jpg',
                'https://questroom.com.ua/dist/pict_rooms/pGzuPeKb.jpg',
                'https://questroom.com.ua/dist/pict_rooms/pGzuPeKb.jpg',
              ];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none", color:'black' }}
      onClick={onClick}
    >
      <i className='fas fa-chevron-right'></i>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none", color:'black' }}
      onClick={onClick}
    >
      <i className='fas fa-chevron-left'></i>
    </div>
  );
}

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show : false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.imagesCode = this.imagesCode(this);
  }
  handleClose(){this.setState({show:false})};
  handleShow(){this.setState({show:true})};

  imagesCode (){ 
    let newImages = images.map((img)=>{
    return(
      <div className='fluidDiv'>
        <img src={img} alt='game' className='img-fluid2' onClick={this.handleShow}/>
      </div>
      )
    });
    return newImages;
  }
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
      <div className='SLICK'>
        <p className='GalleryHeader'>Game gallery</p>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.imagesCode}
        </Slider>

        <div className='myModalContainer'>
          <Modal show={this.state.show} onHide={this.handleClose} dialogAs={'div'} dialogClassName={'myModal'}>
                  <Modal.Header closeButton bsPrefix='myModalTitle'>
                      <Modal.Title >Game gallery</Modal.Title>
                  </Modal.Header>

                  <Modal.Body bsPrefix={'myModalBody'}>
                      <ModalSwiper/>
                  </Modal.Body>
                  <button className='closeButton' onClick={this.handleClose}>
                          X
                  </button >
          </Modal>
        </div>
      </div>
    </>
    );
  }
}
