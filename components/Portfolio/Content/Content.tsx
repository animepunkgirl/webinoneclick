import React, {FC, useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import { ContentWrapper } from "../Portfolio.styles";
import {currentItemAtom, sidebarOpenAtom} from "@store/Portfolio";
import FileUnselected from "@Portfolio/Content/FileUnselected";
import PortfolioItem from "@Types/PortfolioItem";
import axios from "axios";
import Item from "@Portfolio/Content/Item";

import useLoader from "@hooks/useLoader";

const fetchItemInfo = async (id: number) => {
  const response = await axios.get<PortfolioItem>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolio/${id}`)
  return response.data
}

const Content: FC = () => {
  const sidebarOpen = useRecoilValue(sidebarOpenAtom)
  const [itemId, setItemId] = useRecoilState(currentItemAtom)
  const [portfolioItem, setPortfolioItem] = useState<PortfolioItem | null>(null)

  const [isLoading, loader] = useLoader()


  useEffect(() => {
    if(typeof itemId !== "number")
      return;

    loader.start();

    (async () => {
      const item = await fetchItemInfo(itemId)
      setPortfolioItem(item)
    })()

    loader.finish();

    return () => {
      setItemId(null)
    }

    //eslint-disable-next-line
  }, [itemId, setItemId])


  return (
    <ContentWrapper sidebarOpen={sidebarOpen} style={{ opacity: isLoading ? 0.2 : 1 }}>
      {!portfolioItem ? <FileUnselected /> : <Item item={portfolioItem} />}
    </ContentWrapper>
  )
};

export default Content;