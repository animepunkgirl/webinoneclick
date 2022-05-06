import React, {FC} from 'react';
import {ImageLinkWrapper} from "@Portfolio/Content/Item.styles";
import {StaticImageData} from "next/image";
import NextImage from "next/image";
import PetSliderImage from "@public/portfolio/pet-slider.png";

interface Props {
  url: string,
  title: string,
  image: StaticImageData
}

const Image: FC<Props> = ({url, title, image}) => {
  return (
    <ImageLinkWrapper data-onhovertext="Visit the website" href={url} target="_blank" rel="noreferrer noopener">
      <NextImage
        src={PetSliderImage}
        layout="fill"
        alt={`Screenshot of ${title} project`}
        placeholder="blur"
      />
    </ImageLinkWrapper>
  );
};

export default Image;