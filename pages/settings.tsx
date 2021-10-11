import { PageHeading, MenuTab } from '@components';
import Page from '@layouts/page';

import { Profile } from '@shared/settings';

const Settings = () => {
  return (
    <Page>
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
    </Page>
  );
};

export default Settings;
