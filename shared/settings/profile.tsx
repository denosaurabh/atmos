import { Avatar, Button, Flex, Text } from '@chakra-ui/react';

import Input from '@components/input';
import { useAuth } from '@contexts/useAuth';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <Flex direction="column">
        <Text as="span" fontWeight="light" fontSize="sm">
          Sign In
        </Text>
      </Flex>
    );
  }

  return (
    <Flex direction="column">
      <Text as="span" fontWeight="light" fontSize="sm">
        Your Avatar
      </Text>

      <Flex marginTop={6} marginBottom={16}>
        <Avatar size="xl" src={user.avatar} marginRight={4} />
        <Flex
          alignItems="center"
          flexWrap="wrap"
          direction={{ base: 'column', sm: 'row' }}
        >
          <Button
            marginRight={{ base: 0, sm: 4 }}
            marginBottom={{ base: 4, sm: 0 }}
            flexBasis="45%"
            width={{ base: '100%', sm: 'unset' }}
          >
            Upload new
          </Button>
          <Button
            marginBottom={{ base: 4, sm: 0 }}
            variant="light"
            flexBasis="45%"
            width={{ base: '100%', sm: 'unset' }}
          >
            Random Avatar
          </Button>

          <Text flex="1" fontWeight="light" fontSize="sm">
            Avatar help your friends recognize you in Unity.
          </Text>
        </Flex>
      </Flex>

      <Flex flexWrap="wrap">
        <Input
          name="fullName"
          label="Full Name"
          placeHolder="Your Name"
          type="text"
          value={user.fullName}
          flexBasis="50%"
          onChangeHandler={() => {}}
        />
        <Input
          name="displayName"
          label="Display Name"
          placeHolder="Display Name"
          type="text"
          value={user.displayName}
          flexBasis="50%"
          onChangeHandler={() => {}}
        />
        <Input
          name="job"
          label="Job"
          placeHolder="Your current Job"
          type="text"
          value={user.jobTitle}
          flexBasis="50%"
          onChangeHandler={() => {}}
        />
        <Input
          name="location"
          label="Location"
          placeHolder="Your Country"
          type="country"
          value={user.country}
          flexBasis="50%"
          onChangeHandler={() => {}}
        />

        <Button flexBasis="45%" flexGrow={1} marginTop={12}>
          Update Profile
        </Button>
      </Flex>
    </Flex>
  );
};

export default Profile;
