import { Flex, Input, useColorModeValue } from '@chakra-ui/react';
import { Search as SearchSvg } from '@components/icons';

const Search = () => {
  const backgroundColor = useColorModeValue('grey-s-light', 'white-100');

  return (
    <Flex
      marginLeft={6}
      alignItems="center"
      backgroundColor={backgroundColor}
      borderRadius="2xl"
      paddingX={4}
      paddingY={1}
      width={{ base: 'xs', lg: 'sm' }}
      display={{ base: 'none', sl: 'flex' }}
    >
      <SearchSvg marginRight={2} />
      <Input
        size="search"
        backgroundColor="transparent"
        type="text"
        placeholder="Search courses"
        focusBorderColor="none"
      />
    </Flex>
  );
};

export default Search;
