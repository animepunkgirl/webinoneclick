import React from 'react';
import {ImageLinkWrapper, DescriptionWrapper, TextWithIcon, ItemWrapper, Features} from "./Item.styles";
import {Text} from "@Home/UI";
import {MdCode, MdOutlineDescription, MdOutlineFeaturedPlayList} from "react-icons/md";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import {useRecoilValue} from "recoil";
import {portfolioAtom} from "@store/Portfolio";
import TextHelpers from "./TextHelpers";
import {sidebarOpenAtom} from "@store/Portfolio";
import FileUnselected from "@Portfolio/Item/FileUnselected";

const options = {
  overrides: TextHelpers,
}

const Item = () => {
  const portfolio = useRecoilValue(portfolioAtom)
  const sidebarOpen = useRecoilValue(sidebarOpenAtom)

  if(!portfolio.item)
    return <FileUnselected />

  const {
    url,
    madeWith,
    description,
    features,
    image,
    title
  } = portfolio.item

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
      </DescriptionWrapper>
      <ImageLinkWrapper data-onhovertext="Visit the website" href={url} target="_blank" rel="noreferrer noopener">
          <Image src={image} layout="fill" alt={`Screenshot of ${title} project`} placeholder="blur" />
      </ImageLinkWrapper>
    </ItemWrapper>
  );
};

export default Item;