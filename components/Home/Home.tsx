import React, {useEffect, useState, VFC} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Pages from "./Pages";
import SwiperCore from "swiper";
import {useRecoilState} from "recoil";
import { portfolioAtom } from "@store/Home";
import PortfolioPage from "./PortfolioPage/PortfolioPage";

const Home: VFC = () => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)
  const [portfolio] = useRecoilState(portfolioAtom)

  useEffect(() => {
    if(swiper && !swiper.destroyed) {
      swiper.slideTo(portfolio.open, 650)
    }
  }, [swiper,  portfolio])

  return (
    <Swiper
      onAfterInit={setSwiper}
      allowTouchMove={false}
    >
      <SwiperSlide>
        <Pages />
      </SwiperSlide>
      <SwiperSlide>
        <PortfolioPage />
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;