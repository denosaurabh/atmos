import useSWR from 'swr';
import PageHeading from '@components/pageHeading';

import { WishlistCourses } from '@shared/wishlist';

// import { WishlistCoursesProvider } from '@contexts/pages/wishlist';

const Wishlist = () => {
  const { data, error } = useSWR('/api/user/wishlist');
  console.log(data, error);

  return (
    <>
      <PageHeading text="My" title="Wishlist" />

      {/* <WishlistCoursesProvider> */}
      <WishlistCourses courses={data?.data} />
      {/* </WishlistCoursesProvider> */}
    </>
  );
};

export default Wishlist;
