import Link from 'next/link';
import { Flex, Heading, Tag, Image, useColorModeValue } from '@chakra-ui/react';

import Number from '@components/number';
import User from '@components/user';

import { CourseCardI } from '@lib/components';

const CourseCard = ({
  id,
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
      <Link href={`/course/${id}`}>
        <Image height="45%" src={image} objectFit="cover" roundedTop="2xl" cursor="pointer" />
      </Link>

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
        {tags.map((taag, i) => (
          <Tag key={i}>{taag}</Tag>
        ))}
        <Number colorScheme="secondary-s-medium">
          {`${learners_number} learners`}
        </Number>
      </Flex>
    </Flex>
  );
};

export default CourseCard;
