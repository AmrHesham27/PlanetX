// React
import React, { Component } from "react";
import Slider from "react-slick";
// utils
import img1 from '../../utils/img1.jpg'
// Import css files
import './slick.css'

export default class SimpleSlider extends Component {
  componentDidMount () {
    // the next code to show the arrow buttons which are hidden by the developer 
    const prev = document.getElementsByClassName('slick-prev')[0];
    const icon1 = document.createElement('i');
    icon1.classList.add('fas','fa-chevron-left');
    prev.innerHTML='';
    prev.appendChild(icon1);
    // the next code to show the arrow buttons which are hidden by the developer 
    const next = document.getElementsByClassName('slick-next')[0];
    const icon2 = document.createElement('i');
    icon2.classList.add('fas','fa-chevron-right');
    next.innerHTML='';
    next.appendChild(icon2);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:3,
      slidesToScroll: 1
    };
    return (
      <>
      <div className='SLICK'>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div className='fluidDiv'>
            <img src={img1} alt='swiper 1' className='img-fluid2'  />
          </div>
          <div className='fluidDiv'>
            <img src={img1} alt='swiper 1' className='img-fluid2'  />
          </div>
          <div className='fluidDiv'>
            <img src={img1} alt='swiper 1' className='img-fluid2'  />
          </div>
          <div className='fluidDiv'>
            <img src={img1} alt='swiper 1' className='img-fluid2'  />
          </div>
          <div className='fluidDiv'>
            <img src={img1} alt='swiper 1' className='img-fluid2'  />
          </div>
          <div className='fluidDiv'>
            <img src={img1} alt='swiper 1' className='img-fluid2'  />
          </div>
        </Slider>
      </div>
    </>
    );
  }
}
