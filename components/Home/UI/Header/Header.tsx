import { Wrapper, HeaderContainer} from "./Header.styles";
import {FC, ReactNode} from "react";

interface Props {
  larger?: boolean,
  dark?: boolean,
  children: ReactNode
}

const Header: FC<Props> = ({larger = false, dark = false, children}) => {
  return (
    <Wrapper larger={larger} dark={dark}>
      <HeaderContainer>
        {children}
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;