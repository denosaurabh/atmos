import { Flex, Avatar, Text } from '@chakra-ui/react';
import Verified from '@icons/verified';
import { Number } from '@components';
import { UserCompI } from '@lib/components';

const User = ({
  // id,
  size,
  fullName,
  jobTitle,
  avatar,
  verified,
}: UserCompI) => {
  return (
    <Flex alignItems="center">
      <Avatar
        size={size === 'small' ? 'sm' : 'md'}
        src={avatar}
        marginRight={3}
      />
      <Flex flexDirection="column">
        <Text fontSize={size === 'small' ? 'sm' : 'md'} fontWeight="medium">
          {fullName} {verified ? <Verified /> : ''}
        </Text>
        <Text fontSize={size === 'small' ? 'xs' : 'sm'} fontWeight="light">
          {jobTitle}
        </Text>
        {size !== 'small' ? (
          <Number colorScheme="accent02">12k learners</Number>
        ) : null}
      </Flex>
    </Flex>
  );
};

export default User;
