import { Text } from "@Home/UI";
import React, {FC, ReactNode} from "react";

interface LinkProps {
  href: string,
  children: ReactNode
}

const Link:FC<LinkProps> = ({href, children}) => {
  return (<Text type="a" href={href} color="blue">[{children}]</Text>)
}

interface StrongProps {
  children: ReactNode
}

const Strong:FC<StrongProps> = ({children}) => {
  return (<Text type="strong" color="purple">{children}</Text>)
}

const TextHelpers = {
  a: Link,
  strong: Strong
}

export default TextHelpers;