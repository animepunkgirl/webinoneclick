// import {useEffect} from "react";
// import {useRecoilState} from "recoil";
// import {pageScrollingState} from "../store/Home/atoms/pageScrolling";
// import pageSlideState from "../store/Home/atoms/pageSlide";
//
//
// const useScrollableSection = (section: HTMLDivElement | null, sectionId: number) => {
//   const [pageSlide] = useRecoilState(pageSlideState)
//   const [pageScrolling, setPageScrolling] = useRecoilState(pageScrollingState)
//
//   const scrollListener = () => {
//     if(section) {
//       const isBeginning = section.scrollTop === 0;
//       console.log(section.offsetHeight, section.scrollTop, section.scrollHe)
//       const isEnd = section.offsetHeight + section.scrollTop >= section.scrollHeight
//       if(isBeginning)
//         return setPageScrolling(prev => ({...prev, position: "top"}))
//       if(isEnd)
//         return setPageScrolling(prev => ({...prev, position: "bottom"}))
//
//       return setPageScrolling(prev => ({...prev, position: "middle"}))
//     }
//   }
//
//   useEffect(() => {
//     setPageScrolling(prev => ({...prev, insideContainer: pageSlide === sectionId}))
//   }, [pageSlide])
//
//   useEffect(() => {
//     if(section) {
//       section.addEventListener("scroll", scrollListener)
//       return () => {
//         section.removeEventListener("scroll", scrollListener)
//       }
//     }
//   }, [section])
// }
//
// export default useScrollableSection;