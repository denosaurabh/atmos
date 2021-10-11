import {
  Button,
  Flex,
  Wrap,
  Heading,
  Text,
  Avatar,
  Tag,
} from '@chakra-ui/react';
import { LeftArrow } from '@components/icons';
import { TopLeftDataI } from '@lib/pages/course';

const TopLeft = ({
  title,
  instructor,
  learners_number,
  subDescription,
}: TopLeftDataI) => {
  const { avatar = 'avatar', fullName = 'Name' } = instructor;

  return (
    <Wrap flexBasis="65%" maxWidth="55rem" spacing={6} direction="column">
      <Button
        size="sm"
        variant="light"
        leftIcon={<LeftArrow width={4} heihgt={4} />}
      >
        Go Back
      </Button>

      <Heading fontWeight="semibold" lineHeight="tall">
        {title}
      </Heading>

      <video
        height="38rem"
        width="95%"
        style={{ borderRadius: '1rem' }}
        controls
      >
        <source src="https://firebasestorage.googleapis.com/v0/b/course-app-b9a67.appspot.com/o/courses%2FEMkdu2eOi419t9OraJ5H%2FAerial%20Shot%20Of%20Forest%20Covered%20In%20Snow.mp4?alt=media&token=39337d2c-1180-4b58-8228-80cfe74cdbc9" />
        Your browser does not support the video tag.
      </video>

      <Text>{subDescription}</Text>

      <Flex
        flexDirection={{ base: 'column', ml: 'row' }}
        justifyContent="space-between"
      >
        <Flex alignItems="center" marginBottom={{ base: 6, ml: 0 }}>
          <Avatar marginRight={3} boxSize="2.5rem" src={avatar} />
          <Text fontWeight="medium" marginRight="auto">
            {fullName}
          </Text>
        </Flex>

        <Wrap spacing={3}>
          <Tag>{learners_number} learners</Tag>
          <Tag variant="1002">{`reviews_number`} ratings (4.9)</Tag>
          <Tag variant="1003">18 hours downloadable content</Tag>
        </Wrap>
      </Flex>
    </Wrap>
  );
};

export default TopLeft;
