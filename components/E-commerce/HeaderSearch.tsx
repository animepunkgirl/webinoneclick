import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import SearchIcon from "../../public/e-commerce/header/search-icon.svg";

const HeaderSearch = () => {

  //Search visible
  const search = useRef<HTMLInputElement>(null)
  const [searchVisible, setSearchVisible] = useState(false)
  useEffect(() => {
    if(search.current) {
      if(searchVisible) {
        search.current.classList.add('_active')
      } else {
        search.current.classList.remove('_active')
      }
    }
  }, [searchVisible])

  useEffect(() => {
    if(matchMedia('(min-width: 768px)').matches) {
      setSearchVisible(true)
    }
  }, [])

  return (
    <form action="#" className="nav__search">
      <input type="text" className="nav__input" ref={search}/>
      <button className="nav__search_btn btn" onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setSearchVisible(!searchVisible)
      }}>
        <Image src={SearchIcon} />
      </button>
    </form>
  );
};

export default HeaderSearch;