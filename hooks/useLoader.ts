import NProgress from "nprogress";
import {useCallback, useState} from "react";

const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false)

  const start = useCallback(() => {
    setIsLoading(true)
    return NProgress.start()
  }, [NProgress.start, setIsLoading])

  const finish = useCallback(() => {
    NProgress.done()
    return setIsLoading(false)
  }, [NProgress.done, setIsLoading])

  return {
    start, finish, isLoading
  }
}

export default useLoader