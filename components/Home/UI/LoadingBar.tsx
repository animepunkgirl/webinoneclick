import React from 'react';
import NProgress from 'nprogress';
import Router from "next/router";

import NProgressStyles from "../../../styles/NProgressStyles";

const LoadingBar = () => {
  NProgress.configure({
    trickle: true,
    trickleSpeed: 350
  });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });

  return <NProgressStyles />
}

export default LoadingBar;