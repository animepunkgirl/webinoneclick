import React, {memo, useEffect, VFC} from 'react';
import { ContainerWithSidebar } from "./Portfolio.styles"
import {homeTheme} from "@themes/Home.theme";
import {IconContext} from "react-icons";
import Sidebar from "@Portfolio/Sidebar/Sidebar";
import Item from "@Portfolio/Item/Item";
import {useRecoilState} from "recoil";
import useMatchMedia from "@hooks/useMatchMedia";
import {sidebarAutoCloseAtom} from "@store/Portfolio";

const Portfolio: VFC = () => {
  const [sidebarAutoClose, setSidebarAutoClose] = useRecoilState(sidebarAutoCloseAtom)
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
        <Sidebar />
        <Item />
      </ContainerWithSidebar>
    </IconContext.Provider>
  );
};

export default memo(Portfolio);