import { NextApiRequest, NextApiResponse } from "next";
import invariant from "invariant";
import { supabase } from "@supabase/client";
import apiRes from "@utils/apiRes";

const fetchCourse = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id: courseId } = req.query;
  invariant(courseId, "Course ID is required!");

  const { data, error } = await supabase
    .from("courses")
    .select(
      `
      title,
      image,
      tags,
      instructor (
          fullName,
          jobTitle,
          avatar
      )
    `
    )
    .eq("id", courseId);

  apiRes(res, data, error);
};

export default fetchCourse;
