import React, { VFC } from 'react';
import {Storage, SystemWrapper} from "./FileSystem.styles"
import {MdStorage} from "react-icons/md"
import {IconContext} from "react-icons";
import {homeTheme} from "@themes/Home.theme";
import Folder from "./Folder";
import {portfolioItems} from "@store/portfolioItems";
import {FileItem, FolderItem} from "@Types/FileSystem";
import PortfolioItem from "@Types/PortfolioItem";
import { portfolioItemAtom, sidebarAutoCloseAtom, sidebarOpenAtom } from "@store/Portfolio";
import {useRecoilState, useRecoilValue} from "recoil";

const FileSystem: VFC = () => {
  const [, setPortfolioItem] = useRecoilState(portfolioItemAtom)
  const [, setSidebarOpen] = useRecoilState(sidebarOpenAtom)
  const sidebarAutoClose = useRecoilValue(sidebarAutoCloseAtom)

  const handlePortfolioFileClick = (item: PortfolioItem) => {
    setPortfolioItem(item)
    if(sidebarAutoClose)
      setSidebarOpen(false)
  }

  const portfolioItemsToFileItems = (portfolioItems: PortfolioItem[]): FileItem[] => {
    if(!portfolioItems || !portfolioItems.length)
      return []

    return portfolioItems.map(project => {
      const name = project.title.toLowerCase().replaceAll(' ', '-') + '.tsx'
      return {
        name,
        type: "file",
        onClick: () => handlePortfolioFileClick(project)
      }
    }) as FileItem[]
  }

  const getPetProjects = (): FileItem[] => {
    return portfolioItemsToFileItems(portfolioItems.filter(item => item.isPetProject))
  }

  const getRealProjects = (): FileItem[] => {
    return portfolioItemsToFileItems(portfolioItems.filter(item => !item.isPetProject))
  }

  const fileSystem: FolderItem[] = [
    {
      type: "folder",
      name: "pet-projects",
      items: getPetProjects()
    },
    {
      type: "folder",
      name: "commercial-projects",
      items: getRealProjects()
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