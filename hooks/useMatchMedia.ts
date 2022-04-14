import React, {useEffect, useState} from 'react';

const useMatchMedia = (breakpoint: number, mobileFirst = false) => {
  const [matches, setMatches] = useState(false)

  const eventListener = (e: any) => {
    setMatches(e.matches)
  }
  useEffect(() => {
    let mediaQuery = matchMedia(`(${mobileFirst ? "min" : "max"}-width: ${breakpoint}px)`)

    //ComponentDidMouth match
    mediaQuery.matches ? setMatches(true) : setMatches(false)

    //Add listener
    mediaQuery.addEventListener("change", eventListener)

    return () => {
      mediaQuery.removeEventListener("change", eventListener)
    }
  }, [])

  return matches
};

export default useMatchMedia;