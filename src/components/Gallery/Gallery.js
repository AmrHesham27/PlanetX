import img1 from '../../utils/img1.jpg'
//import img2 from '../../utils/img2.jpg'
//import img3 from '../../utils/img3.jpg'
//import img4 from '../../utils/img4.jpg'

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css'; 
import { useState } from 'react';
import './Gallery.css'
import ReactPlayer from 'react-player';
const MyCarouselWithDots = () => {
  const [value, setValue] = useState(0);

  const onChange = value => {
  setValue(value);
  }

  return (
    <div>
      <Dots
        value={value}
        onChange={onChange}
        thumbnails={[
          (<img key={1} alt='game' className="img-example-small" src={img1} />),
          (<img key={2} alt='game' className="img-example-small" src={img1} />),
          (<img key={3} alt='game' className="img-example-small" src={img1} />),
          (<img key={4} alt='game' className="img-example-small" src={img1} />),
          (<img key={5} alt='game' className="img-example-small" src={img1} />)
        ]}
        //number={state.slides.length}
      />
      <Carousel
        value={value}
        onChange={onChange}
      >
        <img alt='game' className="img-example" src={img1} />
        <img alt='game' className="img-example" src={img1} />
        <ReactPlayer width={711} height={400} url='https://youtu.be/vUhr1cwTrnQ' controls={true}/>
        <img alt='game' className="img-example" src={img1} />
        <img alt='game' className="img-example" src={img1} />
      </Carousel>
      
    </div>
  );
};

export default MyCarouselWithDots;
// you can make your dots compnents yourself if you want
// <img onClick={ () => setValue(0)} className="img-example-small" src={img1} />