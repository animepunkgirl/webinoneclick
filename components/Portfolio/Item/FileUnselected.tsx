import React from 'react';
import { FileUnselectedWrapper, ItemWrapper} from "./Item.styles";
import {useRecoilValue} from "recoil";
import {sidebarOpenAtom} from "@store/Portfolio";
import {Text} from "@Home/UI";

const FileUnselected = () => {
  const sidebarOpen = useRecoilValue(sidebarOpenAtom)

  return (
    <ItemWrapper sidebarOpen={sidebarOpen}>
      <FileUnselectedWrapper>
        <Text type="p" color="red" size="lg">SelectAndReadAnyFile</Text>
      </FileUnselectedWrapper>
    </ItemWrapper>
  );
};

export default FileUnselected;