import React, {FC} from 'react';
import {ImageLinkWrapper} from "@Portfolio/Content/Item.styles";
import NextImage from "next/image";

interface Props {
  url: string,
  title: string,
  image: string
}

const Image: FC<Props> = ({url, title, image}) => {
  return (
    <ImageLinkWrapper data-onhovertext="Visit the website" href={url} target="_blank" rel="noreferrer noopener">
      <NextImage
        src={image}
        layout="fill"
        alt={`Screenshot of ${title} project`}
      />
    </ImageLinkWrapper>
  );
};

export default Image;