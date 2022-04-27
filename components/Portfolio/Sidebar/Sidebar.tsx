import React, { FC } from 'react';
import { Aside, Content } from "./Sidebar.styles";
import FileSystem from "@Portfolio/FileSystem/FileSystem";

interface Props {
  isOpen: boolean
}

const Sidebar: FC<Props> = ({isOpen}) => {
  return (
    <>
      <Aside open={isOpen}>
        <Content>
          <FileSystem />
        </Content>
      </Aside>
    </>
  );
};

export default Sidebar;