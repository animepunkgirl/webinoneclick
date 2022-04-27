import React from 'react';
import {CenteringWrapper, AnimatedLoader} from "@Portfolio/Content/Item.styles";
import { AiOutlineLoading3Quarters }  from "react-icons/ai";

const Loader = () => {

  return (
      <CenteringWrapper>
        <AnimatedLoader>
          <AiOutlineLoading3Quarters size={60} />
        </AnimatedLoader>
      </CenteringWrapper>
  );
};

export default Loader;