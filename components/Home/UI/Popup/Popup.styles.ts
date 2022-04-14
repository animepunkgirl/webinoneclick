import styled, {css} from "styled-components";
import { motion } from "framer-motion";
import Text from "../Text";

export const Fullscreen = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 100;
  overflow-y: auto;
  overflow-x: hidden;
`

export const Background = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
`

export const Modal = styled(motion.section)`
  position: relative;
  background-color: ${p => p.theme.colors.lightBg};
  min-width: 90vw;
  @media (min-width: 500px) {
      min-width: 500px;
  }
  color: ${p => p.theme.colors.white};
  max-width: 800px;
  padding: 20px !important;
`

export const Title = styled(Text)`
  margin-top: 5px;
  display: inline-block;
  text-transform: initial;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background: ${p => p.theme.colors.purple};
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: .25s linear;
  }

  &:hover::after {
    visibility: visible;
    transform: scaleX(1);
  }
`

export const CloseButton = styled.div`
  position: absolute;
  right: 5px;
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  top: 3px;
  color: ${p => p.theme.colors.red};
  font-size: 60px;
  transition: transform 0.3s ease;
  transform: scale(1);
  &:hover {
    transform: scale(1.2);
  }
`

interface ContentProps {
  big: boolean
}

export const Content = styled.div<ContentProps>`
  text-align: justify;
  margin: 20px 0;
  
  ${p => p.big && css`font-size: 1.5em;`}


  p {
    margin-bottom: 10px;
  }
  ul {
    //margin-top: 5px;
    text-align: left;
    font-size: 20px;
    font-weight: 300;
    padding-left: 5px;
    list-style: '-' inside;
    margin-bottom: 10px;
    li::marker {
    }
  }
  a {
    display: flex;
    justify-content: center;
    @media (min-width: 425px) {
      justify-content: flex-end;
    }
    color: ${p => p.theme.colors.purple};
    text-decoration: underline;
    &:hover {
      font-weight: 600;
    }
  }
`