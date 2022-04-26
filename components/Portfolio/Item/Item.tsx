import React, {useState} from 'react';
import {DescriptionWrapper, TextWithIcon, ItemWrapper, Features} from "./Item.styles";
import {Text} from "@Home/UI";
import {MdCode, MdOutlineDescription, MdOutlineFeaturedPlayList} from "react-icons/md";
import Markdown from "markdown-to-jsx";
import Image from "./Image";
import {useRecoilValue} from "recoil";
import {portfolioItemAtom} from "@store/Portfolio";
import TextHelpers from "./TextHelpers";
import {sidebarOpenAtom} from "@store/Portfolio";
import FileUnselected from "@Portfolio/Item/FileUnselected";

const options = {
  overrides: TextHelpers,
}

const Item = () => {
  const portfolioItem = useRecoilValue(portfolioItemAtom)
  const sidebarOpen = useRecoilValue(sidebarOpenAtom)

  if(!portfolioItem)
    return <FileUnselected />

  const {
    url,
    madeWith,
    description,
    features,
    image,
    title
  } = portfolioItem

  return (
    <ItemWrapper sidebarOpen={sidebarOpen}>
      <DescriptionWrapper>
        <h1><Text type="a" adaptiveFont={[24, 20]} color="red" href={url}># {title} #</Text></h1>

        <TextWithIcon>
          <MdOutlineDescription />
          <Text><Markdown options={options}>{description}</Markdown></Text>
        </TextWithIcon>

        <TextWithIcon>
          <MdOutlineFeaturedPlayList />
          <Text>Features:</Text>
        </TextWithIcon>

        <Features>
          {features.map((feature) =>
            <Text key={feature}><Markdown options={options}>{feature}</Markdown></Text>
          )}
        </Features>

        <TextWithIcon>
          <MdCode />
          <Text>Made with: {madeWith}</Text>
        </TextWithIcon>

        <Image image={image} title={title} url={url} />
      </DescriptionWrapper>
    </ItemWrapper>
  );
};

export default Item;