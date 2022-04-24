import React, {useEffect, useState, VFC} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Heading from "./Heading/Heading";
import Footer from "./Footer/Footer";
import {useRecoilState} from "recoil";
import {pageSlideAtom} from "@store/Home";
import SwiperCore, {Keyboard, Mousewheel} from "swiper";
import Skills from "@Home/Skills/Skills";

const Home: VFC = () => {
  const [swiper, setSwiper] = useState<SwiperCore>()
  const [pageSlide, setPageSlide] = useRecoilState(pageSlideAtom)

  useEffect(() => {
    if(swiper && !swiper.destroyed && pageSlide !== swiper.activeIndex)
      swiper.slideTo(pageSlide)
  }, [swiper, pageSlide])

  const handleSlideChange = (swiper: SwiperCore) => {
    setPageSlide(swiper.activeIndex)
  }

  return (
    <Swiper
      onSwiper={setSwiper}
      onSlideChange={handleSlideChange}
      modules={[Mousewheel, Keyboard]}
      slidesPerView={"auto"}
      direction="vertical"
      autoHeight={true}
      updateOnWindowResize
      simulateTouch={false}
      mousewheel={{
        sensitivity: 1,
        releaseOnEdges: true,
      }}
      keyboard={{
        enabled: true,
        pageUpDown: true
      }}
      speed={650}
      tag="main"
    >
      <SwiperSlide>
        <Heading />
      </SwiperSlide>
      <SwiperSlide>
        <Skills />
      </SwiperSlide>
      <SwiperSlide>
        <Footer />
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;