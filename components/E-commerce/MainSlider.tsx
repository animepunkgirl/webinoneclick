import Item from "../../public/e-commerce/main-slider/01.png"
import Image from "next/image"
import Lamp from "../../public/e-commerce/main-slider/lamp.png"
import {SwiperSlide, Swiper} from 'swiper/react';
import {Autoplay, Pagination} from "swiper";


const MainSlider = () => {

  return (
    <div className="main-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
        delay: 2000
        }}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        speed={1000}
        loop
      >
        <SwiperSlide>
          <div className="main-slider__container">
            <div className="main-slider__content-wrapper">
              <div className="main-slider__content">
                <div className="main-slider__label">
                  Best Furniture For Your Castle....
                </div>
                <div className="main-slider__title">
                  New Furniture Collection
                  Trends in 2020
                </div>
                <div className="main-slider__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                  in phasellus non in justo.
                </div>
                <div className="main-slider__btn-wrapper">
                  <div className="main-slider__btn btn">
                    Shop Now
                  </div>
                </div>
              </div>
            </div>
            <div className="main-slider__image">
              <Image src={Item}/>
            </div>
            <div className="main-slider__lamp">
              <Image src={Lamp} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-slider__container">
            <div className="main-slider__content-wrapper">
              <div className="main-slider__content">
                <div className="main-slider__label">
                  Best Website for you....
                </div>
                <div className="main-slider__title">
                  The best website for your project
                </div>
                <div className="main-slider__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                  in phasellus non in justo.
                </div>
                <div className="main-slider__btn-wrapper">
                  <div className="main-slider__btn btn">
                    Shop Now
                  </div>
                </div>
              </div>
            </div>
            <div className="main-slider__image">
              <Image src={Item}/>
            </div>
            <div className="main-slider__lamp">
              <Image src={Lamp} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;