import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@supabase/client";
import invariant from "invariant";
import apiRes from "@utils/apiRes";

const fetchTopDataCourse = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id: courseId } = req.query;
  invariant(courseId, "Course ID is required!");

  const { data, error } = await supabase
    .from("courses")
    .select(
      `
      id,
      title,
      tags,
      instructor (
        avatar,
        fullName,
        jobTitle,
      )
    `
    )
    .eq("id", courseId);

  apiRes(res, data, error);
};

export default fetchTopDataCourse;
