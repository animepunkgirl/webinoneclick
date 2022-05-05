import React, {FC} from 'react';
import { HeadingContainer } from "./Heading.styles";
import { Divider, Section, Text } from "@Home/UI";
import useMenu from "@hooks/useMenu";
import Subtitle from "@Home/Heading/Subtitle/Subtitle";

const Heading: FC = () => {
  const { addSection } = useMenu()

  return (
    <Section
      fullscreen
      ref={ref => addSection({ ref, title: "Heading" })}
    >
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
          <Subtitle />
        </HeadingContainer>
    </Section>
  );
};

export default Heading;