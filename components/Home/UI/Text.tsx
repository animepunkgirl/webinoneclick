import {homeTheme, Typography} from "../../../themes/Home.theme";
import styled, {css} from "styled-components";
import React, {FC} from "react";
import {adaptiveFont} from "../../../helpers/mixins";

interface TypographyProps {
  $size?: keyof typeof homeTheme["fontSize"]
  $template?: keyof typeof Typography | ""
  $color?: keyof typeof homeTheme["colors"]
  $uppercase?: boolean
  $adaptiveFont?: [number, number] //In pixels
  $lineHeight?: number
}

export interface TextProps {
  type?: "span" | "h1" | "h2" | "p" | "a" | "strong",
  children: React.ReactNode,
  href?: string,
  size?: TypographyProps["$size"],
  template?: TypographyProps["$template"],
  color?: TypographyProps["$color"],
  uppercase?: TypographyProps["$uppercase"],
  adaptiveFont?: TypographyProps["$adaptiveFont"],
  lineHeight?: TypographyProps["$lineHeight"],
}

const CommonSettings = css<TypographyProps>`
  ${p => {
    if(p.$adaptiveFont)
      return adaptiveFont(p.$adaptiveFont[0], p.$adaptiveFont[1])
    
    return p.$size ? css`font-size: ${p.theme.fontSize[p.$size]}rem;` : css`font-size: ${p.theme.fontSize.md}rem;`
  }}
  line-height: ${p => p.$lineHeight ? p.$lineHeight*100 : 100}%;
  ${p => p.$template && Typography[p.$template]}
  ${p => p.$color && css`color: ${p.theme.colors[p.$color]};`}
  ${p => p.$uppercase && css`text-transform: uppercase;`}
`
const Span = styled.span<TypographyProps>`
  ${CommonSettings}
`

const H1 = styled.h1<TypographyProps>`
  ${CommonSettings}
`

const H2 = styled.h2<TypographyProps>`
  ${CommonSettings}
`

const P = styled.p<TypographyProps>`

  ${CommonSettings}
`

const A = styled.a<TypographyProps>`
  cursor: pointer;
  ${CommonSettings}
`

const Strong=styled.strong<TypographyProps>`
  ${CommonSettings}
`

const Text: FC<TextProps> = (props) => {
  const {type = "p", children} = props
  const correctProps: TypographyProps = {
    $color: props.color,
    $adaptiveFont: props.adaptiveFont,
    $template: props.template,
    $lineHeight : props.lineHeight,
    $uppercase: props.uppercase,
    $size: props.size,
  }

  if(!props.template && !props.color)
    correctProps.$color = "white"

  if(type === "span")
    return <Span {...correctProps}>{children}</Span>

  if(type === "h1")
    return <H1 {...correctProps}>{children}</H1>

  if(type === "h2")
    return <H2 {...correctProps}>{children}</H2>

  if(type === "a")
    return <A {...correctProps} href={props.href} target="_blank" rel="noreferrer noopener">{children}</A>

  if(type === "strong")
    return <Strong {...correctProps}>{children}</Strong>

  if(type === "p")
    return <P {...correctProps}>{children}</P>

  return <Span {...correctProps}>{children}</Span>
}

export default Text;