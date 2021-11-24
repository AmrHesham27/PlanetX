import { Swiper, SwiperSlide } from 'swiper/react'
import img1 from '../../utils/img1.jpg'
import './Swiper.css'

const params = {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    clickable: true
  }
}

const SwiperMultiSlides = () => {
  return (
    <>
      <div className='swiperHeader'>
          Game gallery
      </div>
      <>
        <Swiper {...params}>
          <SwiperSlide>
            <img src={img1} alt='swiper 1' className='img-fluid' />
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
      </>
    </>
  )
}

export default SwiperMultiSlides
