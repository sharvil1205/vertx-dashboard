import { SelectTabData, Tab, TabList } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { Messages, tabs } from "../constants";

const AnalyticsContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  useEffect(() => {
    if (location.pathname === "/analytics") {
      navigate(`/analytics/${tabs[0].toLowerCase()}`);
    }

    const currentTab = tabs.find((tab) =>
      location.pathname.includes(tab.toLowerCase())
    );
    if (currentTab) setSelectedTab(currentTab);
    // eslint-disable-next-line
  }, [location.pathname]);

  const tabClickedHandler = (tab: string) => {
    setSelectedTab(tab);
    navigate(`/analytics/${tab.toLowerCase()}`);
  };

  return (
    <>
      <div className="text-xl">{Messages.analytics}</div>
      <TabList
        selectedValue={selectedTab}
        onTabSelect={(e, data: SelectTabData) =>
          tabClickedHandler(data.value as string)
        }
        className="gap-8 mt-6"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab}
            value={tab}
            className={`cursor-pointer text-lg ${
              tab !== selectedTab && "text-daveGray"
            }`}
          >
            {tab}
          </Tab>
        ))}
      </TabList>

      <div className="mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default AnalyticsContainer;
