import { Text, Flex, Input, useColorModeValue, Button } from '@chakra-ui/react';

import SearchSvg from '@icons/search';
import Page from '@layouts/page';

import { AllQuestions } from '@shared/qa';
import { QAProvider } from '@contexts/pages/qa';

const QA = () => {
  const backgroundColor = useColorModeValue('grey-s-light', 'white-100');

  return (
    <Page>
      <Text marginBottom={3}>Search</Text>
      <QAProvider>
        <Flex alignItems="center">
          <Flex
            alignItems="center"
            backgroundColor={backgroundColor}
            borderRadius="2xl"
            paddingX={4}
            paddingY={1}
            marginRight={4}
            width="70%"
            maxWidth="40rem"
          >
            <SearchSvg marginRight={2} />
            <Input
              size="search"
              backgroundColor="transparent"
              type="text"
              placeholder="Search questions"
              focusBorderColor="none"
            />
          </Flex>

          <Button size="sm" variant="light">
            Post Question
          </Button>
        </Flex>

        <AllQuestions />
      </QAProvider>
    </Page>
  );
};

export default QA;
