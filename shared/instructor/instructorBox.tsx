import {
  Avatar,
  Flex,
  Button,
  Heading,
  Text,
  Wrap,
  useColorModeValue,
} from '@chakra-ui/react';
import { Message, Profile } from '@components/icons';

import { InstructorBoxI } from '@lib/pages/instructor';

const InstructorBox = ({ id, avatar, fullName }: InstructorBoxI) => {
  const bgColor = useColorModeValue('white', 'grey-s-x-dark');

  return (
    <Flex
      justifyContent="center"
      width="100%"
      height={{ base: '8rem', md: '10rem' }}
      paddingX={3}
      transform="translateY(-50%)"
    >
      <Flex
        alignItems="center"
        paddingY={4}
        paddingX={6}
        rounded="3xl"
        maxWidth="60rem"
        width="100%"
        height="100%"
        backgroundColor={bgColor}
        shadow="xl"
      >
        <Avatar
          width={{ base: '4rem', md: '5rem', lg: '7rem' }}
          height={{ base: '4rem', md: '5rem', lg: '7rem' }}
          marginRight="2%"
          src={avatar}
        />

        <Flex direction="column" marginRight="auto">
          <Heading fontWeight="semibold" fontFamily="body">
            {fullName}
          </Heading>
          <Wrap spacing={3}>
            <Text>56k learners</Text>
            <Text>2 courses</Text>
          </Wrap>
        </Flex>

        <Wrap spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Button leftIcon={<Message />}>Message</Button>
          <Button paddingX="1.5rem" leftIcon={<Profile />} variant="light" />
        </Wrap>
      </Flex>
    </Flex>
  );
};

export default InstructorBox;
