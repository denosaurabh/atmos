import { useRef } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";

import Page from "@layouts/page";
import { FocusableElement } from "@chakra-ui/utils";

import { RightContent, ContentDrawer, Video } from "@shared/course";

import { CourseLearningProvider } from "@contexts/pages/courseLearning";

const Lecture = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | FocusableElement>();

  return (
    <Page>
      <Flex>
        <CourseLearningProvider>
          <Video ref={btnRef} onOpen={onOpen} />

          <Flex
            direction="column"
            flex={1}
            display={{ base: "none", ml: "flex" }}>
            <RightContent />
          </Flex>

          <ContentDrawer onClose={onClose} isOpen={isOpen} ref={btnRef} />
        </CourseLearningProvider>
      </Flex>
    </Page>
  );
};

export default Lecture;
