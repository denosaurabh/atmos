import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Select,
} from '@chakra-ui/react';
import useTab from '@hooks/useTabsHook';

import { MenuTabI, SelectMenuI, TabsMenuI } from '@lib/components';
import { BreakpointsEnum } from '@lib/ui';

/*  Component Associated with `useTab` hook */
const MenuTab = ({ options, changeAt = BreakpointsEnum.md }: MenuTabI) => {
  const { isSmallScreen, currentTab, onSelectChange, onTabChange } = useTab({
    changeAt,
  });

  return (
    <Flex>
      {isSmallScreen ? (
        <SelectMenu
          currentTab={currentTab}
          onSelectChange={onSelectChange}
          tabsContent={Object.values(options)}
          options={Object.keys(options)}
        />
      ) : (
        <TabsMenu
          currentTab={currentTab}
          onTabChange={onTabChange}
          tabsContent={Object.values(options)}
          options={Object.keys(options)}
        />
      )}
    </Flex>
  );
};

const SelectMenu = ({
  onSelectChange,
  currentTab,
  tabsContent,
  options,
}: SelectMenuI) => {
  return (
    <Flex flexDirection="column" width="full">
      <Select
        placeholder="Select Menu"
        defaultValue={currentTab}
        onChange={onSelectChange}
        marginBottom={8}
      >
        {options.map((el, i) => (
          <option value={i} key={i}>
            {el}
          </option>
        ))}
      </Select>

      {tabsContent[currentTab]}
    </Flex>
  );
};

const TabsMenu = ({
  onTabChange,
  currentTab,
  tabsContent,
  options,
}: TabsMenuI) => {
  return (
    <Tabs onChange={onTabChange} defaultValue={currentTab}>
      <TabList marginBottom={8}>
        {options.map((el, i) => (
          <Tab key={i}>{el}</Tab>
        ))}
      </TabList>

      <TabPanels maxWidth="50rem">
        {options.map((_, i) => (
          <TabPanel key={i}>{tabsContent[i]}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default MenuTab;
