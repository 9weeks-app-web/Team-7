import { useState, ReactNode } from "react";

export interface Tab {
  id: string;
  label: string;
  icon?: ReactNode;
  content: ReactNode;
}

export interface TabProps {
  tabs: Tab[];
}

export const useTab = (initialTab: Tab) => {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  const handleTabChange = (newTab: Tab) => {
    setActiveTab(newTab);
  };

  return {
    activeTab,
    handleTabChange,
  };
};

export const TabContent: React.FC<TabProps> = ({ tabs }) => {
  const { activeTab, handleTabChange } = useTab(tabs[0]);
  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabChange(tab)}
          className={
            activeTab.id === tab.id ? "bg-primary-100" : "bg-primary-white"
          }
        >
          {tab.label}
        </button>
      ))}
      {activeTab.content}
    </div>
  );
};
