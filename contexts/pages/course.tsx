import { useState, useEffect, useContext, createContext } from "react";
import { supabase } from "@supabase/client";

import { useRouter } from "next/router";

const CourseContext = createContext({
  mainData: {
    loading: true,
    data: undefined,
    error: null,
  },
  subData: {
    loading: true,
    data: undefined,
    error: null,
  },
});

export const CourseProvider = ({ children }) => {
  const router = useRouter();
  const { uid: courseId } = router.query;

  const [mainData, setMainData] = useState({
    loading: true,
    data: undefined,
    error: null,
  });

  const [subData, setSubData] = useState({
    loading: true,
    data: undefined,
    error: null,
  });

  useEffect(async () => {
    setMainData({ loading: true });

    const courseDoc = await db.collection("courses").doc(courseId).get();
    const courseData = courseDoc.data();

    setMainData({ data: courseData, loading: false });
  }, [courseId]);

  useEffect(async () => {
    setSubData({ loading: true });

    const courseSubDataDoc = await db
      .collection("courses")
      .doc(courseId)
      .collection("sub_data")
      .doc("data")
      .get();

    setSubData({ data: courseSubDataDoc.data(), loading: false });
  }, [courseId]);

  return (
    <CourseContext.Provider value={{ mainData, subData }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  return useContext(CourseContext);
};
