
export interface FileItem {
  type: "file",
  name: string,
  onClick: () => void,
  directory: string
}

export interface FolderItem {
  type: "folder"
  name: string,
  items: FileItem[] | FolderItem[]
}