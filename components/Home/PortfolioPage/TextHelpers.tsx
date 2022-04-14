import { Text } from "@Home/UI";
import React, {FC} from "react";

const Link:FC<{ href: string }> = ({href, children}) => {
  return (<Text type="a" href={href} color="blue">[{children}]</Text>)
}

const Strong:FC = ({children}) => {
  return (<Text type="strong" color="purple">{children}</Text>)
}

export default {
  a: Link,
  strong: Strong
}