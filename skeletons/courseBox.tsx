import { Flex, Skeleton } from '@chakra-ui/react';
import { UserSmallSkeleton } from '@skeletons/user';

const CourseBoxSkeleton = () => {
  return (
    <Flex
      borderRadius="3xl"
      maxWidth="3xl"
      height="13rem"
      padding={3}
      shadow="lg"
      marginY={4}
    >
      <Skeleton
        width={{ base: '15%', sl: '15rem' }}
        objectFit="cover"
        src="/assets/courses/course.png"
        rounded="2xl"
      />

      <Flex marginLeft={6} flexDirection="column" paddingBottom={1}>
        <Skeleton rounded="lg" marginBottom="1rem" width="30%">
          Quality
        </Skeleton>
        <Skeleton rounded="lg" height="3.2rem" marginBottom="1rem" width="80%">
          Et aspernatur laborum eum nostrum et temporibus.
        </Skeleton>
        <Skeleton rounded="lg" marginBottom="1rem" width="60%">
          Quality
        </Skeleton>

        <Flex>
          <Skeleton rounded="lg" height="2rem" width="20%" marginRight={6}>
            $4.9 usd
          </Skeleton>

          <UserSmallSkeleton />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CourseBoxSkeleton;
