import type { AppProps } from 'next/app'
import { Destyle } from "../styles/Destyle"
import { RecoilRoot } from "recoil";
import Head from "next/head";

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/keyboard"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WebInOne.Click</title>
      </Head>
      <Destyle />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
