
export interface FileItem {
  id: number,
  type: "file",
  name: string,
}

export interface FolderItem {
  type: "folder"
  name: string,
  items: FileItem[] | FolderItem[]
}