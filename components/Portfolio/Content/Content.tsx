import React, {FC, useCallback, useEffect, useState, useTransition} from 'react';
import { useRecoilState } from "recoil";
import {currentItemAtom} from "@store/Portfolio";
import FileUnselected from "@Portfolio/Content/FileUnselected";
import PortfolioItem from "@Types/PortfolioItem";
import Loader from "@Portfolio/Content/Loader";
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

  const fetchItem = useCallback(() => {
    startTransition(() => {
      const fetchFile = async () => {
        const response = await axios.get<PortfolioItem>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolio/${itemId}`)

        setPortfolioItem(response.data)
      }
      fetchFile()
    })
  }, [itemId])

  //Fetch file if needed
  useEffect(() => {
    if(typeof itemId !== "number" || portfolioItem?.id === itemId)
      return;

    loader.start()
    fetchItem()
    loader.finish()
  }, [itemId, portfolioItem?.id, fetchItem, loader])

  if(typeof itemId !== "number" || !portfolioItem)
    return <FileUnselected />

  return <Item item={portfolioItem} isPlaceholder={isPending} />
};

export default Content;