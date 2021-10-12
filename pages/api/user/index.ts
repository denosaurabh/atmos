import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@supabase/client';

import Res from '@utils/apiRes';

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  const { user, data, error } = await supabase.auth.api.getUserByCookie(req);

  console.log(user, data, error, req.cookies, '/api/user');

  return Res(res, user, error);
};

export default user;
