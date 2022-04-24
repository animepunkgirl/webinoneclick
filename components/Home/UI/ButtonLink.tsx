import Button, {StyledButton, Props} from "./Button"
import Link from "next/link";
import {FC} from "react";

interface LinkProps extends Props {
  href: string
}

const ButtonLink: FC<LinkProps> = ({href, children}) => {
  return (
    <Link href={href} passHref>
      <StyledButton as={"a"}>
        {children}
      </StyledButton>
    </Link>
  )
}

export default ButtonLink;