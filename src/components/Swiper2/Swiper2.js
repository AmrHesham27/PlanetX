/*
I am here copying compnent swiper 1 , just trying to make compneent based on links
that i will recieve from the api
*/
import { Swiper, SwiperSlide } from 'swiper/react'
import './Swiper.css'

const params = {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    clickable: true
  }
}

const Swiper2 = () => {
    const arrayOfLinks = [
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    ];

    let arrayOfElements = arrayOfLinks.map(
        (x,index) => {
            return (
                <SwiperSlide>
                    <img src={x} alt='game' className='img-fluid' key={index} />
                </SwiperSlide>
            )
        }
    );
    return (
    <>
        <div className='swiperHeader'>
            Game gallery
        </div>
        <>
        <Swiper {...params}>
            {arrayOfElements}
        </Swiper>
        </>
    </>
    )
}

export default Swiper2
