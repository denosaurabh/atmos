import { useState } from 'react';

import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { wrap } from 'popmotion';

import {
  Box,
  Tag,
  Heading,
  Wrap,
  Text,
  Button,
  Avatar,
  Flex,
} from '@chakra-ui/react';

import { RightArrow, LeftArrow } from '@components/icons';

const MotionBox = motion(Box);

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const TopSection = () => {
  const images = [
    '/assets/categories/business.webp',
    '/assets/categories/lifestyle.webp',
    '/assets/categories/design.webp',
    '/assets/categories/music.webp',
  ];

  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
        <MotionBox
          position="relative"
          key={`image_${images[imageIndex]}`}
          width="100%"
          height={{ base: '100vh', sl: '30rem' }}
          backgroundImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0), #2A2B2D), url(${images[imageIndex]})`}
          backgroundSize="cover"
          overflow="hidden"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <MotionBox
            position="absolute"
            bottom={{ base: '5%', sl: '10%' }}
            left="5%"
            opacity={1}
          >
            <Box>
              <Tag>Best Selling</Tag>

              <Heading fontSize="3xl" fontWeight="medium" color="white">
                Complete JavaScript Course 2021
              </Heading>

              <Wrap align="center" spacing={4} marginY={3}>
                <Avatar size="xs" src="/assets/avatars/human.png" />
                <Text color="white-700" fontSize="sm" fontWeight="medium">
                  Brianne
                </Text>
              </Wrap>
              <Button>Check Out</Button>
            </Box>
          </MotionBox>

          <MotionBox
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'transparent',
            }}
            key={page}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_: MouseEvent, { offset, velocity }: PanInfo) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          ></MotionBox>

          <Flex
            position="absolute"
            bottom="5%"
            right="5%"
            color="white"
            alignItems="center"
          >
            <LeftArrow onClick={() => paginate(-1)} mr={4} cursor="pointer" />
            <RightArrow onClick={() => paginate(1)} cursor="pointer" />
          </Flex>
        </MotionBox>
      </AnimatePresence>
    </>
  );
};

export default TopSection;
