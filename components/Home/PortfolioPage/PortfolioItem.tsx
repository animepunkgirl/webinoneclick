import React from 'react';
import {ImageLinkWrapper, ItemWrapper, TextWithIcon, PortfolioWrapper, Features} from "@Home/PortfolioPage/PortfolioPage.styles";
import {Text} from "@Home/UI";
import {MdCode, MdOutlineDescription, MdOutlineFeaturedPlayList} from "react-icons/md";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import {useRecoilValue} from "recoil";
import {portfolioAtom} from "@store/Home";
import TextHelpers from "@Home/PortfolioPage/TextHelpers";
import {sidebarOpenAtom} from "@store/Home/sidebarOpen";


const options = {
  overrides: TextHelpers,
}

const PortfolioItem = () => {
  const portfolio = useRecoilValue(portfolioAtom)
  const sidebarOpen = useRecoilValue(sidebarOpenAtom)

  const {
    url,
    madeWith,
    description,
    features,
    image,
    title
  } = portfolio.item

  return (
    <PortfolioWrapper sidebarOpen={sidebarOpen}>
      <ItemWrapper>
        <h1><Text type="a" size="lg" color="red" href={url}># {title} #</Text></h1>

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
      </ItemWrapper>
      <ImageLinkWrapper data-onHoverText="Visit the website" href={url} target="_blank" rel="noreferrer noopener">
          <Image src={image} layout="fill" alt={`Screenshot of ${title} project`}/>
      </ImageLinkWrapper>
    </PortfolioWrapper>
  );
};

export default PortfolioItem;