import {NextPage} from "next";
import Portfolio from "@Portfolio/Portfolio";
import {ThemeProvider} from "styled-components";
import {homeTheme} from "@themes/Home.theme";
import Wrapper from "@Home/Home.styles"
import PortfolioHeader from "@Portfolio/PortfolioHeader/PortfolioHeader";

const PortfolioPage: NextPage = () => {
  return (
    <ThemeProvider theme={homeTheme}>
      <Wrapper>
        <PortfolioHeader />
        <Portfolio />
      </Wrapper>
    </ThemeProvider>
  );
};

export default PortfolioPage;