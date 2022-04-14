import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import SwiperCore from "swiper";
import useMatchMedia from "@hooks/useMatchMedia";
import { useRecoilValue } from "recoil";
import { petSlideAtom } from "@store/PetSlider";
import { Wrapper, Item } from "./ImageSlider.styles";
import Items from "./Items";
import {petSliderTheme} from "@themes/PetSlider.theme";

const ImageSlider = () => {
  const matches = useMatchMedia(768, true);
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)
  const petSlide = useRecoilValue(petSlideAtom)

  useEffect(() => {
    if(swiper && !swiper.destroyed) {
      if(matches) {
        swiper.changeDirection('horizontal', true);
      } else {
        swiper.changeDirection('vertical', true);
        swiper.updateAutoHeight(800);
      }
    }
  }, [swiper, matches])

  useEffect(() => {
    if(swiper) {
      if(petSlide !== swiper.activeIndex) {
        swiper.slideTo(petSlide, matches ? petSliderTheme.animations.slideSpeed : petSliderTheme.animations.slideSpeedMobile)
      }
    }
  }, [swiper, petSlide])

  const handleOnSwiper = (swiper: SwiperCore) => {
    setSwiper(swiper)
  }

  return (
    <Wrapper>
      <Swiper
        onAfterInit={handleOnSwiper}
        resizeObserver
        slidesPerView={1}
      >
        {Items.map(({image}) =>
          <SwiperSlide>
            <Item><Image src={image} layout="fill" priority /></Item>
          </SwiperSlide>
        )}
      </Swiper>
    </Wrapper>
  );
};

export default ImageSlider;