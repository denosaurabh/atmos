import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@supabase/client";
import invariant from "invariant";
import apiRes from "@utils/apiRes";

const fetchCourseAnswer = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id: courseId, answerId } = req.query;
  invariant(courseId, "Course ID is required!");
  invariant(answerId, "Answer ID is required!");

  const { data, error } = await supabase
    .from("questions")
    .select(
      `
      id,
      courseId,
      description,
      createdAt,
      from (
        fullName,
        avatar
      )
    `
    )
    .eq("courseId", courseId)
    .eq("id", answerId);

  apiRes(res, data, error);
};

export default fetchCourseAnswer;
