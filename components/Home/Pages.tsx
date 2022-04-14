import React, {useEffect, useState, VFC} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Heading from "./Heading/Heading";
import Info from "./Info/Info";
import PortfolioSection from "./PortfolioSection/PortfolioSection";
import {useRecoilState} from "recoil";
import {pageSlideAtom} from "@store/Home";
import SwiperCore, {Keyboard, Mousewheel} from "swiper";

const Pages: VFC = () => {
  const [swiper, setSwiper] = useState<SwiperCore>()
  const [pageSlide, setPageSlide] = useRecoilState(pageSlideAtom)

  useEffect(() => {
    if(swiper && !swiper.destroyed && pageSlide !== swiper.activeIndex)
      swiper.slideTo(pageSlide)
  }, [pageSlide])

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
      simulateTouch={false}
      autoHeight={true}
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
        <Info />
      </SwiperSlide>
      <SwiperSlide>
        <PortfolioSection />
      </SwiperSlide>
    </Swiper>
  );
};

export default Pages;