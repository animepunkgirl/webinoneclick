import React, {FC, useCallback, useEffect, useMemo, useState, useTransition} from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import { ContentWrapper } from "../Portfolio.styles";
import {currentItemAtom, sidebarOpenAtom} from "@store/Portfolio";
import FileUnselected from "@Portfolio/Content/FileUnselected";
import PortfolioItem from "@Types/PortfolioItem";
import axios from "axios";
import Item from "@Portfolio/Content/Item";

import useLoader from "@hooks/useLoader";

const Content: FC = () => {
  const sidebarOpen = useRecoilValue(sidebarOpenAtom)
  const [itemId, setItemId] = useRecoilState(currentItemAtom)
  const [portfolioItem, setPortfolioItem] = useState<PortfolioItem | null>(null)

  const loader = useLoader()

  const fetchItemInfo = useCallback(async () => {
    loader.start()
    const response = await axios.get<PortfolioItem>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolio/${itemId}`)
    setPortfolioItem(response.data)
    return loader.finish()
  }, [itemId])

  //Fetch file if needed
  useEffect(() => {
    if(typeof itemId !== "number")
      return;

    fetchItemInfo()

    return () => {
      setItemId(null)
    }
  }, [itemId, fetchItemInfo, setItemId])


  return (
    <ContentWrapper sidebarOpen={sidebarOpen} style={{ opacity: loader.isLoading ? 0.2 : 1 }}>
      {!portfolioItem ? <FileUnselected /> : <Item item={portfolioItem} />}
    </ContentWrapper>
  )
};

export default Content;