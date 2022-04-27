import React, {FC, useEffect, useState, useTransition} from 'react';
import { useRecoilState } from "recoil";
import {currentItemAtom} from "@store/Portfolio";
import FileUnselected from "@Portfolio/Content/FileUnselected";
import PortfolioItem from "@Types/PortfolioItem";
import axios from "axios";
import Item from "@Portfolio/Content/Item";
import useLoader from "@hooks/useLoader";

const Content: FC = () => {
  const [itemId, setItemId] = useRecoilState(currentItemAtom)
  const [portfolioItem, setPortfolioItem] = useState<PortfolioItem | null>(null)
  const [isPending, startTransition] = useTransition()
  const loader = useLoader()

  //Unselect file on page opening
  useEffect(() => {
    setItemId(null)
  }, [setItemId])

  const fetchItemInfo = async () => {
    loader.start()
    const response = await axios.get<PortfolioItem>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolio/${itemId}`)
    setPortfolioItem(response.data)
    loader.finish()
  }

  //Fetch file if needed
  useEffect(() => {
    if(typeof itemId !== "number" || portfolioItem?.id === itemId)
      return;

    startTransition(() => {
      fetchItemInfo()
    })
  }, [itemId, portfolioItem?.id, fetchItemInfo])

  if(typeof itemId !== "number" || !portfolioItem)
    return <FileUnselected />

  return <Item item={portfolioItem} isPlaceholder={isPending} />
};

export default Content;