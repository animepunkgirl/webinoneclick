import React, {useEffect, useState, VFC} from 'react';
import {FileItem, FolderItem} from "@Types/FileSystem";
import { Field, GapWrapper } from "./FileSystem.styles";
import {MdFolder, MdFolderOpen} from "react-icons/md";
import File from "./File";
import {Collapse} from "react-collapse";

interface Props {
  name: string,
  items: FileItem[] | FolderItem[]
}

const Folder: VFC<Props> = ({name, items}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleFolder = () => {
    setIsOpen(prev => !prev)
  }

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