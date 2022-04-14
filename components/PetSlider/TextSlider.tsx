import React from 'react';
import {useRecoilState} from "recoil";
import { petSlideAtom } from "@store/PetSlider";
import { Wrapper, Slide, Content, Label, Title, Text } from "./TextSlider.styles";
import Items from "./Items";

const TextSlider = () => {
  const [petSlide, setPetSlide] = useRecoilState(petSlideAtom)

  const handleChangeSlide = (slideIndex: number) => {
    setPetSlide(slideIndex)
  }

  return (
    <Wrapper>
      {Items.map((item, i) =>
        <Slide active={petSlide === i} onClick={() => handleChangeSlide(i)} key={i}>
          <Content>
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