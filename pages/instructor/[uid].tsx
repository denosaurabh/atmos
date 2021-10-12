import { GetServerSideProps } from 'next';
import { Image, Button, Wrap } from '@chakra-ui/react';
import useSWR from 'swr';

import Page from '@layouts/page';
import Message from '@icons/message';
import Profile from '@icons/profile';

import { InstructorBox, TabsContent } from '@shared/instructor';
import { apiClient } from '@utils';

const Instructor = ({ instructor, instructorId }) => {
  const { data } = useSWR(`/api/instructors/${instructorId}`, {
    initialData: instructor,
  });

  const { id, avatar, fullName, jobTitle } = data.data;

  return (
    <Page>
      <Image
        htmlWidth="100%"
        htmlHeight="20rem"
        width="100%"
        height="20rem"
        objectFit="cover"
        src="/assets/courses/course.png"
      />

      <InstructorBox
        id={id}
        avatar={avatar}
        fullName={fullName}
        jobTitle={jobTitle}
        verified={true}
      />

      <TabsContent />

      <Wrap
        spacing={4}
        visibility={{ base: 'visible', md: 'hidden' }}
        flexDirection="row"
      >
        <Button flexBasis="70%" leftIcon={<Message />}>
          Message
        </Button>
        <Button
          flex={1}
          paddingX="1.5rem"
          leftIcon={<Profile />}
          variant="light"
        />
      </Wrap>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const instructorId = context.query.uid;

  if (!instructorId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const res = await apiClient.get(`/instructors/${instructorId}`);
  console.log(res);

  if (!res.data) {
    return {
      notFound: true,
      instructorId: context.query.uid,
    };
  }

  return {
    props: {
      instructor: res.data,
      instructorId: context.query.uid,
    },
  };
};

export default Instructor;
