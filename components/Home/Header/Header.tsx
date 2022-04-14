import Menu from "./Menu";
import { Wrapper, Title, HeaderContainer, Back, Breadcrumb } from "./Header.styles";
import {useEffect, useState, VFC} from "react";
import {useRecoilState} from "recoil";
import { portfolioAtom, pageSlideAtom } from "@store/Home";
import { MdNavigateBefore } from "react-icons/md";

const Header: VFC = () => {
  const [larger, setLarger] = useState(true)
  const [dark, setDark] = useState(true)
  const [portfolio, setPortfolio] = useRecoilState(portfolioAtom)
  const [pageSlide] = useRecoilState(pageSlideAtom)
  const isPages = Boolean(!portfolio.open)

  useEffect(() => {
    const larger = pageSlide === 0 && isPages
    const dark = (pageSlide + 1) % 2 !== 0
    console.log(dark)
    setLarger(larger)
    setDark(dark)
  }, [pageSlide, portfolio])

  const handleGoBack = () => {
    setPortfolio(prev => ({...prev, open: 0}))
  }

  return (
    <Wrapper larger={larger} dark={dark}>
      <HeaderContainer justifyContent={isPages ? "space-between" : "flex-start"}>
        {isPages
          ?
          <>
            <Title>Web_in_One.click</Title>
            <Menu />
          </>
          :
          <>
            <Back onClick={handleGoBack}><MdNavigateBefore size="2rem" />Back</Back>
            <Breadcrumb>@PortfolioStorage/{portfolio.directory}</Breadcrumb>
          </>
        }
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;