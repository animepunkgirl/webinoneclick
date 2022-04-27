import React from 'react';
import { CenteringWrapper } from "./Item.styles";
import {Text} from "@Home/UI";

const FileUnselected = () => {

  return (
    <CenteringWrapper>
      <Text type="p" color="red" size="lg">SelectAndReadAnyFile</Text>
    </CenteringWrapper>
  );
};

export default FileUnselected;