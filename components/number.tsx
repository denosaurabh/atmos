import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { NumberI } from "@lib/components";

const Number = ({ children, colorScheme }: NumberI) => {
  const color = useColorModeValue("grey-s-dark", "white-500");
  const weight = useColorModeValue("normal", "light");

  return (
    <Flex as="span" alignItems="center">
      <Text
        boxSize="0.45em"
        bg={colorScheme}
        marginRight="0.5rem"
        borderRadius="full"
      />
      <Text fontSize="0.85rem" fontWeight={weight} color={color}>
        {children}
      </Text>
    </Flex>
  );
};

export default Number;
