import styled from "styled-components";

export const ThemeSettings = styled.div`
  font-family: 'Roboto', sans-serif;
  background: url('/pet-slider/bg3.png') no-repeat center center fixed;
  background-size: cover;
`

export const Wrapper = styled.div`
  background: rgba(0,0,0, 0.7);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

export const Container = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    top: 50%;
    transform: translateY(-50%);
  }
  @media (min-width: 1500px) {
    max-width: 90vw;
  }
  position: relative;
`
