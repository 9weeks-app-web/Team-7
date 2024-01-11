import { useState } from "react";

const POPULAR_TOOLS = [
  { name: "Adobe Photoshop", image: "/photoshopIcon.svg" },
  { name: "Adobe Illustrator", image: "/illustIcon.svg" },
  { name: "Figma", image: "/figmaIcon.svg" },
  { name: "Adobe After Efects", image: "/afterEfectsIcon.svg" },
  { name: "Blender", image: "/blenderIcon.svg" },
];

const UsedTool = ({
  handleFilter,
}: {
  handleFilter: (filter: string) => void;
}) => {
  const [selectedToolsIndex, setSelectedToolsIndex] = useState<string>("");

  const handleColorClick = (index: string) => {
    setSelectedToolsIndex(index);
    handleFilter(index);
  };

  return (
    <div>
      <div className="text-2 text-neutral-90 px-[14px]">사용 툴 검색</div>
      <div className="relative mt-[16px]">
        <input
          className="caption w-[260px] h-[40px] pl-[38px] pr-[14px] py-[7px] border border-[#D9D9D9] rounded-md"
          type="text"
          placeholder="포트폴리오에 사용된 툴을 검색해보세요"
          defaultValue={selectedToolsIndex}
        />
        <div className="absolute top-0 translate-x-[14px] translate-y-[13px]">
          <img src="/toolSearch.svg" alt="search" />
        </div>
      </div>
      <div className="text-2 my-[20px] px-[14px] py-[7px]">인기 있는 툴</div>
      <div>
        {POPULAR_TOOLS.map((tool) => (
          <button
            key={tool.name}
            className="flex items-center px-[14px] py-[6px]"
            onClick={() => handleColorClick(tool.name)}
          >
            <div className="w-s-2 h-s2">
              <img src={tool.image} alt="" />
            </div>
            <span className="caption text-neutral-60 ml-[10px]">
              {tool.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UsedTool;
