import { Wrap, Text } from '@chakra-ui/react';
import useSWR from 'swr';

import User from '@components/user';
import { UserMDSkeleton } from '@skeletons';

const TopInstructors = () => {
  const { data, error } = useSWR('/api/instructors');

  if (error) {
    console.log(error);
    return (
      <>
        {[...Array(8)].map((_, i) => (
          <UserMDSkeleton key={i} />
        ))}
      </>
    );
  }

  return (
    <Wrap direction="column" flexWrap="wrap" spacing={8} flexDirection="column">
      <Text width="full" marginBottom={4} fontSize="lg" fontWeight="semibold">
        Top Instructors
      </Text>

      {data
        ? data.data.map(({ fullName, status, avatar, verified, id }, i) => (
            <User
              id={id}
              size="base"
              fullName={fullName}
              jobTitle={status}
              avatar={avatar}
              verified={verified}
              key={i}
            />
          ))
        : [...Array(8)].map((_, i) => <UserMDSkeleton key={i} />)}
    </Wrap>
  );
};

export default TopInstructors;
