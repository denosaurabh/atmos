import { Flex, Divider } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import useSWR from 'swr';

import Page from '@layouts/page';
import { TopLeft, TopRight, BottomContent } from '@shared/course';

import { apiClient } from '@utils';

const Course = ({ course, courseId }) => {
  const { data } = useSWR(`/api/courses/${courseId}`, { initialData: course });

  if (!data) return <h1>Loading....</h1>;

  console.log(data.data);

  const {
    title,
    instructor,
    subdescription,
    learners_number,
    description,
    content,
    inside,
    requirnments,
  } = data.data;

  return (
    <Page>
      <Flex flexDirection={{ base: 'column', lg: 'row' }}>
        <TopLeft
          title={title}
          instructor={instructor}
          subDescription={subdescription}
          learners_number={learners_number}
        />
        <Divider
          colorScheme="grey"
          paddingX={{ base: 0, lg: 4, ml: 8 }}
          orientation="vertical"
        />
        <TopRight data={data} />
      </Flex>

      <BottomContent
        description={description}
        content={content}
        inside={inside}
        requirnments={requirnments}
      />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const courseId = context.query.uid;

  if (!courseId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const res = await apiClient.get(`/courses/${courseId}`);
  console.log(res);

  if (!res.data) {
    return {
      notFound: true,
      courseId: context.query.uid,
    };
  }

  return {
    props: {
      course: res.data,
      courseId: context.query.uid,
    },
  };
};

export default Course;
