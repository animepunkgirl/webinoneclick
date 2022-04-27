import React, { FC } from 'react';
import { MdFilePresent } from "react-icons/md";
import { Field } from "./FileSystem.styles";
import {useRecoilState, useRecoilValue} from "recoil";
import {currentItemAtom, sidebarAutoCloseAtom, sidebarOpenAtom} from "@store/Portfolio";

interface Props {
  id: number,
  name: string,
}

const File: FC<Props> = ({id, name}) => {
  const [currentItem, setCurrentItem] = useRecoilState(currentItemAtom)
  const [, setSidebarOpen] = useRecoilState(sidebarOpenAtom)
  const sidebarAutoClose = useRecoilValue(sidebarAutoCloseAtom)

  const isOpen = currentItem === id;

  const handleFileClick = () => {
    setCurrentItem(id)
    if(sidebarAutoClose)
      setSidebarOpen(false)
  }

  return (
    <Field
      isOpen={isOpen}
      onClick={() => handleFileClick()}
    >
      <MdFilePresent size="27px" />
      <p>{name}</p>
    </Field>
  );
};

export default File;