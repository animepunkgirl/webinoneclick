import React, {useEffect} from 'react';
import {Container, ThemeSettings, Wrapper} from "@PetSlider/PetSlider.styles";
import ImageSlider from "@PetSlider/ImageSlider";
import TextSlider from "@PetSlider/TextSlider";
import { useRecoilState } from "recoil";
import {isDesktopAtom, isTabletAtom} from "@store/PetSlider";
import useMatchMedia from "@hooks/useMatchMedia";
import {petSliderTheme} from "@themes/PetSlider.theme";

const PetSlider = () => {
  const [isTablet, setIsTablet] = useRecoilState(isTabletAtom);
  const [isDesktop, setIsDesktop] = useRecoilState(isDesktopAtom)
  const isTabletMatches = useMatchMedia({ size: petSliderTheme.breakpoints.tablet })
  const isDesktopMatches = useMatchMedia({ size: petSliderTheme.breakpoints.desktop })

  useEffect(() => {
    setIsTablet(isTabletMatches)
    setIsDesktop(isTabletMatches)

    console.log(isTabletMatches, isDesktopMatches)
  }, [isTabletMatches, isDesktopMatches])

  return (
    <ThemeSettings>
      <Wrapper>
        <Container isTablet={isTablet} isDesktop={isDesktop}>
          <ImageSlider />
          <TextSlider />
        </Container>
      </Wrapper>
    </ThemeSettings>
  );
};

export default PetSlider;