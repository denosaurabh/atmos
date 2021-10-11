import { memo } from 'react';
import { Flex, Wrap, Button, Select, Text } from '@chakra-ui/react';
import useSWR from 'swr';

import { CourseBox } from '@components';
import { CourseBoxSkeleton } from '@skeletons';

const TrendingCourses = () => {
  const { data } = useSWR('/api/courses');

  const onNextBtnClick = () => {};
  const onPrevBtnClick = () => {};

  return (
    <Flex
      flexDirection="column"
      width="50%"
      minWidth="fit-content"
      marginRight={6}
    >
      <Flex marginBottom={12} flexWrap="wrap" justifyContent="flex-start">
        <Wrap spacing={3} marginRight="auto" marginBottom={{ base: 4, sl: 0 }}>
          <Button>Javascript</Button>
          <Button variant="light">Web</Button>
          <Button variant="light">UX</Button>
        </Wrap>
        <Select alignSelf="center" width="max-content">
          <option value="recommanded">Recommanded</option>
          <option value="curated">Curated</option>
          <option value="best-value">Best Value</option>
        </Select>
      </Flex>
      <Text width="full" marginBottom={8} fontSize="lg" fontWeight="semibold">
        Top Trending Now
      </Text>

      {data
        ? data.data.map((data, i) => <CourseBox {...data} key={i} />)
        : [...Array(5)].map((_, i) => <CourseBoxSkeleton key={i} />)}

      <Flex justifyContent="space-between" mt={8}>
        <Button variant="light" onClick={onPrevBtnClick}>
          Prev Page
        </Button>
        <Button variant="light" onClick={onNextBtnClick}>
          Next Page
        </Button>
      </Flex>
    </Flex>
  );
};

export default memo(TrendingCourses);
