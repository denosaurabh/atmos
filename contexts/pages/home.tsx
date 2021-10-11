import { useState, useEffect, useContext, createContext } from "react";
import { supabase } from "@supabase/client";

const HomeContext = createContext({
  topCourses: {
    data: undefined,
    loading: false,
    error: null,
  },
  midCourses: {
    data: undefined,
    loading: true,
    error: null,
  },
  instructors: {
    data: undefined,
    loading: true,
    error: null,
  },
  nextPage: () => {},
  prevPage: () => {},
});

export const HomeProvider = ({ children }) => {
  const [options, setOptions] = useState({
    orderBy: "learners_number",
    currentPage: 0,
    limit: 5,
  });

  const [topCourses, setTopCourses] = useState({
    data: undefined,
    loading: true,
    error: null,
  });

  const [midCourses, setMidCourses] = useState({
    data: undefined,
    loading: true,
    error: null,
  });

  const [instructors, setInstructors] = useState({
    data: undefined,
    loading: true,
    error: null,
  });

  const getCoursesData = (snapshot) => {
    const coursesData = snapshot.docs.map((doc, i, allDocs) => {
      const courseData = doc.data();
      const courseId = doc.id;

      /* First & Last Doc for Pagination */
      if (i === 0) {
        setOptions({
          ...options,
          lastDoc: allDocs[allDocs.length - 1],
          firstDoc: allDocs[0],
        });
      }

      return {
        ...courseData,
        id: courseId,
      };
    });

    return coursesData;
  };

  const nextPage = async () => {
    setMidCourses({ loading: true });

    const nextCoursesSnap = await db
      .collection("courses")
      .orderBy(options.orderBy)
      .startAfter(options.lastDoc)
      .limit(options.limit)
      .get();

    const coursesData = getCoursesData(nextCoursesSnap);
    setMidCourses({ data: coursesData, loading: false });
  };

  const prevPage = async () => {
    setMidCourses({ loading: true });

    const prevCoursesSnap = await db
      .collection("courses")
      .orderBy(options.orderBy)
      .endBefore(options.firstDoc)
      .limitToLast(options.limit)
      .get();

    const coursesData = getCoursesData(prevCoursesSnap);
    setMidCourses({ data: coursesData, loading: false });
  };

  useEffect(async () => {
    setMidCourses({ loading: true });

    const midCoursesSnap = await db
      .collection("courses")
      .orderBy(options.orderBy)
      .limit(options.limit)
      .get();

    const midCoursesData = getCoursesData(midCoursesSnap);

    setMidCourses({ data: midCoursesData, loading: false });
  }, []);

  useEffect(async () => {
    setInstructors({ loading: true });

    const instructorsRef = db.collection("users").limit(6);

    const instructorSnapshot = await instructorsRef.get();
    const instructorsData = instructorSnapshot.docs.map((doc) => doc.data());

    setInstructors({ data: instructorsData, loading: false });
  }, []);

  return (
    <HomeContext.Provider
      value={{ topCourses, midCourses, instructors, nextPage, prevPage }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => {
  return useContext(HomeContext);
};
