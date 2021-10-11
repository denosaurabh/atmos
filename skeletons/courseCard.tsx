import { Flex, Skeleton } from '@chakra-ui/react';
import { UserSmallSkeleton } from '@skeletons/user';

const CourseCardSkeleton = () => {
  return (
    <Flex
      minWidth="16rem"
      flex={1}
      direction="column"
      rounded="2xl"
      shadow="xl"
      mx={4}
      my={7}
    >
      <Skeleton flexBasis="45%" roundedTop="2xl" />

      <Flex flexDirection="column" p={4} pb={6}>
        <Skeleton
          rounded="xl"
          height="4rem"
          fontSize="xl"
          fontWeight="medium"
          mb={8}
        />

        <UserSmallSkeleton />
      </Flex>

      <Flex justifyContent="space-between" alignItems="center" p={4} mt="auto">
        <Skeleton rounded="lg" width="5rem" height="1.8rem" />
        <Skeleton width="8rem" height="1.4rem" />
      </Flex>
    </Flex>
  );
};

export default CourseCardSkeleton;
