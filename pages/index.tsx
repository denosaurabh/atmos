import { Flex } from '@chakra-ui/react';

import Page from '@layouts/page';
import { PageHeading } from '@components';

import {
  AllCategories,
  Carousal,
  TrendingCourses,
  TopInstructors,
} from '@shared/home';

export default function Home() {
  return (
    <Page>
      <PageHeading text="Courses" title="Trending" />

      <Carousal />

      <Flex marginTop={12} justifyContent="space-evenly" flexWrap="wrap">
        <TrendingCourses />
        <Flex direction="column" flexWrap="wrap">
          <TopInstructors />

          <AllCategories />
        </Flex>
      </Flex>
    </Page>
  );
}
