import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@supabase/client";
import invariant from "invariant";
import apiRes from "@utils/apiRes";

const fetchCourseQuestion = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id: courseId, questionId } = req.query;
  invariant(courseId, "Course ID is required!");
  invariant(questionId, "Question ID is required!");

  const { data, error } = await supabase
    .from("questions")
    .select(
      `
      id,
      courseId,
      title,
      description,
      createdAt,
      responses,
      from (
        fullName,
        avatar
      )
    `
    )
    .eq("courseId", courseId)
    .eq("id", questionId);

  apiRes(res, data, error);
};

export default fetchCourseQuestion;
