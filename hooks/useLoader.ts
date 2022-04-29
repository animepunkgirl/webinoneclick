import NProgress from "nprogress";
import {useState} from "react";

interface Loader {
  start: () => void,
  finish: () => void
}

const useLoader = (): [boolean, Loader] => {
  const [isLoading, setIsLoading] = useState(false)

  const start = () => {
    setIsLoading(true)
    NProgress.start()
    return
  }

  const finish = () => {
    setIsLoading(false)
    NProgress.done()
    return
  }

  return [isLoading, {
    start,
    finish
  }]
}

export default useLoader