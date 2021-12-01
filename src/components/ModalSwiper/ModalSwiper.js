// this compnent i am mixing carousel and a swiper in one component
// React
import { useState } from 'react'
import ReactPlayer from 'react-player'
// libararies
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Slider from "react-slick";
// css
import './ModalSwiper.css'
// utils
import img1 from '../../utils/img1.jpg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none", color:'white', fontSize:'1.5em' }}
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
      style={{ ...style, display: "block", background: "none", color:'white', fontSize:'1.5em' }}
      onClick={onClick}
    >
      <i className='fas fa-chevron-left'></i>
    </div>
  );
}

const ModalSwiper = () => {
  const arrayOfLinks = [
    'https://questroom.com.ua/dist/pict_rooms/pGzuPeKb.jpg',
    'https://questroom.com.ua/dist/pict_rooms/pGzuPeKb.jpg',
    'https://questroom.com.ua/dist/pict_rooms/pGzuPeKb.jpg',
    'https://questroom.com.ua/dist/pict_rooms/pGzuPeKb.jpg',
    'https://questroom.com.ua/dist/pict_rooms/pGzuPeKb.jpg',
    'https://questroom.com.ua/dist/pict_rooms/pGzuPeKb.jpg',
    'https://questroom.com.ua/dist/pict_rooms/pGzuPeKb.jpg',
    'https://questroom.com.ua/dist/pict_rooms/pGzuPeKb.jpg',
  ];
  const [value, setValue] = useState(0);
  let arrayOfElements = arrayOfLinks.map(
    (x,index) => {
        return (
            <div className='fluidDiv0'>
                <img onClick={ () => {setValue( index )} } className='img-fluid0' src={x} key={index} alt='Game' />
            </div>
        )
    }
  );

  // for the react-slick slider
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
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  
  return (
    <div className='ModalSwiper'>
      <Carousel
        value={value}
        onChange={() => setValue(value)}
      >
        <img alt='game' className="img-example" src={img1} />
        <img alt='game' className="img-example" src={img1} />
        <div className='VideoOfGame'>
          <ReactPlayer url='https://youtu.be/vUhr1cwTrnQ' controls={true}/>
        </div>
        <img alt='game' className="img-example" src={img1} />
      </Carousel>
      <div className='SwiperOfModal'>
        <Slider {...settings}>
          {arrayOfElements}
        </Slider>
      </div>
      
    </div>
  );
};

export default ModalSwiper;
// you can make your dots compnents yourself if you want
// <img onClick={ () => setValue(0)} className="img-example-small" src={img1} />

// FOR API
/*
let array = [{ type:video, videoLink:www , imgLink:www },{},{},{}]; 
  array.map( (x) => { return {x.imgLink} })
  this should return array of images links then
  newArray.map ( if (x.type === image ){
    (x,index) => { return(

    <silder>
      <img onClick={ () => setValue(index)} className="img-example-small" src={x} />
    <slider/>

  )}
  else {
    (x,index) => { return(
    <silder>
      <ReactPlay onClick={ () => setValue(index)} className="img-example-small" src={x} />
    <slider/>
    )}
  } 
  )
  ///
  and for the thumbs no need for if else you just need the images and put them in slider 
 */
