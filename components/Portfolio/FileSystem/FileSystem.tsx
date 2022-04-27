import React, { FC } from 'react';
import {Storage, SystemWrapper} from "./FileSystem.styles"
import {MdStorage} from "react-icons/md"
import {IconContext} from "react-icons";
import {homeTheme} from "@themes/Home.theme";
import Folder from "./Folder";
import {FileItem, FolderItem} from "@Types/FileSystem";
import { itemListAtom } from "@store/Portfolio";
import { useRecoilValue } from "recoil";
import {PortfolioItemListDTO} from "@Types/PortfolioItemListDTO";

const ItemsToFiles = (items: PortfolioItemListDTO[]): FileItem[] => {
  if(!items || !items.length)
    return []

  return items.map(item => {
    return {
      id: item.id,
      name: getName(item.title),
      type: "file"
    }
  })
}

const getName = (title: string) => title.toLowerCase().split(' ').join('-') + '.tsx'

const getPetProjects = (items: PortfolioItemListDTO[]): FileItem[] => {
  return ItemsToFiles(items.filter(item => item.isPetProject))
}

const getRealProjects = (items: PortfolioItemListDTO[]): FileItem[] => {
  return ItemsToFiles(items.filter(item => !item.isPetProject))
}

const FileSystem: FC = () => {
  const itemList = useRecoilValue(itemListAtom)
  const fileSystem: FolderItem[] = [
    {
      type: "folder",
      name: "pet-projects",
      items: getPetProjects(itemList)
    },
    {
      type: "folder",
      name: "commercial-projects",
      items: getRealProjects(itemList)
    }
  ]

  return (
    <IconContext.Provider value={{
      color: homeTheme.colors.purple,
      size: "30px"
    }}>
      <SystemWrapper>
        <Storage><MdStorage color={homeTheme.colors.red}/><p>@ PortfolioStorage</p></Storage>
        {fileSystem.map(item => {
          if(item.type === "folder") {
            return <Folder key={item.name} name={item.name} items={item.items} />
          }
        })}
      </SystemWrapper>
    </IconContext.Provider>
  );
};

export default FileSystem;