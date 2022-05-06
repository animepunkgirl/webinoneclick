import React, {FC, useState} from 'react';
import { Text, Divider, Section, Container, ButtonLink, Button } from "@Home/UI";
import { Title, Flex, Column, Buttons } from "./Footer.styles";
import useMenu from "@hooks/useMenu";
import {useRecoilValue} from "recoil";
import {isWideAtom} from "@store/Home";
import ContactMePopup from "@Home/Footer/ContactMePopup";

const Footer: FC = () => {
  const { addSection } = useMenu()
  const isWide = useRecoilValue(isWideAtom)
  const [contactPopupOpen, setContactPopupOpen] = useState(false)

  return (
    <Section
      fullscreen={isWide}
      ref={ref => addSection({ ref, title: "Ending"})}
    >
      <Container>
        <Text type="h1" template="string" adaptiveFont={[40, 34]} lineHeight={0.72}>Ending</Text>
        <Divider>Footer</Divider>
        <Flex>
          <Column>
            <Title><Text type="h2" size="lg" uppercase lineHeight={0.72}>LINKS</Text></Title>
            <Buttons>
              <ButtonLink href="/portfolio">Go to Portfolio</ButtonLink>
              <Button onClick={() => setContactPopupOpen(true)}>Contact me</Button>
            </Buttons>
          </Column>
          <Column>
            <Title><Text type="h2" size="lg" uppercase lineHeight={0.72}>WEBSITE</Text></Title>
            <Text type="p" size="md">
              The design of the website was very inspired by the <Text type="a" href="https://material-theme.com/" template="commented">Material UI theme</Text>, which I myself use when writing code.
            </Text>
          </Column>
        </Flex>
      </Container>
      <ContactMePopup isOpen={contactPopupOpen} handleClose={() => setContactPopupOpen(false)} />
    </Section>
  );
};

export default Footer;