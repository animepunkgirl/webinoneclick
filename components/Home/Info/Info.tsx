import React, {useState, VFC} from 'react';
import ContactMePopup from "./ContactMePopup";
import { Section, Container, Text, Divider, Button } from '@Home/UI';
import { Flex, Row, Column, Item } from './Info.styles';

const Info: VFC = () => {
  const [popupOpen, setPopupOpen] = useState(false)


  return (
    <Section dark className="section">
      <Container>
        <Text type="h1" template="string" adaptiveFont={[44, 34]} lineHeight={0.72} uppercase>Info</Text>
        <Divider>About_me</Divider>
        <Flex>
          <Row>
            <Column>
              <Item>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, voluptates!
              </Item>
            </Column>
            <Column>
              <Item>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, molestiae.
              </Item>
            </Column>
          </Row>
        </Flex>
        <Button margin="40px 0 0 0" onClick={() => setPopupOpen(true)}>
          Contact me
        </Button>
      </Container>
      <ContactMePopup isOpen={popupOpen} handleClose={() => setPopupOpen(false)} />
    </Section>
  );
};

export default Info;