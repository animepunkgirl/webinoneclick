import {useEffect, useState} from 'react';

type UnitsType = "em" | "px" | "rem" | "vw" | "vh" | "vmin" | "vmax"

interface MatchMediaParams {
  size: number,
  units?: UnitsType,
  mobileFirst?: boolean
}

const oneQueryBuilder = (params: MatchMediaParams, isWidth: boolean = false) => {
  if(typeof params.mobileFirst === "undefined")
    params.mobileFirst = true

  const minmax = params.mobileFirst ? "min" : "max"
  const direction = isWidth ? "width" : "height"
  const units = params.units ?? "em";
  return `(${minmax}-${direction}: ${params.size}${units})`
}

const queryBuilder = (widthParams?: MatchMediaParams, heightParams?: MatchMediaParams) => {
  if(widthParams && heightParams) {
    const widthQuery = oneQueryBuilder(widthParams, true)
    const heightQuery = oneQueryBuilder(heightParams, false)
    return `${widthQuery} and ${heightQuery}`
  }

  if(widthParams)
    return `${oneQueryBuilder(widthParams, true)}`

  return `${oneQueryBuilder(heightParams!, true)}`
}

const useMatchMedia = (width?: MatchMediaParams, height?: MatchMediaParams) => {
  const [matches, setMatches] = useState(false)

  const eventListener = (e: any) => {
    setMatches(e.matches)
  }

  useEffect(() => {
    let mediaQuery = matchMedia(queryBuilder(width, height))

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