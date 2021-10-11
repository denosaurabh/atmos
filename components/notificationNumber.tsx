import { Flex, Text } from "@chakra-ui/react";

const NotificationNumber: React.FC = ({ children }) => (
  <Flex
    marginLeft="auto"
    justifyContent="center"
    alignItems="center"
    backgroundColor="accent02-s-dark"
    color="white"
    width="1.5rem"
    height="1.5rem"
    rounded="full">
    <Text>{children}</Text>
  </Flex>
);

export default NotificationNumber;
