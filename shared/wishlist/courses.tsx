import { Wrap, Heading } from '@chakra-ui/react';
import { CourseBox } from '@components';
import { CourseBoxSkeleton } from '@skeletons';

import { useWishlistCourses } from '@contexts/pages/wishlist';

const WishlistCourses = () => {
  const { data, loading } = useWishlistCourses();

  return (
    <Wrap spacing={8} direction="column">
      {!loading
        ? data.map((data, i) => <CourseBox {...data} key={i} />)
        : [...Array(10)].map((_, i) => <CourseBoxSkeleton key={i} />)}

      {!loading && !data.length ? (
        <Wrap justify="center" align="center" height="auto" textAlign="center">
          <Heading
            fontWeight="medium"
            fontSize="3xl"
            maxW="3xl"
            lineHeight="tall"
            _dark={{ color: 'white-100' }}
          >
            Just add some Courses in your Wishlist by clicking Heart Icon in a
            course! They will appear here.
          </Heading>
        </Wrap>
      ) : null}
    </Wrap>
  );
};

export default WishlistCourses;
