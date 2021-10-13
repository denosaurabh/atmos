import MenuTab from '@components/menuTab';
import PageHeading from '@components/pageHeading';

import { Profile } from '@shared/settings';

const Settings = () => {
  return (
    <>
      <PageHeading text="Your" title="Settings" />

      <MenuTab
        changeAt="md"
        options={{
          Profile: <Profile />,
          Password: <p>1</p>,
          Email: <p>2</p>,
          Notifications: <p>3</p>,
          Settings: <p>4</p>,
        }}
      />
    </>
  );
};

export default Settings;
