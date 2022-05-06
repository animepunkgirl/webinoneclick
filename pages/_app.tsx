import type { AppProps } from 'next/app'
import { Destyle } from "../styles/Destyle"
import { RecoilRoot } from "recoil";
import Head from "next/head";
const LoadingBar = dynamic(() => import("@Home/UI/LoadingBar"), { ssr : false });

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/keyboard"
import dynamic from "next/dynamic";

console.log('%cHi, I don\'t know what you forgot in my console, but if you want to look at the project code, here is the link: https://github.com/animepunkgirl/webinoneclick', "font-weight: bold; font-size: 1.15em")

function MyApp({ Component, pageProps }: AppProps) {

  return (
    // @ts-ignore
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WebInOne.Click</title>
      </Head>
      <Destyle />
      <LoadingBar />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
