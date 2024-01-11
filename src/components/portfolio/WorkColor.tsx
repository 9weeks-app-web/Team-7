import { useState } from "react";

const colors = [
  { name: "블랙", hex: "bg-[#000000]", stroke: "", usageCount: "17" },
  {
    name: "그레이",
    hex: "bg-[#CCCCCC]",
    stroke: "border-[#B3B3B3]",
    usageCount: "11",
  },
  {
    name: "화이트",
    hex: "bg-[#FFFFFF]",
    stroke: "border-[#CCCCCC]",
    usageCount: "9.8",
  },
  {
    name: "레드",
    hex: "bg-[#FD3535]",
    stroke: "border-[#CB4E4E]",
    usageCount: "3.2",
  },
  {
    name: "그린",
    hex: "bg-[#2BC700]",
    stroke: "border-[#40AC37]",
    usageCount: "6.8",
  },
  {
    name: "블루",
    hex: "bg-[#3B7CF4]",
    stroke: "border-[#3B6BC5]",
    usageCount: "4.6",
  },
  {
    name: "옐로우",
    hex: "bg-[#FFDF70]",
    stroke: "border-[#F0C65B]",
    usageCount: "1.2",
  },
  {
    name: "베이지",
    hex: "bg-[#FAE8D2]",
    stroke: "border-[#D5C4B0]",
    usageCount: "3.4",
  },
  {
    name: "퍼플",
    hex: "bg-[#9E52FF]",
    stroke: "border-[#8243D2]",
    usageCount: "2.9",
  },
  {
    name: "오렌지",
    hex: "bg-[#FF9F2D]",
    stroke: "border-[#E38F2B]",
    usageCount: "4",
  },
  {
    name: "네이비",
    hex: "bg-[#234586]",
    stroke: "border-[#29457B]",
    usageCount: "2.6",
  },
  {
    name: "핑크",
    hex: "bg-[#FFC1DF]",
    stroke: "border-[#F2B0D0]",
    usageCount: "4",
  },
];

const WorkColor = ({
  handleFilter,
}: {
  handleFilter: (filter: string) => void;
}) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState<string>("");

  const handleColorClick = (index: string) => {
    setSelectedColorIndex(index);
    handleFilter(index);
  };

  return (
    <div className="w-[351px] grid grid-cols-2 gap-[9px]">
      {colors.map((color) => (
        <button
          key={color.name}
          className={`${
            selectedColorIndex === color.name ? "bg-[#F5F8FF]" : "bg-white"
          } bg-[#F5F8FF] flex items-center w-[172px] h-[53px] border border-[neutral-10] rounded-[6px] p-[10px]`}
          onClick={() => handleColorClick(color.name)}
        >
          <span
            className={`${color.hex} ${color.stroke}
            } w-8 h-8 rounded-full border`}
          ></span>
          <span className="ml-[14px]">{color.name}</span>
          <span className="ml-[4px] text-neutral-30 caption">
            {color.usageCount + "k"}
          </span>
        </button>
      ))}
    </div>
  );
};

export default WorkColor;
