import { useEffect, useState } from 'react';
import { Wrap } from '@chakra-ui/react';

import { MyCourseBoxSkeleton } from '@skeletons';

import MyCourseBox from '@components/myCourseBox';
import PageHeading from '@components/pageHeading';

import { useAuth } from '@contexts/useAuth';

const MyCourses = () => {
  const { user, userLoaded } = useAuth();
  const [{ data, loading: dataLoading }, setData] = useState({
    data: null,
    loading: true,
  });

  useEffect(async () => {
    if (!userLoaded && user) {
      const { boughtCourses } = user;

      const boughtCoursesPromise = boughtCourses.map((id) =>
        db.collection('courses').doc(id).get()
      );

      const boughtCoursesDocs = await Promise.all(boughtCoursesPromise);
      const boughtCoursesData = boughtCoursesDocs.map((doc) => doc.data());

      setData({ data: boughtCoursesData, loading: false });
    }
  }, [user, userLoaded]);

  return (
    <>
      <PageHeading text="My" title="Courses" />

      <Wrap direction="column" spacing={8}>
        {!dataLoading
          ? data.map((data, i) => <MyCourseBox {...data} key={i} />)
          : [...Array(10)].map((_, i) => <MyCourseBoxSkeleton key={i} />)}
      </Wrap>
    </>
  );
};

export default MyCourses;
