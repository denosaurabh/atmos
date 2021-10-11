import { useState, useEffect, useContext, createContext } from "react";
import { supabase } from "@supabase/client";

import { useRouter } from "next/router";

const InstructorContext = createContext({
  loading: true,
  data: undefined,
  error: null,
});

export const InstructorProvider = ({ children }) => {
  const router = useRouter();
  const { uid: instructorId } = router.query;

  const [data, setData] = useState({
    loading: true,
    data: undefined,
    error: null,
  });

  useEffect(async () => {
    setData({ loading: true });

    const instructorDoc = await db.collection("users").doc(instructorId).get();
    const instructorData = instructorDoc.data();

    setData({ data: instructorData, loading: false });
  }, [instructorId]);

  return (
    <InstructorContext.Provider value={data}>
      {children}
    </InstructorContext.Provider>
  );
};

export const useInstructor = () => {
  return useContext(InstructorContext);
};
