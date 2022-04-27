import React, {FC, memo, useEffect} from 'react';
import { ContainerWithSidebar, ContentWrapper } from "./Portfolio.styles"
import {homeTheme} from "@themes/Home.theme";
import {IconContext} from "react-icons";
import Sidebar from "@Portfolio/Sidebar/Sidebar";
import {useRecoilState, useRecoilValue} from "recoil";
import useMatchMedia from "@hooks/useMatchMedia";
import {sidebarAutoCloseAtom, sidebarOpenAtom} from "@store/Portfolio";
import Content from "@Portfolio/Content/Content";

const Portfolio: FC = () => {
  const sidebarOpen = useRecoilValue(sidebarOpenAtom)
  const [, setSidebarAutoClose] = useRecoilState(sidebarAutoCloseAtom)
  const matches = useMatchMedia({ size: 41.875 })
  useEffect(() => {
    setSidebarAutoClose(matches)
  }, [matches, setSidebarAutoClose])

  return (
    <IconContext.Provider value={{
      color: homeTheme.colors.purple,
      size: "30px"
    }}>
      <ContainerWithSidebar>
        <Sidebar isOpen={sidebarOpen}/>
        <ContentWrapper sidebarOpen={sidebarOpen}>
          <Content />
        </ContentWrapper>
      </ContainerWithSidebar>
    </IconContext.Provider>
  );
};

export default memo(Portfolio);