import { Flex, Image, Heading, Button } from "@chakra-ui/react";
import { Number } from "@components";
import { MyCourseBoxI } from "@lib/components";

const MyCourseBox = ({ title, image }: MyCourseBoxI) => {
  return (
    <Flex
      rounded="2xl"
      maxW="4xl"
      height="12rem"
      shadow="xl"
      padding={4}
      paddingRight={8}>
      <Image
        rounded="xl"
        marginRight={6}
        objectFit="cover"
        width="30%"
        src={image}
      />

      <Flex direction="column" justifyContent="space-between">
        <Heading
          width="auto"
          fontFamily="body"
          fontWeight="medium"
          fontSize={{ base: "1.3rem", md: "1.7rem" }}>
          {title}
        </Heading>
        <Number colorScheme="secondary-s-dark">78% completed</Number>
        <Button>Continue Learning</Button>
      </Flex>
    </Flex>
  );
};

export default MyCourseBox;
