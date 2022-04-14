import { useEffect, useMemo, useState } from "react";
import * as portals from "react-reverse-portal";

const useDynamicAdaptive = (wrapperClassName: string, breakpoint: number, mobileFirst = false) => {
  const [shouldRenderTable, setShouldRenderTable] = useState(false);

  useEffect(() => {
    setShouldRenderTable(true);
  }, []);

  const portalNode = useMemo(() => {
    if (!shouldRenderTable) {
      return null
    }

    return portals.createHtmlPortalNode({
      attributes: {
        class: wrapperClassName
      }
    });
  }, [shouldRenderTable]);


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

  return {
      portalNode,
      Wrapper: portals.InPortal,
      matchesOut: matches ? portalNode && <portals.OutPortal node={portalNode} /> : <></>,
      defaultOut: matches ? <></> : portalNode && <portals.OutPortal node={portalNode} />
  }
};

export default useDynamicAdaptive;