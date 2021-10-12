import { NextApiRequest, NextApiResponse } from 'next';
import Res from '@utils/apiRes';
import { supabase } from '@supabase/client';

const userWishlist = async (req: NextApiRequest, res: NextApiResponse) => {
  const { user, error } = await supabase.auth.api.getUserByCookie(req);
  console.log(user, error, '/api/user/wishlist');

  if (error && !user) {
    return Res(res, 401, error);
  }

  const { data: userData, error: userDataErr } = await supabase
    .from('users')
    .select('wishlist')
    .eq('authId', user.id)
    .single();

  if (userDataErr) {
    return Res(res, 400, error);
  }

  const wishlistCoursesPromise = userData.wishlist.map((id) =>
    supabase
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
      .eq('id', id)
      .single()
  );

  const wishlistCoursesDocs = await Promise.all(wishlistCoursesPromise);
  const wishlistCoursesData = wishlistCoursesDocs.map((doc) => doc.data);

  console.log(wishlistCoursesData, 'api/user/wishlist');

  return Res(res, wishlistCoursesData, error);
};

export default userWishlist;
