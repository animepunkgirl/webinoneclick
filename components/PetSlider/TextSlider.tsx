import React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {isDesktopAtom, isTabletAtom, petSlideAtom} from "@store/PetSlider";
import { Wrapper, Slide, Content, Label, Title, Text } from "./TextSlider.styles";
import Items from "./Items";

const TextSlider = () => {
  const [petSlide, setPetSlide] = useRecoilState(petSlideAtom)
  const isTablet = useRecoilValue(isTabletAtom)
  const isDesktop = useRecoilValue(isDesktopAtom)

  const handleChangeSlide = (slideIndex: number) => {
    setPetSlide(slideIndex)
  }

  return (
    <Wrapper isTablet={isTablet}>
      {Items.map((item, i) =>
        <Slide
          active={petSlide === i}
          onClick={() => handleChangeSlide(i)} key={i}
          isTablet={isTablet}
        >
          <Content isDesktop={isDesktop}>
            <Label>{item.label}</Label>
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
          </Content>
        </Slide>
      )}
    </Wrapper>
  );
};

export default TextSlider;