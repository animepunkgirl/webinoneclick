import React, {VFC} from 'react';
import { Container, Divider, Section, Text } from "@Home/UI";
import { Column, Flex, Row, Item } from "@Home/Skills/Skills.styles";
import {useRecoilValue} from "recoil";
import { isWideAtom } from "@store/Home";
import useMenu from "@hooks/useMenu";

interface Props {
  mobile?: boolean
}

const Skills: VFC<Props> = () => {
  const isWide = useRecoilValue(isWideAtom)
  const { addSection } = useMenu()

  return (
    <Section
      dark
      fullscreen={isWide}
      ref={ref => addSection({ ref, title: "Skills" })}
    >
        <Container>
          <Text type="h1" template="cssId" adaptiveFont={[40, 34]} lineHeight={0.72}>Skills</Text>
          <Divider>Skills_List</Divider>
          <Flex isWide={isWide}>
            <Row>
              <Text type="strong" lineHeight={0.72} color="purple">Hard skills</Text>
              <Column>
                <Item>
                  <Text type="strong" size="sm">Confident</Text>:
                  React/Next.js, Redux/RTK, TypeScript, JavaScript/ES6+, HTML5/CSS3, SCSS/Styled Components, Node.js,
                  Adaptive & Responsive Design, MongoDB, Git
                </Item>
              </Column>
              <Column>
                <Item>
                  <Text type="strong" size="sm">Trying to get better</Text>:
                  Webpack, SOLID/Software design patterns, Tests, Recoil
                </Item>
              </Column>
            </Row>
            <Row>
              <Text type="strong" lineHeight={0.72} color="purple">Soft skills</Text>
              <Column>
                <Item>
                  Self-management, decision-making, but don&apos;t afraid to ask a question, self-motivation
                </Item>
              </Column>
              <Column>
                <Item>
                  I would really like to be part of a strong team and help you make your project a little better :)
                </Item>
              </Column>
            </Row>
          </Flex>
        </Container>
    </Section>
  );
};

export default Skills;