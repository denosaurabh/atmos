import { createContext, useContext, useEffect, useState } from 'react';

import { useClipboard, useToast } from '@chakra-ui/react';
import { supabase } from '@supabase/client';

import { useAuth } from '@contexts/useAuth';

const CourseBoxContext = createContext({
  onWishlistClick: () => {},
  onShareClick: () => {},
  setHover: () => {},
  isWishlisted: false,
  isHovered: false,
});

export const CourseBoxProvider = ({ courseId, children }) => {
  const { user, userLoaded } = useAuth();

  const [hovered, setHover] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [route, setRoute] = useState(false);

  const { onCopy } = useClipboard(route);
  const toast = useToast();

  const onWishlistClick = async () => {
    const updatedWishlist = !isWishlisted
      ? supabase.firestore.FieldValue.arrayUnion(courseId)
      : supabase.firestore.FieldValue.arrayRemove(courseId);

    try {
      if (!userLoaded && user) {
        await supabase.db
          .collection('users')
          .doc(user.uid)
          .update({ wishlist: updatedWishlist }, { merge: true });

        toast({
          position: 'top',
          title: `Course ${
            !isWishlisted ? 'Added to' : 'Removed from'
          } Wishlist!`,
          status: !isWishlisted ? 'success' : 'warning',
          duration: 4000,
          isClosable: true,
        });
      } else {
        toast({
          position: 'top',
          title: `Please Login/Signup to add this course in your wishlist`,
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.log(err);

      toast({
        position: 'top',
        title: 'Something went wrong while adding to wishlist!',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const onShareClick = () => {
    onCopy();

    toast({
      position: 'top',
      title: 'Course link Copied!',
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
  };

  useEffect(() => {
    if (window) setRoute(`${window.location.href}course/${courseId}`);
  }, []);

  useEffect(() => {
    if (!userLoaded && user) {
      setIsWishlisted(user.wishlist.includes(courseId));
    } else {
      setIsWishlisted(false);
    }
  }, [user, userLoaded]);

  return (
    <CourseBoxContext.Provider
      value={{
        onShareClick,
        onWishlistClick,
        hovered,
        setHover,
        isWishlisted,
      }}
    >
      {children}
    </CourseBoxContext.Provider>
  );
};

export const useCourseBox = () => {
  return useContext(CourseBoxContext);
};
