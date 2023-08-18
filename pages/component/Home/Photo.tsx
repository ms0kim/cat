import { useState, useEffect } from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

type Photo = {
  id: string,
  title: string,
  img: string,
}

export default function Photo() {
  const [photo, setPhoto] = useState<Photo[]>([]);

  useEffect(() => {
    fetch('/api/photo')
    .then((res) => res.json())
    .then((data) => {
      setPhoto(data)
    })
    .catch((err) => {
      alert('갤러리를 불러올 수 없습니다');
      console.log(err);
    })
  }, [])

  return (
    <div className="photo">
      <h2>예쁜 냥이들 자랑해주세요</h2>
      <Link className='btn' href="/photo">우리 냥이도 자랑하기</Link>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div></div>
          <img src="/assets/img/cat1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          <img src="/assets/img/cat2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          <img src="/assets/img/cat3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          <img src="/assets/img/cat4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          <img src="/assets/img/cat5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          <img src="/assets/img/cat6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          <img src="/assets/img/cat7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          <img src="/assets/img/cat8.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}