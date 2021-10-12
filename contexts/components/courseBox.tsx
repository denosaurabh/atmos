import { createContext, useContext, useEffect, useState } from 'react';

import { useClipboard, useToast } from '@chakra-ui/react';
import { supabase } from '@supabase/client';

import { useAuth } from '@contexts/useAuth';

interface CourseBoxContextI {
  onWishlistClick: () => void;
  onShareClick: () => void;
  setIsHovered: (bool: boolean) => void;
  isWishlisted: boolean;
  isHovered: boolean;
}

const CourseBoxContext = createContext<CourseBoxContextI>({
  onWishlistClick: () => {},
  onShareClick: () => {},
  setIsHovered: () => {},
  isWishlisted: false,
  isHovered: false,
});

export const CourseBoxProvider = ({ courseId, children }) => {
  const { user, userLoaded } = useAuth();

  const [hovered, setHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [route, setRoute] = useState('');

  const { onCopy } = useClipboard(route);
  const toast = useToast();

  const onWishlistClick = async () => {
    if (userLoaded && !user) {
      toast({
        position: 'top',
        title: `Please Login/Signup to add this course in your wishlist`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      });

      return;
    }

    // const updatedWishlist = !isWishlisted
    //   ? supabase.firestore.FieldValue.arrayUnion(courseId)
    //   : supabase.firestore.FieldValue.arrayRemove(courseId);

    let updatedWishlist = [...user?.wishlist];

    if (user?.wishlist.includes(courseId)) {
      updatedWishlist = updatedWishlist.filter((id) => id !== courseId);
    } else {
      updatedWishlist = [...updatedWishlist, courseId];
    }

    try {
      const { data, error } = await supabase
        .from('users')
        .update({ wishlist: updatedWishlist })
        .match({ id: user.id });

      console.log(data, error);

      toast({
        position: 'top',
        title: `Course ${
          !isWishlisted ? 'Added to' : 'Removed from'
        } Wishlist!`,
        status: !isWishlisted ? 'success' : 'warning',
        duration: 4000,
        isClosable: true,
      });

      if (!error) {
        setIsWishlisted(!isWishlisted);
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

  const setHover = (boolean: boolean) => {
    setHovered(boolean);
  };

  useEffect(() => {
    if (window) setRoute(`${window.location.href}course/${courseId}`);
  }, []);

  useEffect(() => {
    if (userLoaded && user) {
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
        isHovered: hovered,
        setIsHovered: setHover,
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
