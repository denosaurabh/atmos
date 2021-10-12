import {
  Avatar,
  Flex,
  Heading,
  Text,
  IconButton,
  Wrap,
  useColorModeValue,
} from '@chakra-ui/react';

import { NotificationIcon } from '@components';

import Like from '@icons/like';
import ChatFill from '@icons/chatfill';
import Emo from '@icons/emo';

import { QuestionI } from '@lib/components';

const Question = ({
  title = '', // For no issues when rendering answers
  description,
  timestamp,
  from,
  answers = [],
  noLeftIcons,
  noHeading,
}: QuestionI) => {
  const textColor = useColorModeValue('grey-s-darkest', 'white-600');
  const svgColor = useColorModeValue('grey-s-darkest', 'white-300');
  const iconBorderColor = useColorModeValue('grey-s-dark', 'white-300');
  const borderColor = useColorModeValue('grey-o-light', 'white-300');
  const bgHoverColor = useColorModeValue('grey-s-light', 'white-200');

  const { avatar, userId, userName } = from;
  const { seconds } = timestamp;

  return (
    <Flex maxWidth="50rem" py={8} borderBottom="1px" borderColor={borderColor}>
      <Wrap direction="column" spacing={4} marginRight={7}>
        <Avatar
          size="md"
          rounded="full"
          marginRight={4}
          src={avatar}
          cursor="pointer"
        />

        {!noLeftIcons ? (
          <>
            <NotificationIcon
              top={0}
              right={0}
              fontSize="0.7rem"
              backgroundColor="secondary-s-medium"
              number={3}
              icon={
                <IconButton
                  aria-label="Like this Question"
                  border="1px"
                  borderColor={iconBorderColor}
                  size="lg"
                  borderRadius="xl"
                  bgColor="transparent"
                  _hover={{ backgroundColor: bgHoverColor }}
                  icon={<Like color={svgColor} />}
                />
              }
            />
            <NotificationIcon
              top={0}
              right={0}
              fontSize="0.7rem"
              fontWeight="bold"
              number={answers.length}
              icon={
                <IconButton
                  aria-label="Chat in this thread"
                  border="1px"
                  borderColor={iconBorderColor}
                  size="lg"
                  borderRadius="xl"
                  bgColor="transparent"
                  _hover={{ backgroundColor: bgHoverColor }}
                  icon={<ChatFill color={svgColor} />}
                />
              }
            />
          </>
        ) : null}
      </Wrap>
      <Flex flexDirection="column">
        <Flex flexDirection="column">
          <Text flex={1} fontSize="1rem" fontWeight="light">
            {userName}
          </Text>
          <Text as="span" fontSize="xs" fontWeight="light">
            {seconds} ago
          </Text>
        </Flex>
        {!noHeading ? (
          <Heading
            fontWeight="medium"
            fontSize="2xl"
            mb={3}
            mt={2}
            cursor="pointer"
          >
            {title}
          </Heading>
        ) : null}

        <Text
          color={textColor}
          fontWeight="300"
          marginTop={4}
          cursor="pointer"
          noOfLines={4}
        >
          {description}
        </Text>

        <Flex direction="column" marginTop={4}>
          <Emo />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Question;
