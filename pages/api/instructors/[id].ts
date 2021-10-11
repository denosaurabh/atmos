import { NextApiRequest, NextApiResponse } from 'next';
import invariant from 'invariant';
import { supabase } from '@supabase/client';
import apiRes from '@utils/apiRes';

const fetchInstructor = async (req: NextApiRequest, res: NextApiResponse) => {
  const instructorId = req.query.id;
  invariant(instructorId, 'Instructor ID is required!');

  const { data, error } = await supabase
    .from('users')
    .select(
      `
      id,
      fullName,
      jobTitle,
      avatar
      `
    )
    .eq('id', instructorId)
    .single();

  apiRes(res, data, error);
};

export default fetchInstructor;
