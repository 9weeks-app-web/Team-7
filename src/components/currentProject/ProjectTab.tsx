import { useTab, Tab } from "../design/Tabs";
import Projects from "./Projects";
import { POPULAR_PROJECTS, NEW_PROJECTS } from "../../mocks/mockProject";

const ProjectTab: React.FC = () => {
  const tabs: Tab[] = [
    {
      id: "1",
      label: "인기 프로젝트",
      icon: (
        <img
          className="max-w-[24px]"
          src="/heartFillBlue.svg"
          alt="tab-active-icon"
        />
      ),
      content: <Projects projects={POPULAR_PROJECTS} />,
    },
    {
      id: "2",
      label: "신규 프로젝트",
      icon: (
        <img
          className="max-w-[24px]"
          src="/heartFillYellow.svg"
          alt="tab-active-icon"
        />
      ),
      content: <Projects projects={NEW_PROJECTS} />,
    },
  ];

  const { activeTab, handleTabChange } = useTab(tabs[0]);
  return (
    <div>
      <div className="flex">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabChange(tab)}
            className={`flex justify-center items-center w-[216px] h-[62px] cursor-pointer rounded-t-[20px] ${
              activeTab.id === tab.id
                ? "text-primary-90 font-semibold text-[20px] bg-primary-20"
                : "text-primary-50 font-semibold text-[20px] bg-primary-10"
            }`}
          >
            {tab.id === activeTab.id && tab.icon}
            <span className="ml-[4px]">{tab.label}</span>
          </div>
        ))}
        <div className="flex items-center ml-auto">
          <div className="text-2 text-primary-80">
            다양한 분야의 멤버와 프로젝트를 시작해보세요
          </div>
          <div className="flex items-center justify-center w-[134px] h-[42px] bg-primary-10 rounded-[6px] ml-[12px]">
            <button className=" text-1 text-primary-80">프로젝트 모집</button>
            <img src="/rightArrowPrimary.svg" alt="arrow-right" />
          </div>
        </div>
      </div>
      <div className="w-[1200px] h-[371px] bg-primary-20">
        {activeTab.content}
      </div>
    </div>
  );
};

export default ProjectTab;
