import { Wrap } from '@chakra-ui/react';
import Question from '@components/question';

import { useQA } from '@contexts/pages/qa';

const AllQuestions = () => {
  const { allQuestions } = useQA();
  const { loading, data } = allQuestions;

  return (
    <Wrap direction="column" marginTop={16}>
      {!loading
        ? Object.values(data).map((question, i) => {
            return <Question {...question} key={i} />;
          })
        : null}
    </Wrap>
  );
};

export default AllQuestions;
