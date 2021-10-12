import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@supabase/client';
import invariant from 'invariant';
import apiRes from '@utils/apiRes';

const fetchTopDataCourse = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id: courseId } = req.query;
  console.log(courseId, 'course api');

  invariant(courseId, 'Course ID is required!');

  const { data, error } = await supabase
    .from('courses')
    .select(
      `
      id,
      title,
      tags,
      image,
      learners_number,
      instructor (
        avatar,
        fullName,
        jobTitle
      ),
      subDescription,
      description,
      requirnments,
      inside
    `
    )
    .eq('id', courseId)
    .single();

  console.log(data, error, 'course api');

  apiRes(res, data, error);
};

export default fetchTopDataCourse;
