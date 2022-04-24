import React, {VFC} from 'react';
import styled from "styled-components";
import {Typography} from "@themes/Home.theme";
import {prc} from "@helpers/mixins";

const StyledLogo = styled.h1`
    ${Typography.commented}
    cursor: pointer;
    z-index: 5;
    color: ${p => p.theme.colors.white};
    padding: 5px 0;
    line-height: ${prc(30,28)};
    text-transform: uppercase;
    font-weight: 700;
    transition: font-size 0.3s ease;
`

const Logo: VFC = () => {
  return (
    <StyledLogo>Web_in_One.click</StyledLogo>
  );
};

export default Logo;