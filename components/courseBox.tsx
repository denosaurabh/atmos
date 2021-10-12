import Link from 'next/link';
import {
  Flex,
  Tag,
  Heading,
  Text,
  Image,
  IconButton,
  Wrap,
} from '@chakra-ui/react';

import { VideoPlaylist, Share, Heart } from '@components/icons';
import { Number, User } from '@components';

import { useCourseBox } from '@contexts/components/courseBox';

import { CourseBoxI } from '@lib/components';

const CourseBox = ({
  image,
  title,
  instructor,
  learners_number,
  price,
  reviews_number,
  tags,
  id,
}: CourseBoxI) => {
  const { avatar, fullName, jobTitle, verified, id: userId } = instructor;
  // const { currencyCode, currencySymbol, value } = price;

  const {
    onShareClick,
    onWishlistClick,
    setIsHovered,
    isHovered,
    isWishlisted,
  } = useCourseBox();

  const onHoverStart = () => {
    // setIsHovered(true);
  };

  const onHoverEnd = () => {
    // setIsHovered(false);
  };

  return (
    <Flex
      marginY={4}
      maxWidth="3xl"
      height="13rem"
      borderRadius="2xl"
      padding={3}
      shadow="xl"
      transition="0.5s"
      cursor="pointer"
      _hover={{ shadow: '2xl' }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onTouchStart={onHoverStart}
      onTouchCancel={onHoverEnd}
      css={{
        '.course-box__actions': {
          opacity: 0,
        },

        '&:hover, &:active': {
          '.course-box__actions': {
            opacity: 1,
          },
        },
      }}
    >
      <Link href={`/course/${id}`}>
        <Image
          width={{ base: '15%', sl: '35%' }}
          objectFit="cover"
          src={image}
          rounded="2xl"
        />
      </Link>

      <Flex marginLeft={6} flexDirection="column" paddingBottom={1}>
        <Wrap spacing={4} mb={3}>
          {tags.map((value, i) => (
            <Tag variant="1001" key={i}>
              {value}
            </Tag>
          ))}
        </Wrap>
        <Heading
          fontSize={{ base: 'md', sl: 'xl' }}
          fontWeight="semibold"
          fontFamily="body"
        >
          {title}
        </Heading>
        <Wrap marginY={2} spacing={{ base: 1, sl: 4 }}>
          <Number colorScheme="accent01">
            {`${learners_number} learners`}
          </Number>
          <Number colorScheme="accent02">
            {`${reviews_number} reviews (4.9)`}
          </Number>
        </Wrap>
        <Wrap spacing={{ base: 2, sl: 8 }} align="center" marginTop="auto">
          <Flex alignItems="center">
            <Text fontWeight="semibold" marginRight={0.5}>
              $
            </Text>
            <Text marginRight={0.5} fontSize="1.4rem" fontWeight="semibold">
              4.98
            </Text>
            <Text as="sup" fontWeight="light">
              usd
            </Text>
          </Flex>

          <User
            id={userId}
            size="small"
            fullName={fullName}
            jobTitle={jobTitle}
            avatar={avatar}
            verified={verified}
          />
        </Wrap>
      </Flex>
      <Flex
        className="course-box__actions"
        display={{ base: 'none', md: 'flex' }}
        // opacity={isHovered ? 1 : 0}
        marginLeft="auto"
        paddingX={2}
        paddingY={2}
        borderRadius="2xl"
        backgroundColor="primary"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <IconButton
          aria-label="video playlist"
          size="lg"
          borderRadius="xl"
          _hover={{ backgroundColor: 'white-400' }}
          icon={<VideoPlaylist />}
        />
        <IconButton
          aria-label="Add to Wishlist"
          size="lg"
          borderRadius="xl"
          _hover={{ backgroundColor: 'white-400' }}
          icon={<Heart fill={isWishlisted ? 'currentColor' : 'none'} />}
          onClick={onWishlistClick}
        />
        <IconButton
          aria-label="Share this Course"
          size="lg"
          borderRadius="xl"
          _hover={{ backgroundColor: 'white-400' }}
          icon={<Share />}
          onClick={onShareClick}
        />
      </Flex>
    </Flex>
  );
};

export default CourseBox;
