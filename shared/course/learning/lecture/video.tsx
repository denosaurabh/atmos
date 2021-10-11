import { useEffect, useRef, forwardRef, LegacyRef } from "react";
import { Box, Button, Flex, Heading, Wrap, IconButton } from "@chakra-ui/react";

import { Bookmark, Plus, Menu } from "@components/icons";

import { useCourseLearning } from "@contexts/pages/courseLearning";

const Video = forwardRef<
  LegacyRef<HTMLButtonElement> | undefined,
  { onOpen: any }
>(({ onOpen }, btnRef) => {
  const { currentLesson } = useCourseLearning();
  const { video, title, duration } = currentLesson;

  const previousUrl = useRef(currentLesson?.video);
  const videoRef = useRef();

  useEffect(() => {
    if (currentLesson) {
      if (
        currentLesson &&
        previousUrl.current !== currentLesson.video &&
        videoRef.current
      ) {
        videoRef.current.load();
        previousUrl.current = currentLesson.video;
      }
    }
  }, [currentLesson]);

  return (
    <Box height="38rem" width={{ base: "100%", ml: "72%" }} marginRight={4}>
      <Flex
        marginBottom={{ base: 1, sl: 8 }}
        alignItems="center"
        display={{ base: "flex", ml: "none" }}>
        <Heading
          marginY={8}
          paddingRight={8}
          fontWeight="medium"
          lineHeight="tall"
          fontSize={{ base: "xl", sl: "2xl", lg: "3xl" }}
          isTruncated>
          Et aspernatur laborum eum nostrum et temporibus.
        </Heading>

        <Button variant="light" ref={btnRef} onClick={onOpen}>
          Change Lesson
        </Button>
      </Flex>

      <video
        ref={videoRef}
        style={{ borderRadius: "1rem", flex: 1, flexGrow: 1, width: "100%" }}
        controls>
        <source src={video} />
        Your browser does not support the video tag.
      </video>

      <Heading
        marginTop={8}
        fontWeight="medium"
        lineHeight="tall"
        display={{ base: "none", ml: "block" }}>
        {title}
      </Heading>

      <Wrap marginTop={8} spacing={4} flexWrap="wrap">
        <Button variant="light" leftIcon={<Bookmark />}>
          Bookmarks
        </Button>
        <Button variant="light" leftIcon={<Plus />}>
          Download
        </Button>
        <IconButton
          variant="light"
          icon={<Menu />}
          aria-label="Video menu"
        />
      </Wrap>
    </Box>
  );
});

Video.displayName = "Content Video";

export default Video;
