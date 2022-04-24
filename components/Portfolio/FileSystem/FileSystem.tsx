import React, { VFC } from 'react';
import {Storage, SystemWrapper} from "./FileSystem.styles"
import {MdStorage} from "react-icons/md"
import {IconContext} from "react-icons";
import {homeTheme} from "@themes/Home.theme";
import Folder from "./Folder";
import {portfolioItems} from "@store/portfolioItems";
import {FileItem, FolderItem} from "@Types/FileSystem";
import PortfolioItem from "@Types/PortfolioItem";
import {portfolioAtom, sidebarAutoCloseAtom, sidebarOpenAtom} from "@store/Portfolio";
import {useRecoilState, useRecoilValue} from "recoil";

const FileSystem: VFC = () => {
  const [portfolio, setPortfolio] = useRecoilState(portfolioAtom)
  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarOpenAtom)
  const sidebarAutoClose = useRecoilValue(sidebarAutoCloseAtom)

  const handlePortfolioFileClick = (item: PortfolioItem, directory: string) => {
    setPortfolio({
      item,
      directory
    })
    if(sidebarAutoClose)
      setSidebarOpen(false)
  }

  const portfolioItemsToFileItems = (portfolioItems: PortfolioItem[], directory: string): FileItem[] => {
    return portfolioItems.map(project => {
      const name = project.title.toLowerCase().replaceAll(' ', '-') + '.tsx'
      return {
        type: "file",
        name,
        onClick: () => handlePortfolioFileClick(project, directory + '/' + name)
      }
    }) as FileItem[]
  }
  const getPetProjects = (directory: string): FileItem[] => {
    return portfolioItemsToFileItems(portfolioItems.filter(item => item.isPetProject), directory)
  }

  const getRealProjects = (directory: string): FileItem[] => {
    return portfolioItemsToFileItems(portfolioItems.filter(item => !item.isPetProject), directory)
  }

  const fileSystem: FolderItem[] = [
    {
      type: "folder",
      name: "pet-projects",
      items: getPetProjects("pet-projects")
    },
    {
      type: "folder",
      name: "commercial-projects",
      items: getRealProjects("commercial-projects")
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