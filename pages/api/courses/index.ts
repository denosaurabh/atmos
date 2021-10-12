import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@supabase/client';
import apiRes from '@utils/apiRes';

const fetchCourses = async (_: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await supabase
    .from('courses')
    .select(
      `
      id,
      title,
      image,
      tags,
      learners_number,
      instructor (
          fullName,
          jobTitle,
          avatar
      )
    `
    )
    .limit(6);

  apiRes(res, data, error);
};

export default fetchCourses;
