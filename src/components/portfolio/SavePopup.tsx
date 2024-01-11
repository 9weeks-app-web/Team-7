import { MOCK_SAVE_FOLDER } from "../../mocks/mockSaveFolder";
import { SavePopupProps, saveFolderProps } from "../../types/saveFolderTypes";

const SavePopup: React.FC<SavePopupProps> = ({
  isPopupOpen,
  onSelectFolder,
}) => {
  const saveFolderData: saveFolderProps[] = MOCK_SAVE_FOLDER;
  const handleFolderClick = (selectedFolder: saveFolderProps) => {
    onSelectFolder(selectedFolder);
    isPopupOpen(false);
    console.log(onSelectFolder);
  };

  return (
    <div className="absolute top-[13rem] right-[2rem] w-[20rem] h-[20rem] shadow-sm bg-white p-[1.5rem] border-[1px] border-solid border-[#e6e6e6] rounded-xl flex flex-col z-20">
      <span className="text-center text-1 text-xl text-[#1a1a1a] mb-[0.5rem]">
        저장
      </span>
      <div>
        <span className="caption text-xs text-neutral-90">모든 폴더</span>
        <div className="mt-[1rem] h-[13rem] flex flex-col gap-y-3 overflow-y-scroll">
          {saveFolderData.map((saveFolder, index) => (
            <div
              key={index}
              className="w-full flex gap-x-4 items-center rounded-md hover:bg-[#f5f8ff]"
              onClick={() => handleFolderClick(saveFolder)}
            >
              <img
                className="w-[3.125rem] h-[3.125rem] rounded-md"
                src={`/${saveFolder.thumnail}.png`}
                alt={`${saveFolder.thumnail}`}
              />
              <span className="text-1 text-sm text-neutral-90">
                {saveFolder.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavePopup;
