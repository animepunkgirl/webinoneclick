import { Wrapper, HeaderContainer} from "./Header.styles";
import {FC} from "react";

interface Props {
  larger?: boolean,
  dark?: boolean
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