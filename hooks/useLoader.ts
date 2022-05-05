import NProgress from "nprogress";

const useLoader = () => {
  const start = () => {
    NProgress.start()
    return
  }

  const finish = () => {
    NProgress.done()
    return
  }

  return {
    start, finish
  }
}

export default useLoader