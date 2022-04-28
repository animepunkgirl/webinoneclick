import React, { FC } from 'react';
import {DescriptionWrapper, TextWithIcon, Features} from "./Item.styles";
import {Text} from "@Home/UI";
import {MdCode, MdOutlineDescription, MdOutlineFeaturedPlayList} from "react-icons/md";
import Markdown from "markdown-to-jsx";
import ImageContainer from "./Image";
import TextHelpers from "./TextHelpers";
import PortfolioItem from "@Types/PortfolioItem";

const options = {
  overrides: TextHelpers,
}


interface Props {
  item: PortfolioItem
}

const Item: FC<Props> = ({ item }) => {

  const {
    url,
    madeWith,
    description,
    features,
    image,
    title
  } = item

  return (
    <>
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
      <ImageContainer image={image} title={title} url={url} />
    </>
  );
};

export default Item;