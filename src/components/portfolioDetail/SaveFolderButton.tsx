import { useState } from "react";
import SavePopup from "../portfolio/SavePopup";
import { saveFolderProps } from "../../types/saveFolderTypes";

const SaveFolderButton = () => {
  const [saveFolder, setSaveFolder] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<saveFolderProps | null>(
    null
  );

  const handleSaveFolder = () => {
    setSaveFolder(!saveFolder);
  };

  const handleSelectFolder = (folder: saveFolderProps) => {
    setSelectedFolder(folder);
  };

  return (
    <div>
      <button className="flex items-center" onClick={handleSaveFolder}>
        <span>{selectedFolder ? selectedFolder.title : "UX UI 레퍼런스"}</span>
        <img src="/downArrowNeutral.svg" alt="downArrowNeutral" />
      </button>
      {saveFolder ? (
        <SavePopup
          isPopupOpen={handleSaveFolder}
          onSelectFolder={handleSelectFolder}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SaveFolderButton;
