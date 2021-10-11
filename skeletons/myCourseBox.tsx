import { Skeleton, Flex } from '@chakra-ui/react';

const MyCourseBoxSkeleton = () => {
  return (
    <Flex
      rounded="2xl"
      maxW="4xl"
      height="12rem"
      shadow="xl"
      padding={4}
      paddingRight={8}
    >
      <Skeleton marginRight={6} width="30%" rounded="2xl" minW="4rem" />

      <Flex
        flex={1}
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Skeleton
          height={{ base: '4rem', md: '4.5rem' }}
          minW="15rem"
          width="70%"
          fontFamily="body"
          fontWeight="medium"
          fontSize="1.7rem"
        />
        <Skeleton colorScheme="secondary-s-dark">78% completed</Skeleton>
        <Skeleton height="2rem" width="40%" minW="10rem" />
      </Flex>
    </Flex>
  );
};

export default MyCourseBoxSkeleton;
