import { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";
import { supabase } from "@supabase/client";

/* * Context for Course Learning Page */
const CourseLearningContext = createContext({
  content: null,
  courseId: null,
  lessonId: null,
  currentLesson: null,
});

export const CourseLearningProvider = ({ children }) => {
  const router = useRouter();
  const { uid: courseId, id: lessonId } = router.query;

  const [content, setContent] = useState(null);
  const [contentArr, setContentArr] = useState(null);
  const [currentLesson, setCurrentLesson] = useState({
    video: "/assets/videos/nature.mp4",
    title: "Introduction",
    // duration:
  });

  useEffect(async () => {
    const contentDoc = await db
      .collection("courses")
      .doc(courseId)
      .collection("learning")
      .doc("content")
      .get();

    setContent(contentDoc.data());
  }, [courseId, lessonId]);

  useEffect(() => {
    if (contentArr) {
      const flattedContentArr = contentArr.flat();

      const lesson = flattedContentArr.find(({ id }) => {
        return id == lessonId;
      });

      // console.log(lesson, 'lesson')
      setCurrentLesson(lesson);
    }
  }, [lessonId]);

  useEffect(() => {
    if (content) {
      const newContentArr = [];
      const sectionsArr = Object.values(content);

      const lessonsArr = sectionsArr.map((data) => {
        const { title, noOfLessons, duration, ...lessons } = data;
        return Object.values(lessons);
      });

      newContentArr.push(lessonsArr);
      setContentArr(newContentArr.flat());

      /* Setting Lesson */
      const flattedContentArr = newContentArr.flat(Infinity);

      const lesson = flattedContentArr.find(({ id }) => {
        return id == lessonId;
      });

      // console.log(lesson, 'lesson')
      setCurrentLesson(lesson);
    }
  }, [content]);

  //   const fechCommunity = async () => {
  //     const communityDoc = db.collection('courses').doc(courseId).collection('');
  //   };

  return (
    <CourseLearningContext.Provider
      value={{ content, courseId, lessonId, currentLesson }}>
      {children}
    </CourseLearningContext.Provider>
  );
};

export const useCourseLearning = () => {
  return useContext(CourseLearningContext);
};
