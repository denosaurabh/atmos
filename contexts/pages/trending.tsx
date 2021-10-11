import { useState, useEffect, useContext, createContext } from "react";
import { supabase } from "@supabase/client";

const TrendingContext = createContext({
  data: undefined,
  loading: true,
  error: null,
});

export const TrendingProvider = ({ children }) => {
  const [trendingCourses, setTrendingCourses] = useState({
    data: undefined,
    loading: true,
    error: null,
  });

  useEffect(async () => {
    setTrendingCourses({ loading: true });

    const trendingCoursesSnap = await db
      .collection("courses")
      .orderBy("learners_number")
      .limit(15)
      .get();

    const trendingCoursesData = trendingCoursesSnap.docs.map((doc) =>
      doc.data()
    );

    setTrendingCourses({ data: trendingCoursesData, loading: false });
  }, []);

  return (
    <TrendingContext.Provider value={trendingCourses}>
      {children}
    </TrendingContext.Provider>
  );
};

export const useTrendingCourses = () => {
  return useContext(TrendingContext);
};
