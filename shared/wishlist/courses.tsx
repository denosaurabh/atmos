import { Wrap, Heading } from '@chakra-ui/react';
import CourseBox from '@components/courseBox';
import { CourseBoxProvider } from '@contexts/components/courseBox';
import { CourseBoxSkeleton } from '@skeletons';

const WishlistCourses = ({ courses }) => {
  console.log(courses, 'wishlist courses');

  return (
    <Wrap spacing={8} direction="column">
      {courses
        ? courses.map((data, i) => (
            <CourseBoxProvider courseId={data.id} key={i}>
              <CourseBox {...data} />
            </CourseBoxProvider>
          ))
        : [...Array(2)].map((_, i) => <CourseBoxSkeleton key={i} />)}

      {courses && !courses?.length ? (
        <Wrap justify="center" align="center" height="auto" textAlign="center">
          <Heading
            fontWeight="medium"
            fontSize="2xl"
            maxW="3xl"
            lineHeight="tall"
            _dark={{ color: 'white-100' }}
          >
            Empty!
          </Heading>
        </Wrap>
      ) : null}
    </Wrap>
  );
};

export default WishlistCourses;
