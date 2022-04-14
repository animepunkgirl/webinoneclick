import React from 'react';
import {Container, ThemeSettings, Wrapper} from "@PetSlider/PetSlider.styles";
import ImageSlider from "@PetSlider/ImageSlider";
import TextSlider from "@PetSlider/TextSlider";

const PetSlider = () => {
  return (
    <ThemeSettings>
      <Wrapper>
        <Container>
          <ImageSlider />
          <TextSlider />
        </Container>
      </Wrapper>
    </ThemeSettings>
  );
};

export default PetSlider;