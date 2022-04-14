import React, {useEffect, useState, VFC} from 'react';
import { MdFilePresent } from "react-icons/md";
import { Field } from "../PortfolioSection/PortfolioSection.styles";
import {useRecoilValue} from "recoil";
import {portfolioAtom} from "@store/Home";

interface Props {
  name: string,
  handleClick: () => void,
}

const File: VFC<Props> = ({name, handleClick}) => {
  const [isOpen, setIsOpen] = useState(false)
  const portfolio = useRecoilValue(portfolioAtom)
  const toggleFolder = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    if(!portfolio.open)
      return

    const isOpenInPath = portfolio.directory.search(name) !== -1
    setIsOpen(isOpenInPath)
  }, [portfolio.open, portfolio.directory])

  return (
    <Field onClick={handleClick} isOpen={isOpen}>
      <MdFilePresent size="27px" />
      <p>{name}</p>
    </Field>
  );
};

export default File;