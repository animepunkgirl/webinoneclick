import React from 'react';
import NProgress from 'nprogress';
import Router from "next/router";

import NProgressStyles from "../../../styles/NProgressStyles";

const LoadingBar = () => {
  NProgress.configure({ showSpinner: true });

  Router.events.on("routeChangeStart", () => {
    console.log('onRouteChangeStart triggered');
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    console.log('onRouteChangeComplete triggered');
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => {
    console.log('onRouteChangeError triggered');
    NProgress.done();
  });

  return <NProgressStyles />
}

export default LoadingBar;