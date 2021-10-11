import { Skeleton, SkeletonText } from '@chakra-ui/react';
import { UserSmallSkeleton } from '@skeletons';

const CourseMainBoxSkeleton = () => {
  return (
    <Skeleton
      display="grid"
      marginX={4}
      maxWidth="50rem"
      width="30rem"
      height="30rem"
      borderRadius="3xl"
      backgroundSize="cover"
      objectFit="cover"
      alignItems="flex-end"
      padding={{ base: 6, sl: 12 }}
    >
      <SkeletonText>UI Designing</SkeletonText>
      <UserSmallSkeleton />
    </Skeleton>
  );
};

export default CourseMainBoxSkeleton;
