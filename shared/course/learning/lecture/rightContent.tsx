import Link from 'next/link';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Heading,
  Text,
  AccordionPanel,
} from '@chakra-ui/react';

import { useCourseLearning } from '@contexts/pages/courseLearning';

const RightContent = () => {
  const { content, courseId } = useCourseLearning();

  return (
    <Accordion flex={1}>
      {content
        ? Object.values(content).map((section, i) => {
            // eslint-disable-next-line no-unused-vars
            const { duration, noOfLessons, title, ...lessons } = section;

            return (
              <AccordionItem key={i}>
                <AccordionButton>
                  <Heading
                    marginRight="auto"
                    fontSize="lg"
                    fontWeight="medium"
                    fontFamily="body"
                  >
                    {title}
                  </Heading>
                  <Text>{duration} hours</Text>
                </AccordionButton>
                {Object.values(lessons).map((lesson, i) => {
                  const { title, duration, id } = lesson;

                  return (
                    <Link
                      href={`/course/${courseId}/learning/lecture/${id}`}
                      key={i}
                    >
                      <AccordionPanel>
                        <Text isTruncated>{title}</Text>
                        <Text as="span">{duration} mins</Text>
                      </AccordionPanel>
                    </Link>
                  );
                })}
              </AccordionItem>
            );
          })
        : null}
    </Accordion>
  );
};

export default RightContent;
