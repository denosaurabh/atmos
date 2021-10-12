import { PageHeading } from '@components';

import { WishlistCourses } from '@shared/wishlist';

import { WishlistCoursesProvider } from '@contexts/pages/wishlist';

const Wishlist = () => {
  return (
    <>
      <PageHeading text="My" title="Wishlist" />

      <WishlistCoursesProvider>
        <WishlistCourses />
      </WishlistCoursesProvider>
    </>
  );
};

export default Wishlist;
