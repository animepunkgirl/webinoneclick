import React, { FC } from 'react';
import { Aside, Content } from "./Sidebar.styles";
import FileSystem from "@Portfolio/FileSystem/FileSystem";
import {useRecoilValue} from "recoil";
import {sidebarOpenAtom} from "@store/Portfolio";

const Sidebar: FC = () => {
  const isOpen = useRecoilValue(sidebarOpenAtom)
  return (
    <Aside open={isOpen}>
      <Content>
        <FileSystem />
      </Content>
    </Aside>
  );
};

export default Sidebar;