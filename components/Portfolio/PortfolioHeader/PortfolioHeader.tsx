import React from 'react';
import {Header, Logo} from "@Home/UI";
import { BackLink, SidebarToggle } from "@Portfolio/PortfolioHeader/PortfolioHeader.styles";
import {MdFilePresent, MdNavigateBefore} from "react-icons/md";
import Link from "next/link"
import {useRecoilState} from "recoil";
import {sidebarOpenAtom} from "@store/Portfolio";
import {homeTheme} from "@themes/Home.theme";

const PortfolioHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarOpenAtom)

  return (
    <Header dark>
      <Link href="/" passHref>
        <BackLink><MdNavigateBefore size="2rem" />Back</BackLink>
      </Link>
      {/*<Breadcrumb>@PortfolioStorage/{portfolio.directory}</Breadcrumb>*/}
      <Logo />
      <SidebarToggle
        onClick={() => setSidebarOpen(prev => !prev)}
        open={sidebarOpen}
      >
        <MdFilePresent size="2.2rem" color={homeTheme.colors.purple} />
      </SidebarToggle>
    </Header>
  );
};

export default PortfolioHeader;