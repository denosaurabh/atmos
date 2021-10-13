import { Flex, Heading, Tag, Image, useColorModeValue } from '@chakra-ui/react';

import Number from '@components/number';
import User from '@components/user';

import { CourseCardI } from '@lib/components';

const CourseCard = ({
  image,
  title,
  instructor,
  tags,
  learners_number,
}: CourseCardI) => {
  const borderColor = useColorModeValue('grey-s-light', 'white-200');

  const { avatar, fullName, jobTitle, verified, id: userId } = instructor;

  return (
    <Flex
      minWidth="16rem"
      maxHeight="md"
      flex={1}
      direction="column"
      rounded="2xl"
      shadow="xl"
      mx={4}
      my={7}
      _hover={{ shadow: '2xl' }}
    >
      <Image height="45%" src={image} objectFit="cover" roundedTop="2xl" />

      <Flex flexDirection="column" p={4}>
        <Heading fontSize="xl" fontWeight="medium" mb={5}>
          {title}
        </Heading>

        <User
          size="base"
          id={userId}
          fullName={fullName}
          jobTitle={jobTitle}
          avatar={avatar}
          verified={verified}
        />
      </Flex>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        borderTop="1px solid"
        borderColor={borderColor}
        p={4}
        mt="auto"
      >
        {tags.map((_, i) => (
          <Tag key={i}>Recommanded</Tag>
        ))}
        <Number colorScheme="secondary-s-medium">
          {`${learners_number} learners`}
        </Number>
      </Flex>
    </Flex>
  );
};

export default CourseCard;
