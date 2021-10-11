import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import Page from '@layouts/page';

const Custom505 = () => {
  return (
    <Page>
      <Flex
        width="100%"
        height="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading mb={8}>Yooo, something&apos;s went to the moooon!</Heading>
        <Text color="secondary-s-medium" fontWeight="medium" fontSize="lg">
          <Link href="/">Get it Back to Earth</Link>
        </Text>
      </Flex>
    </Page>
  );
};

export default Custom505;
