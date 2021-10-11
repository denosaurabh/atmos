import { Flex, Text } from "@chakra-ui/react";
import { NotificationIconI } from "@lib/components";

const NotificationIcon = ({ icon, number, ...rest }: NotificationIconI) => (
  <Flex position="relative">
    {icon}

    <Flex
      position="absolute"
      top={-3}
      right={-3}
      fontSize="xs"
      color="white"
      justifyContent="center"
      alignItems="center"
      backgroundColor="accent02-s-dark"
      width="1rem"
      height="1rem"
      rounded="full"
      {...rest}>
      <Text>{number}</Text>
    </Flex>
  </Flex>
);

export default NotificationIcon;
