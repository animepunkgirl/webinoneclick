import React, {useState, VFC} from 'react';
import {Storage, SystemWrapper} from "../PortfolioSection/PortfolioSection.styles"
import {MdStorage} from "react-icons/md"
import {IconContext} from "react-icons";
import {homeTheme} from "@themes/Home.theme";
import Folder from "@Home/PortfolioFileSystem/Folder";
import {portfolioItems} from "@store/portfolioItems";
import {FileItem, FolderItem} from "@Types/FileSystem";
import PortfolioItem from "@Types/PortfolioItem";
import {portfolioAtom} from "@store/Home";
import {useRecoilState} from "recoil";

const FileSystem: VFC = () => {
  const [portfolio, setPortfolio] = useRecoilState(portfolioAtom)

  const portfolioItemsToFileItems = (portfolioItems: PortfolioItem[], directory: string): FileItem[] => {
    return portfolioItems.map(project => {
      const name = project.title.toLowerCase().replaceAll(' ', '-') + '.tsx'
      return {
        type: "file",
        name,
        onClick: () => setPortfolio({
        open: 1,
        item: project,
        directory: directory + '/' + name
      })
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