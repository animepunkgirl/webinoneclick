import React, {useEffect, useState} from 'react';

type UnitsType = "em" | "px" | "rem" | "vw" | "vh" | "vmin" | "vmax"

interface MatchMediaParams {
  size: number,
  units?: UnitsType,
  mobileFirst?: boolean
}

const littleQueryBuilder = (params: MatchMediaParams, isWidth: boolean = false) => {
  const minmax = params.mobileFirst ? "min" : "max"
  const direction = isWidth ? "width" : "height"
  const units = params.units ?? "em";
  return `(${minmax}-${direction}: ${params.size}${units})`
}

const queryBuilder = (widthParams?: MatchMediaParams, heightParams?: MatchMediaParams) => {
  if(widthParams && heightParams) {
    const widthQuery = littleQueryBuilder(widthParams, true)
    const heightQuery = littleQueryBuilder(heightParams, false)
    return `${widthQuery} and ${heightQuery}`
  }

  if(widthParams)
    return `${littleQueryBuilder(widthParams, true)}`

  return `${littleQueryBuilder(heightParams!, true)}`
}

const useMatchMedia = (width?: MatchMediaParams, height?: MatchMediaParams) => {
  const [matches, setMatches] = useState(false)

  const eventListener = (e: any) => {
    setMatches(e.matches)
  }

  useEffect(() => {
    console.log(queryBuilder(width, height))
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