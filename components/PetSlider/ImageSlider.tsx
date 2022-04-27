import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import SwiperCore from "swiper";
import { useRecoilValue } from "recoil";
import {isDesktopAtom, isTabletAtom, petSlideAtom} from "@store/PetSlider";
import { Wrapper, Item } from "./ImageSlider.styles";
import Items from "./Items";
import {petSliderTheme} from "@themes/PetSlider.theme";

const ImageSlider = () => {
  const isTablet = useRecoilValue(isTabletAtom)
  const isDesktop = useRecoilValue(isDesktopAtom)

  const [swiper, setSwiper] = useState<SwiperCore | null>(null)
  const petSlide = useRecoilValue(petSlideAtom)

  useEffect(() => {
    if(swiper && !swiper.destroyed) {
      if(isTablet) {
        swiper.changeDirection('horizontal', true);
      } else {
        swiper.changeDirection('vertical', true);
        // swiper.updateAutoHeight(800);
      }
    }
  }, [swiper, isTablet])

  useEffect(() => {
    if(swiper) {
      if(petSlide !== swiper.activeIndex) {
        swiper.slideTo(petSlide, petSliderTheme.animations.slideSpeed)
      }
    }
  }, [swiper, petSlide, isTablet])

  const handleOnSwiper = (swiper: SwiperCore) => {
    setSwiper(swiper)
  }

  return (
    <Wrapper isTablet={isTablet} isDesktop={isDesktop}>
      <Swiper
        onAfterInit={handleOnSwiper}
        resizeObserver
        slidesPerView={1}
      >
        {Items.map(({label, image}) =>
          <SwiperSlide key={image}>
            <Item isTablet={isTablet}>
              <Image
                src={image}
                layout="fill"
                priority
                alt={`Picture of ${label}`}
                objectFit={"cover"}
              />
            </Item>
          </SwiperSlide>
        )}
      </Swiper>
    </Wrapper>
  );
};

export default ImageSlider;