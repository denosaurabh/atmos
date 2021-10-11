import { useState, useEffect, useContext, createContext } from 'react';
import { supabase } from '@supabase/client';

import { useAuth } from '@contexts/useAuth';
import { doc } from 'prettier';

const WishlistCoursesContext = createContext({
  data: undefined,
  loading: true,
  error: null,
});

export const WishlistCoursesProvider = ({ children }) => {
  const { user, userLoaded } = useAuth();

  const [wishlistCourses, setWishlistCourses] = useState({
    data: undefined,
    loading: true,
    error: null,
  });

  useEffect(async () => {
    if (!userLoaded && user) {
      setWishlistCourses({ loading: true });

      const wishlistCoursesPromise = user.wishlist.map((id) =>
        db.collection('courses').doc(id).get()
      );

      const wishlistCoursesDocs = await Promise.all(wishlistCoursesPromise);

      const wishlistCoursesData = wishlistCoursesDocs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setWishlistCourses({ data: wishlistCoursesData, loading: false });
    }
  }, [user, userLoaded]);

  return (
    <WishlistCoursesContext.Provider value={wishlistCourses}>
      {children}
    </WishlistCoursesContext.Provider>
  );
};

export const useWishlistCourses = () => {
  return useContext(WishlistCoursesContext);
};
