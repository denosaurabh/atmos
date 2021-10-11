import { Button } from "@chakra-ui/react";
import Page from "@layouts/page";

import { QAProvider } from "@contexts/pages/qa";
import { SingleQuestion } from "@shared/qa";

const QAThread = () => {
  return (
    <Page>
      <Button size="sm" variant="light">
        Go back
      </Button>

      <QAProvider>
        <SingleQuestion />
      </QAProvider>
    </Page>
  );
};

export default QAThread;
