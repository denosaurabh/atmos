import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { Profile } from "@shared/settings/index";
import { SettingsTabsI } from "@lib/pages/settings";

const SettingsTab = ({ onTabChange, currentTab }: SettingsTabsI) => {
  return (
    <Tabs onChange={onTabChange} defaultValue={currentTab}>
      <TabList marginBottom={8}>
        <Tab>Profile</Tab>
        <Tab>Password</Tab>
        <Tab>Email</Tab>
        <Tab>Notifications</Tab>
        <Tab>Settings</Tab>
      </TabList>

      <TabPanels maxWidth="50rem">
        <TabPanel>
          <Profile />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SettingsTab;
