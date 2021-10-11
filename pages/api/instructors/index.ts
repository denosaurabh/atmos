import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@supabase/client';
import apiRes from '@utils/apiRes';

const fetchInstructors = async (_: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await supabase
    .from('users')
    .select(
      `
      id,
      verified,
      fullName,
      jobTitle,
      avatar
      `
    )
    .limit(10);

  apiRes(res, data, error);
};

export default fetchInstructors;
