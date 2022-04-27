import NProgress from "nprogress";

const useLoader = () => {
  const start = () => {
    return NProgress.start()
  }
  const finish = () => {
    return NProgress.done()
  }

  return {
    start, finish
  }
}

export default useLoader