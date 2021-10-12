import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseAdmin } from '@supabase/admin';
import Res from '@utils/apiRes';

const userWishlist = async (req: NextApiRequest, res: NextApiResponse) => {
  const { user, data, error } = await supabaseAdmin.auth.api.getUserByCookie(
    req
  );

  console.log(user);

  return Res(res, { user, data }, error);
};

export default userWishlist;
