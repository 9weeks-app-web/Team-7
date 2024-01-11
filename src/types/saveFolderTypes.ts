export interface saveFolderProps {
  thumnail: string;
  title: string;
}

export interface SavePopupProps {
  isPopupOpen: (isOpen: boolean) => void;
  onSelectFolder: (folder: saveFolderProps) => void;
}
