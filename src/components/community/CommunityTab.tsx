import { Tab, useTab } from "../design/Tabs";
interface CommunityTabProps {
  tabs: Tab[];
}
const CommunityTab = ({ tabs }: CommunityTabProps): JSX.Element => {
  const { activeTab, handleTabChange } = useTab(tabs[0]);
  return (
    <div className="pt-[47px] pb-[142px]">
      <div className="flex gap-[30px] border-b border-[#CCCCCC]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabChange(tab)}
            className={`flex justify-center items-center cursor-pointer ${
              activeTab.id === tab.id
                ? "text-primary-90 font-semibold"
                : "text-neutral-40 font-semibold"
            }`}
          >
            {tab.id === activeTab.id && tab.icon}
            <span
              className={`pb-[6px] ${
                activeTab.id === tab.id ? "border-b-2 border-primary-90" : ""
              }`}
            >
              {tab.label}
            </span>
          </div>
        ))}
      </div>
      <div>{activeTab.content}</div>
    </div>
  );
};

export default CommunityTab;
