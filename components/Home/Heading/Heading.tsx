import React, {VFC} from 'react';
import { HeadingContainer, Subtitle } from "./Heading.styles";
import { Divider, Section, Text } from "@Home/UI";
import TypingSubtitle from "./TypingSubtitle/TypingSubtitle";
import ScrollIcon from "./ScrollIcon";

const Heading: VFC = () => {
  return (
    <Section noPadding>
      <HeadingContainer>
        <Text
          type="h1"
          template="htmlMarkup"
          uppercase
          adaptiveFont={[64, 45]}
          lineHeight={57/64}
        >
          Daniel_M.
        </Text>
        <Divider>Heading</Divider>
        <Subtitle><TypingSubtitle /></Subtitle>
        <ScrollIcon />
      </HeadingContainer>
    </Section>
  );
};

export default Heading;