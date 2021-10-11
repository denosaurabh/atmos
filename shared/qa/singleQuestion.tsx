import { Heading, Flex } from '@chakra-ui/react';
import { Question } from '@components';

import { useQA } from '@contexts/pages/qa';

const SingleQuestion = () => {
  const { question } = useQA();
  const { loading, data } = question;

  return (
    <>
      {!loading ? <Question {...data} /> : null}

      <Heading marginTop="8" fontWeight="medium">
        Answers
      </Heading>
      <Flex direction="column" ml={2} mt={6}>
        {!loading
          ? data.answers.map((answer, i) => (
              <Question {...answer} key={i} noLeftIcons noHeading />
            ))
          : null}
      </Flex>
    </>
  );
};

export default SingleQuestion;
