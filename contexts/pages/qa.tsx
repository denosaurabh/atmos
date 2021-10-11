import { useState, useEffect, useContext, createContext } from "react";
import { supabase } from "@supabase/client";

import { useRouter } from "next/router";

const QAContext = createContext({
  allQuestions: {
    data: undefined,
    loading: true,
    error: null,
  },
  question: {
    data: undefined,
    loading: true,
    error: null,
  },
});

export const QAProvider = ({ children }) => {
  const router = useRouter();
  const { uid: courseId, questionId } = router.query;
  console.log(courseId, "courseId");

  const [allQuestions, setAllQuestions] = useState({
    data: undefined,
    loading: true,
    error: null,
  });

  const [question, setQuestion] = useState({
    data: undefined,
    loading: true,
    error: null,
  });

  // For allQuestions
  useEffect(async () => {
    setAllQuestions({ loading: true });

    const allQuestionsDocs = await db
      .collection("courses")
      .doc(courseId)
      .collection("qa")
      .get();

    // Making it a Array [key, value]
    const allQuestionsMap = allQuestionsDocs.docs.map((question) => {
      const questionObj = {
        id: question.id,
        ...question.data(),
      };

      return [question.id, questionObj];
    });

    const allQuestionsObj = Object.fromEntries(allQuestionsMap);

    setAllQuestions({ data: allQuestionsObj, loading: false });
  }, [router]);

  // For one Question
  useEffect(async () => {
    if (questionId) {
      setQuestion({ loading: true });

      const questionDoc = await db
        .collection("courses")
        .doc(courseId)
        .collection("qa")
        .doc(questionId)
        .get();

      setQuestion({ data: questionDoc.data(), loading: false });
    }
  }, [questionId, allQuestions]);

  return (
    <QAContext.Provider value={{ allQuestions, question }}>
      {children}
    </QAContext.Provider>
  );
};

export const useQA = () => {
  return useContext(QAContext);
};
