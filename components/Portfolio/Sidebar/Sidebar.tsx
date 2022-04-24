import React from 'react';
import { Aside, Content, Toggle } from "./Sidebar.styles";
import FileSystem from "@Portfolio/FileSystem/FileSystem";
import {useRecoilState} from "recoil";
import {sidebarOpenAtom} from "@store/Portfolio";
import {MdFilePresent} from "react-icons/md";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarOpenAtom)

  return (
    <>
      <Aside open={sidebarOpen}>
        <Content>
          <FileSystem />
        </Content>
      </Aside>
      <Toggle onClick={() => setSidebarOpen(prev => !prev)} open={sidebarOpen}><MdFilePresent size="2.2rem" /></Toggle>
    </>
  );
};

export default Sidebar;