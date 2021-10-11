import {
  Grid,
  Box,
  Tag,
  Heading,
  Text,
  Button,
  Avatar,
  Wrap,
} from '@chakra-ui/react';
import { CourseMainBoxI } from '@lib/components';

const CourseMainBox = ({
  title,
  tags,
  id,
  instructor,
  image,
}: CourseMainBoxI) => {
  const { fullName, avatar } = instructor || { fullName: '', avatar: '' };

  return (
    <Grid
      marginX={4}
      as="article"
      maxWidth="50rem"
      width="100%"
      height="30rem"
      borderRadius="3xl"
      backgroundImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0), #2A2B2D), url(${image})`}
      backgroundSize="cover"
      objectFit="cover"
      alignItems="flex-end"
      padding={{ base: 6, sl: 12 }}
    >
      <Box>
        {tags?.map((_, i) => (
          <Tag key={i}>Best Selling</Tag>
        ))}

        <Heading fontSize="3xl" fontWeight="medium" color="white">
          {title}
        </Heading>

        <Wrap align="center" spacing={4} marginY={3}>
          <Avatar size="xs" src={avatar} />
          <Text color="white-700" fontSize="sm" fontWeight="medium">
            {fullName}
          </Text>
        </Wrap>
        <Button>Check Out</Button>
      </Box>
    </Grid>
  );
};

export default CourseMainBox;
