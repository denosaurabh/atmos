import { Flex, SkeletonCircle, Skeleton } from '@chakra-ui/react';

const UserSmallSkeleton = () => (
  <Flex>
    <SkeletonCircle marginRight={3} />
    <Flex
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Skeleton height="14px" width="80px">
        Name
      </Skeleton>
      <Skeleton height="10px">Name</Skeleton>
    </Flex>
  </Flex>
);

const UserMDSkeleton = () => (
  <Flex height="3rem" width="max-content" alignItems="center">
    <SkeletonCircle marginRight={3} size="14" />
    <Flex
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Skeleton height="18px" width="120px" marginBottom={2}>
        Name
      </Skeleton>
      <Skeleton height="10px" width="70px" marginBottom={1}>
        Name
      </Skeleton>
      <Skeleton height="13px" width="90px">
        Name
      </Skeleton>
    </Flex>
  </Flex>
);

export { UserSmallSkeleton, UserMDSkeleton };
