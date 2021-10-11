import Link from 'next/link';

import {
  Switch,
  FormControl,
  FormLabel,
  useColorMode,
  Flex,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useAuth } from '@contexts/useAuth';
import { SidebarExtended } from '@lib/components';

const BottomSection = ({ extended }: SidebarExtended) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, userLoaded } = useAuth();

  return (
    <Flex flexDirection="column" mt="auto" pb={4}>
      {!userLoaded && !user ? (
        <Flex
          flexDirection="column"
          mb="6"
          height="20rem"
          rounded="2xl"
          display={extended ? 'flex' : 'none'}
          backgroundImage="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #151515 70%), url(/assets/courses/course.png)"
          backgroundSize="cover"
          padding={4}
        >
          <Heading color="white" fontSize="xl" fontWeight="medium" mt="auto">
            Join the Course App Now
          </Heading>
          <Text color="white" fontSize="sm" my={4}>
            discover best online courses anywhere
          </Text>
          <Link href="/signup">
            <Button width="full">Sign Up</Button>
          </Link>
        </Flex>
      ) : null}

      <FormControl
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="auto"
      >
        <FormLabel
          htmlFor="email-alerts"
          mb="0"
          display={extended ? 'unset' : 'none'}
        >
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </FormLabel>
        <Switch size="lg" onChange={toggleColorMode} />
      </FormControl>
    </Flex>
  );
};

export default BottomSection;
