import { Flex, Select } from "@chakra-ui/react";
import { Profile } from "@shared/settings/index";
import { SettingsSelectI } from "@lib/pages/settings";

const SettingsSelect = ({ onSelectChange, currentTab }: SettingsSelectI) => {
  return (
    <Flex flexDirection="column">
      <Select
        placeholder="Select Menu"
        defaultValue={currentTab}
        onChange={onSelectChange}
        marginBottom={8}>
        <option value="0">Profile</option>
        <option value="1">Password</option>
        <option value="2">Email</option>
        <option value="3">Notifications</option>
        <option value="4">Settings</option>
      </Select>

      {[<Profile key={0} />][currentTab]}
    </Flex>
  );
};

export default SettingsSelect;
