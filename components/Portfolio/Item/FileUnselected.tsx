import React from 'react';
import { CenteringWrapper, ItemWrapper} from "./Item.styles";
import {useRecoilValue} from "recoil";
import {sidebarOpenAtom} from "@store/Portfolio";
import {Text} from "@Home/UI";

const FileUnselected = () => {
  const sidebarOpen = useRecoilValue(sidebarOpenAtom)

  return (
    <ItemWrapper sidebarOpen={sidebarOpen}>
      <CenteringWrapper>
        <Text type="p" color="red" size="lg">SelectAndReadAnyFile</Text>
      </CenteringWrapper>
    </ItemWrapper>
  );
};

export default FileUnselected;