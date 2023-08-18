import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';
export default function MainBanner() {
  return(
    <div className='mainbanner'>
      <Swiper
        slidesPerView={1}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 3000
        }}
        parallax={true}
        watchSlidesProgress={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        grabCursor={true}
        modules={[Autoplay, Parallax]}
      >
        <SwiperSlide>
          <Link href="/item/item1">
            <div className='back'>
              <div>
                <h2 data-swiper-parallax={-200}>
                  푹신한 에그타르트 쿠션<br/>
                  10% 오픈 할인
                </h2>
                <p data-swiper-parallax={-400}>
                  귀여운 냥이들의 소중한 보금자리
                </p>
              </div>
            </div>
            <div className='img' data-swiper-parallax={"23%"}>
              <img src="/assets/img/banner1.png" alt="" />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/item/item7">
            <div className='back'>
              <div>
                <h2 data-swiper-parallax={-200}>
                  프리미엄 원목 캣타워<br/>
                  깃털 장난감 증정
                </h2>
                <p data-swiper-parallax={-400}>
                  냥이들의 전망대를 만들어주세요
                </p>
              </div>
            </div>
            <div className='img' data-swiper-parallax={"23%"}>
              <img src="/assets/img/banner2.png" alt="" />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/item/item6">
            <div className='back'>
              <div>
                <h2 data-swiper-parallax={-200}>
                  고양이 케어 아이템<br/>
                  기획 세트 구성
                </h2>
                <p data-swiper-parallax={-400}>
                  20% 할인된 가격으로 만나보세요
                </p>
              </div>
            </div>
            <div className='img' data-swiper-parallax={"23%"}>
              <img src="/assets/img/banner3.png" alt="" />
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}