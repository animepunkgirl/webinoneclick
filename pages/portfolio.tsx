import { GetStaticProps, NextPage } from "next";
import Portfolio from "@Portfolio/Portfolio";
import {ThemeProvider} from "styled-components";
import {homeTheme} from "@themes/Home.theme";
import Wrapper from "@Home/Home.styles"
import PortfolioHeader from "@Portfolio/PortfolioHeader/PortfolioHeader";
import {useRecoilState} from "recoil";
import {itemListAtom} from "@store/Portfolio";
import {useEffect} from "react";
import {PortfolioItemListDTO} from "@Types/PortfolioItemListDTO";
import axios from "axios";

interface Props {
  items: PortfolioItemListDTO[]
}

const PortfolioPage: NextPage<Props> = ({ items }) => {
  const [, setItemList] = useRecoilState(itemListAtom)

  useEffect(() => {
    if(items)
      setItemList(items)
  }, [setItemList, items])

  return (
    <ThemeProvider theme={homeTheme}>
      <Wrapper>
        <PortfolioHeader />
        <Portfolio />
      </Wrapper>
    </ThemeProvider>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolio`)

  if(!response.data)
    return {
      props: {
        items: []
      }
    }

  return {
    props: {
      items: response.data
    }
  }
}

export default PortfolioPage;