import styled, {css} from "styled-components";
import {adaptiveFont, prc} from "@helpers/mixins";

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100%;
  min-height: 100vh;
  height: 1px;
  overflow-y: auto;
  overflow-x: hidden;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    background: none;
    flex-direction: row;
    min-height: auto;
    height: 100%;
    overflow: hidden;
  }
`

interface SlideProps {
  active?: boolean
}

export const Label = styled.div`
  font-weight: 700;
  ${adaptiveFont(16, 12)};
  line-height: ${prc(24, 16)};
  letter-spacing: 0.5em;
  color: #FFFFFF;
  transition: opacity ${({theme}) => theme.animations.labelOpacity}ms ease;
  text-transform: uppercase;
`

export const Title = styled.div`
  position: relative;
  font-weight: 500;
  ${adaptiveFont(60, 24)};
  line-height: ${prc(72, 64)};
  color: #FFFFFF;
  height: 0;
  opacity: 0;
`

export const Text = styled.div`
  position: relative;
  ${adaptiveFont(16, 12)};
  line-height: ${prc(32, 16)};
  color: #FFFFFF;
  height: 0;
  opacity: 0;
`
export const Slide = styled.div<SlideProps>`
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  flex: 0 0 25%;
  transition: flex ${({theme}) => theme.animations.slideSpeedMobile}ms ease;
  
  @media(min-width: 768px) {
      flex: 0 0 ${p => prc(425, p.theme.maxWidthContainer)};
      transition: flex ${({theme}) => theme.animations.slideSpeed}ms ease;
      ${p => p.active && css`
        background: rgba(0, 0, 0, 0.4);
        flex: 0 0 ${p => prc(850, p.theme.maxWidthContainer)};
      `}
  }
  
  ${p => p.active && css`
    flex: 0 0 50%;
    cursor: default;
    background: rgba(0, 0, 0, 0.4);
    
    & ${Label} {
      opacity: 0;
      animation: Appearing ${({theme}) => theme.animations.textAppearance}ms ease 0.8s forwards;
      font-weight: bold;
      font-size: 14px;
      line-height: ${prc(24, 14)};
      letter-spacing: 0.5em;
      color: #70FFE5;

      &:not(:last-child) {
        margin-bottom: 1em;
      }
    }
    
    & ${Title} {
      animation: Appearing ${({theme}) => theme.animations.textAppearance}ms ease 0.5s forwards;

      &:not(:last-child) {
        margin-bottom: 0.375em;
      }
    }
    
    ${Text} {
      animation: Appearing ${({theme}) => theme.animations.textAppearance}ms ease 0.8s forwards;
    }
  `}

  @keyframes Appearing {
    0% {
      opacity: 0;
      left: 500%;
    }
    5% {
      height: auto;
    }
    100% {
      left: 0;
      height: auto;
      opacity: 1;
    }
  };
  @media (min-width: 768px) {
    @keyframes Appearing {
      0% {
        opacity: 0;
        top: 500%;
      }
      5% {
        height: auto;
      }
      100% {
        top: 0;
        height: auto;
        opacity: 1;
      }
    }
  }
`

export const Content = styled.div`
  max-width: 95%;
  margin: 0 auto;
  @media(min-width: 1400px) {
    max-width: ${prc(510, 850)};
  }
`