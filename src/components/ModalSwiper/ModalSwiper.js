// this compnent i am mixing carousel and a swiper in one component
// React
import { useState } from 'react'
import ReactPlayer from 'react-player'
// libararies
import { Swiper, SwiperSlide } from 'swiper/react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
// css
import './ModalSwiper.css'
// utils
import img1 from '../../utils/img1.jpg'

const params = {
  slidesPerView: 'auto',
  spaceBetween: 0,
  pagination: {
    clickable: true
  }
}

const ModalSwiper = () => {
  const arrayOfLinks = [
    'https://i1.wp.com/www.thexboxhub.com/wp-content/uploads/2021/10/world-war-z-aftermath-review-1.jpeg?fit=1399%2C787&ssl=1',
    'https://i1.wp.com/www.thexboxhub.com/wp-content/uploads/2021/10/world-war-z-aftermath-review-1.jpeg?fit=1399%2C787&ssl=1',
    'https://i1.wp.com/www.thexboxhub.com/wp-content/uploads/2021/10/world-war-z-aftermath-review-1.jpeg?fit=1399%2C787&ssl=1',
    'https://i1.wp.com/www.thexboxhub.com/wp-content/uploads/2021/10/world-war-z-aftermath-review-1.jpeg?fit=1399%2C787&ssl=1',
  ];
  const [value, setValue] = useState(0);
  let arrayOfElements = arrayOfLinks.map(
    (x,index) => {
        return (
            <SwiperSlide>
                <img onClick={ () => {setValue( index )} } className='img-fluid' src={x} key={index} alt='Game' />
            </SwiperSlide>
        )
    }
  );

  const onChange = value => {
  setValue(value);
  }
  
  return (
    <div className='ModalSwiper'>
      <Carousel
        value={value}
        onChange={onChange}
      >
        <img alt='game' className="img-example" src={img1} />
        <img alt='game' className="img-example" src={img1} />
        <ReactPlayer width={711} height={400} url='https://youtu.be/vUhr1cwTrnQ' controls={true}/>
        <img alt='game' className="img-example" src={img1} />
      </Carousel>
      <div className='SwiperOfModal'>
        <Swiper {...params}>
            {arrayOfElements}
        </Swiper>
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
