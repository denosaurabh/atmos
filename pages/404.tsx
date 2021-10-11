import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

import Page from "@layouts/page";

const Custom404 = () => {
  return (
    <Page>
      <Flex
        width="100%"
        height="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <Heading mb={8}>Page Not Found</Heading>
        {/* it&apos;s not on Earth, maybe on Mars??! */}
        <Text color="secondary-s-medium" fontWeight="medium" fontSize="lg">
          Go <Link href="/">Back to Home</Link>
        </Text>
      </Flex>
    </Page>
  );
};

export default Custom404;
