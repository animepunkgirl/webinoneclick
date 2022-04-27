import React, {FC, useEffect, useState, useTransition} from 'react';
import { useRecoilValue } from "recoil";
import {currentItemAtom} from "@store/Portfolio";
import FileUnselected from "@Portfolio/Content/FileUnselected";
import PortfolioItem from "@Types/PortfolioItem";
import axios from "axios";
import Item from "@Portfolio/Content/Item";

const Content: FC = () => {
  const itemId = useRecoilValue(currentItemAtom)
  const [portfolioItem, setPortfolioItem] = useState<PortfolioItem | null>(null)
  const [isPending, startTransition] = useTransition()

  const fetchItemInfo = async () => {
    const response = await axios.get<PortfolioItem>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolio/${itemId}`)
    setPortfolioItem(response.data)
  }

  //Fetch file if needed
  useEffect(() => {
    if(typeof itemId !== "number")
      return;

    startTransition(() => {
      fetchItemInfo()
    })
  }, [itemId])

  if(typeof itemId !== "number" || !portfolioItem)
    return <FileUnselected />

  return <Item item={portfolioItem} isLoading={isPending} />
};

export default Content;