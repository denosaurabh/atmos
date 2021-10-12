import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { Flex, Divider } from '@chakra-ui/react';
import useSWR from 'swr';

import { TopLeft } from '@shared/course';

const TopRight = dynamic(() => import('@shared/course/topRight'));
const BottomContent = dynamic(() => import('@shared/course/bottomContent'));

const Course = ({ course }) => {
  const router = useRouter();
  const { data } = useSWR(`/api/courses/${router.query.uid}`, {
    initialData: course,
  });

  if (!data) return <h1>Loading....</h1>;

  console.log(data, data.data, 'course data');

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
    <>
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
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log(context.query);
//   const courseId = context.query.uid;

//   if (!courseId) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   const res = await apiClient.get(`/courses/${courseId}`);
//   console.log(res);

//   if (!res.data) {
//     return {
//       notFound: true,
//       courseId: context.query.uid,
//     };
//   }

//   return {
//     props: {
//       course: res.data,
//       courseId: context.query.uid,
//     },
//   };
// };

export default Course;
