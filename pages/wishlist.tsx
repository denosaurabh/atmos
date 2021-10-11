import Page from '@layouts/page';
import { PageHeading } from '@components';

import { WishlistCourses } from '@shared/wishlist';

import { WishlistCoursesProvider } from '@contexts/pages/wishlist';

const Wishlist = () => {
  return (
    <Page>
      <PageHeading text="My" title="Wishlist" />

      <WishlistCoursesProvider>
        <WishlistCourses />
      </WishlistCoursesProvider>
    </Page>
  );
};

export default Wishlist;
