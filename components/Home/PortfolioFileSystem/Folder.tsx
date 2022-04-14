import React, {useEffect, useState, VFC} from 'react';
import {FileItem, FolderItem} from "@Types/FileSystem";
import { Field, GapWrapper } from "../PortfolioSection/PortfolioSection.styles";
import {MdFolder, MdFolderOpen} from "react-icons/md";
import File from "@Home/PortfolioFileSystem/File";
import {Collapse} from "react-collapse";
import {useRecoilValue} from "recoil";
import {portfolioAtom} from "@store/Home";

interface Props {
  name: string,
  items: FileItem[] | FolderItem[]
}

const Folder: VFC<Props> = ({name, items}) => {
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
  }, [name, portfolio])

  return (
    <GapWrapper>
      <Field onClick={toggleFolder} isOpen={isOpen}>{isOpen ? <MdFolderOpen /> : <MdFolder />}{name}</Field>
      <Collapse isOpened={isOpen}>
        <GapWrapper>
          {items.map(item => {
            if(item.type === "file")
              return <File name={item.name} key={item.name} handleClick={item.onClick} />

            return <Folder name={item.name} items={item.items} key={item.name} />
          })}
        </GapWrapper>
      </Collapse>
    </GapWrapper>
  );
};

export default Folder;