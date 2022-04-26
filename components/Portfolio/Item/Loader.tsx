import React from 'react';
import {useRecoilValue} from "recoil";
import {sidebarOpenAtom} from "@store/Portfolio";
import {CenteringWrapper, ItemWrapper, AnimatedLoader} from "@Portfolio/Item/Item.styles";
import { AiOutlineLoading3Quarters }  from "react-icons/ai";

const Loader = () => {
  const sidebarOpen = useRecoilValue(sidebarOpenAtom)

  return (
    <ItemWrapper sidebarOpen={sidebarOpen}>
      <CenteringWrapper>
        <AnimatedLoader>
          <AiOutlineLoading3Quarters size={60} />
        </AnimatedLoader>
      </CenteringWrapper>
    </ItemWrapper>
  );
};

export default Loader;