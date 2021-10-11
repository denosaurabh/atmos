import { Wrap } from '@chakra-ui/react';

import {
  CourseBoxSkeleton,
  UserSmallSkeleton,
  UserMDSkeleton,
} from '@skeletons';
import Page from '@layouts/page';

const Skeletons = () => {
  return (
    <Page>
      <Wrap spacing={16} direction="column">
        <CourseBoxSkeleton />

        <UserSmallSkeleton />
        <UserMDSkeleton />
      </Wrap>
    </Page>
  );
};

export default Skeletons;
