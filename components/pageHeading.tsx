import { Box, Text, Heading } from "@chakra-ui/react";
import { PageHeadingI } from "@lib/components";

const PageHeading = ({ text, title }: PageHeadingI) => (
  <Box marginTop={4} marginBottom={10}>
    <Text fontWeight="medium" fontSize="xl">
      {text}
    </Text>
    <Heading fontSize="2.6rem">{title}</Heading>
  </Box>
);

export default PageHeading;
