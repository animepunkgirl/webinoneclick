import React, {memo, VFC} from 'react';
import { ContainerWithSidebar } from "./PortfolioPage.styles"
import {homeTheme} from "@themes/Home.theme";
import {IconContext} from "react-icons";
import Sidebar from "./Sidebar";
import PortfolioItem from "@Home/PortfolioPage/PortfolioItem";

const PortfolioPage: VFC = () => {
  return (
    <IconContext.Provider value={{
      color: homeTheme.colors.purple,
      size: "30px"
    }}>
      <ContainerWithSidebar>
        <Sidebar />
        <PortfolioItem />
      </ContainerWithSidebar>
    </IconContext.Provider>
  );
};

export default memo(PortfolioPage);