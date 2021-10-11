import {
  Button,
  Input,
  Wrap,
  Heading,
  Text,
  Tag,
  Stat,
  StatNumber,
  StatHelpText,
  InputGroup,
  InputRightElement,
  FormLabel,
  Divider,
} from '@chakra-ui/react';

import { Heart, Share, Box } from '@components/icons';

const TopRight = ({ data }) => {
  return (
    <Wrap
      flexBasis="20%"
      spacing={4}
      paddingRight={{ base: 8, ml: 0 }}
      direction="column"
      marginTop={12}
      flexWrap="wrap"
    >
      <Heading colorScheme="grey" fontSize="2xl" fontWeight="medium" order={1}>
        Price
      </Heading>
      <Tag variant="1005" order={2}>
        Best Value
      </Tag>
      {data ? (
        <Stat order={3}>
          <StatNumber fontSize="3xl">
            {/* {data.price.currencySymbol} */} $
            {/* {data.price.value} */} 4.98
            <Text as="sup" fontWeight="light" fontSize="sm" marginLeft={1.5}>
              {/* {data.price.currencyCode} */} usd
            </Text>
          </StatNumber>
          <StatHelpText as="s" fontWeight="light">
            $5.9 usd
          </StatHelpText>
        </Stat>
      ) : (
        <Text>Loading...</Text>
      )}

      <Wrap spacing={4} order={4}>
        <Tag variant="1002">Lowest Price</Tag>
        <Tag variant="1006">Editor&apos;s Pick</Tag>
      </Wrap>
      <Wrap order={5} flexDirection="column">
        <FormLabel paddingTop={4} fontSize="sm" color="grey-s-dark">
          Coupon Code (optional)
        </FormLabel>
        <InputGroup size="md">
          <Input type={'text'} placeholder="Coupon Code" />
          <InputRightElement width="4.5rem" cursor="pointer">
            Verify
          </InputRightElement>
        </InputGroup>
      </Wrap>
      <Divider order={7} paddingY={2} />
      <Wrap order={8} direction="column" spacing={4}>
        <Button variant="orange" width="full">
          Buy Now
        </Button>
        <Button variant="yellow" width="full">
          Add to Cart
        </Button>
      </Wrap>
      <Divider order={9} paddingY={2} />
      <Wrap order={10} direction={{ base: 'row', ml: 'column' }} spacing={4}>
        <Button variant="light" leftIcon={<Heart />}>
          Add to Wishlist
        </Button>
        <Button variant="light" leftIcon={<Share />}>
          Share
        </Button>
        <Button variant="light" leftIcon={<Box />}>
          Gift this Course
        </Button>
      </Wrap>
    </Wrap>
  );
};

export default TopRight;
