import dynamic from 'next/dynamic';
import { Flex } from '@chakra-ui/react';

import { PageHeading } from '@components';

import Carousal from '@shared/home/carousal';

const TrendingCourses = dynamic(() => import('@shared/home/trendingCourses'));
const AllCategories = dynamic(() => import('@shared/home/allCategories'));
const TopInstructors = dynamic(() => import('@shared/home/topInstructors'));

export default function Home() {
  return (
    <>
      <PageHeading text="Courses" title="Trending" />

      <Carousal />

      <Flex marginTop={12} justifyContent="space-evenly" flexWrap="wrap">
        <TrendingCourses />
        <Flex direction="column" flexWrap="wrap">
          <TopInstructors />

          <AllCategories />
        </Flex>
      </Flex>
    </>
  );
}
