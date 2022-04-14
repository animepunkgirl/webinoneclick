import React, {VFC} from 'react';
import { Text, Divider, Section, Container } from "@Home/UI";
import FileSystem from "../PortfolioFileSystem/FileSystem";

const PortfolioSection: VFC = () => {
  return (
    <Section>
      <Container>
        <Text type="h1" template="cssId" adaptiveFont={[44, 34]} lineHeight={0.72} uppercase>Portfolio</Text>
        <Divider>Items</Divider>
        <FileSystem />
      </Container>
    </Section>
  );
};

export default PortfolioSection;