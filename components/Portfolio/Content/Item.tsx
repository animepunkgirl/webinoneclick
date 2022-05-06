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
  forceInline: true
}


interface Props {
  item: PortfolioItem
}

const Item: FC<Props> = ({ item:{
  url,
  madeWith,
  description,
  features,
  remarkable,
  image,
  title
}}) => {

  return (
    <>
      <DescriptionWrapper>
        <h1><Text type="a" adaptiveFont={[24, 20]} color="red" href={url}># {title} #</Text></h1>

        <TextWithIcon>
          <MdOutlineDescription />
          <Text><Markdown options={options}>{description}</Markdown></Text>
        </TextWithIcon>

        {features && (
          <>
            <TextWithIcon>
              <MdOutlineFeaturedPlayList />
              <Text>Features:</Text>
            </TextWithIcon>
            <Features>
              {features.map((feature) =>
                <Text key={feature}><Markdown options={options}>{feature}</Markdown></Text>
              )}
            </Features>
          </>
        )}
        {remarkable && (
          <>
            <TextWithIcon>
              <MdOutlineFeaturedPlayList />
              <Text>Remarkable work:</Text>
            </TextWithIcon>
            <Features>
              {remarkable.map((feature) =>
                <Text key={feature}><Markdown options={options}>{feature}</Markdown></Text>
              )}
            </Features>
          </>
        )}

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