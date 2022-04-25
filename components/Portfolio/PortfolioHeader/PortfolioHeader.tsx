import React from 'react';
import {Header, Logo} from "@Home/UI";
import { BackLink } from "@Portfolio/PortfolioHeader/PortfolioHeader.styles";
import {MdNavigateBefore} from "react-icons/md";
import Link from "next/link"

const PortfolioHeader = () => {
  return (
    <Header dark>
      <Link href="/" passHref>
        <BackLink><MdNavigateBefore size="2rem" />Back</BackLink>
      </Link>
      {/*<Breadcrumb>@PortfolioStorage/{portfolio.directory}</Breadcrumb>*/}
      <Logo />
    </Header>
  );
};

export default PortfolioHeader;