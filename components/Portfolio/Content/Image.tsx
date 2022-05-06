import React, {FC, useEffect, useState} from 'react';
import {ImageLinkWrapper} from "@Portfolio/Content/Item.styles";
import NextImage from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
  url: string,
  title: string,
  image: string
}

const Image: FC<Props> = ({url, title, image}) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    //eslint-disable-next-line
  }, [url])

  return (
    <ImageLinkWrapper data-onhovertext="Visit the website" href={url} target="_blank" rel="noreferrer noopener">
      <NextImage
        src={image}
        layout="fill"
        alt={`Screenshot of ${title} project`}
        onLoadingComplete={() => setIsLoading(false)}
      />
      {isLoading && <AiOutlineLoading3Quarters className="loader" size={"5rem"} />}
    </ImageLinkWrapper>
  );
};

export default Image;