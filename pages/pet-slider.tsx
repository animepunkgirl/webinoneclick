import React from 'react';
import { petSliderTheme } from "@themes/PetSlider.theme";
import {ThemeProvider} from "styled-components";
import PetSlider from "@PetSlider/PetSlider";

const PetSliderPage = () => {
  return (
    <ThemeProvider theme={petSliderTheme}>
      <PetSlider />
    </ThemeProvider>
  );
};

export default PetSliderPage;