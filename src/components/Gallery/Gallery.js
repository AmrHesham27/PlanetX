import img1 from '../../utils/img1.jpg'
//import img2 from '../../utils/img2.jpg'
//import img3 from '../../utils/img3.jpg'
//import img4 from '../../utils/img4.jpg'

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css'; 
import { useState } from 'react';
import './Gallery.css'
import ReactPlayer from 'react-player';


const Gallery = () => {
  const [value, setValue] = useState(0);

  const onChange = value => {
  setValue(value);
  }

  return (
    <div>
      <Carousel
        value={value}
        onChange={onChange}
      >
        <img alt='game' className="img-example" src={img1} />
        <img alt='game' className="img-example" src={img1} />
        <ReactPlayer width={711} height={400} url='https://youtu.be/vUhr1cwTrnQ' controls={true}/>
        <img alt='game' className="img-example" src={img1} />
      </Carousel>
      <Dots
        value={value}
        onChange={onChange}
        thumbnails={[
          (<img key={1} alt='game' className="img-example-small hiddenImg" src={img1} />),
          (<img key={2} alt='game' className="img-example-small hiddenImg" src={img1} />),
          (<img key={3} alt='game' className="img-example-small hiddenImg" src={img1} />),
          (<img key={4} alt='game' className="img-example-small hiddenImg" src={img1} />),
        ]}
        //number={state.slides.length}
      />
    </div>
  );
};

export default Gallery;
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
