import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@supabase/client";
import invariant from "invariant";
import apiRes from "@utils/apiRes";

const fetchCourseQuestions = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id: courseId } = req.query;
  invariant(courseId, "Course ID is required!");

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
    .limit(20);

  apiRes(res, data, error);
};

export default fetchCourseQuestions;
