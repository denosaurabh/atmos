import { Flex, Input as ChakraInput, Text } from "@chakra-ui/react";
import { InputI } from "@lib/components";

const Input = ({
  name,
  isRequired,
  placeHolder,
  label,
  type,
  value,
  onChangeHandler,
  ...rest
}: InputI) => {
  return (
    <Flex direction="column" padding={2} minW="15rem" {...rest}>
      <Text as="label" fontSize="sm" paddingLeft={2} marginBottom={3}>
        {label}
      </Text>
      <ChakraInput
        name={name}
        isRequired={isRequired}
        type={type}
        placeholder={placeHolder}
        onChange={onChangeHandler}
        value={value}
      />
    </Flex>
  );
};

export default Input;
