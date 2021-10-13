import { Flex, Select, Text } from '@chakra-ui/react';
import CourseCard from '@components/courseCard';
import { CourseCardSkeleton } from '@skeletons';

import useSWR from 'swr';

const MidContent = () => {
  const { data, error } = useSWR('/api/courses');
  console.log(data, error);

  return (
    <Flex flexDirection="column" mt={12} maxWidth="8xl" mx="auto" px={8}>
      <Flex
        flex={1}
        alignItems={{ base: 'flex-start', sm: 'center' }}
        justifyContent="space-between"
        flexDirection={{ base: 'column', sm: 'row' }}
        mb={8}
      >
        <Text fontSize="xl" fontWeight="medium" mr={4} mb={{ base: 4, sm: 0 }}>
          Trending Courses
        </Text>
        <Select
          maxWidth={{ base: 'unset', sm: '14rem' }}
          flex={1}
          alignSelf="center"
        >
          <option value="recommanded">Popular</option>
          <option value="curated">New</option>
          <option value="best-value">Best Value</option>
          <option value="best-value">Free</option>
        </Select>
      </Flex>

      <Flex justifyContent="space-between" flexWrap="wrap">
        {data
          ? data.data.map((data, i) => <CourseCard {...data} key={i} />)
          : [...Array(10)].map((_, i) => <CourseCardSkeleton key={i} />)}
      </Flex>
    </Flex>
  );
};

export default MidContent;
