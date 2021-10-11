import { VStack, Text } from '@chakra-ui/react';
import Categories from '@shared/home/categories';

const allCategories = () => {
  return (
    <VStack spacing={6} marginTop={24}>
      <Text width="full" marginBottom={4} fontSize="lg" fontWeight="semibold">
        Top Categories
      </Text>
      <Categories />
    </VStack>
  );
};

export default allCategories;
