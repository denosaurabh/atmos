import {
  Heading,
  Text,
  Wrap,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  ListIcon,
} from '@chakra-ui/react';

import CheckBoxChecked from '@icons/checkboxChecked';
import { BottomContentI } from '@lib/pages/course';

const BottomContent = ({
  inside,
  content,
  description,
  requirnments,
}: BottomContentI) => {
  return (
    <Wrap marginTop={16} spacing={16} direction="column" padding={2}>
      <ContentSection title="What's Inside">
        <UnorderedList
          fontSize="lg"
          fontWeight="light"
          listStylePosition="inside"
        >
          {inside.map((el, i) => (
            <ListItem key={i}>{el}</ListItem>
          ))}
        </UnorderedList>
      </ContentSection>

      <CourseContent content={content} />

      <ContentSection title="Description">
        <Text fontSize="1.1rem" lineHeight="tall">
          {description}
        </Text>
      </ContentSection>

      <ContentSection title="Requirnments">
        <UnorderedList
          spacing={2}
          listStyleType="none"
          fontSize="lg"
          fontWeight="normal"
          listStylePosition="inside"
        >
          {requirnments.map((el, i) => (
            <ListItem key={i}>
              <ListIcon as={CheckBoxChecked} />
              {el}
            </ListItem>
          ))}
        </UnorderedList>
      </ContentSection>
    </Wrap>
  );
};

const CourseContent = ({ content }) => {
  return (
    <ContentSection title="Course Content">
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
                  {Object.values(lessons).map((lesson) => {
                    const { title, duration, id } = lesson;

                    return (
                      <AccordionPanel key={id}>
                        <Text isTruncated>{title}</Text>
                        <Text as="span">{duration} mins</Text>
                      </AccordionPanel>
                    );
                  })}
                </AccordionItem>
              );
            })
          : null}
      </Accordion>
    </ContentSection>
  );
};

const ContentSection = ({ title, children }) => {
  return (
    <Wrap spacing={8} direction="column" maxWidth="55rem">
      <Heading fontWeight="semibold">{title}</Heading>
      {children}
    </Wrap>
  );
};

export default BottomContent;
