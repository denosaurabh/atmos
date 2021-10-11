import { Flex, Image, Text } from "@chakra-ui/react";
import { CategoryI } from "@lib/components";

const Category = ({ image, title, description }: CategoryI) => {
  return (
    <Flex marginY={4} width="64">
      <Image
        width={14}
        height={24}
        objectFit="cover"
        borderRadius="xl"
        marginRight={4}
        src={image}
      />
      <Flex direction="column" justifyContent="center">
        <Text fontWeight="medium">{title}</Text>
        <Text fontSize="0.8rem" color="grey">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Category;
