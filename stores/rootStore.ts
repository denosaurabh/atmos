// import AuthStore from '@stores/authStore';
// import UIStore from '@stores/uiStore';
// import HomeStore from '@stores/homeStore';
// import CourseStore from '@stores/courseStore';
// import InstructorStore from '@stores/instructorStore';
// import TrendingCoursesStore from '@stores/trendingCoursesStore';
// import CourseQAStore from '@stores/courseQAStore';
// import UserWishlistStore from '@stores/wishlistStore';

// type RootStoreHydration = {
//   auth: AuthStore;
//   ui: UIStore;
//   home: HomeStore;
//   course: CourseStore;
//   instructor: InstructorStore;
//   trending: TrendingCoursesStore;
//   courseQuestions: CourseQAStore;
//   userWishlist: UserWishlistStore;
// };

// class RootStore {
//   auth: AuthStore;
//   ui: UIStore;
//   home: HomeStore;
//   course: CourseStore;
//   instructor: InstructorStore;
//   trending: TrendingCoursesStore;
//   courseQuestions: CourseQAStore;
//   userWishlist: UserWishlistStore;

//   constructor() {
//     this.auth = new AuthStore();
//     this.ui = new UIStore();
//     this.home = new HomeStore();
//     this.course = new CourseStore();
//     this.instructor = new InstructorStore();
//     this.trending = new TrendingCoursesStore();
//     this.courseQuestions = new CourseQAStore();
//     this.userWishlist = new UserWishlistStore(this);
//   }

//   hydrate(data: RootStoreHydration) {
//     if (data.ui) {
//       this.ui.hydrate(data.ui);
//     }

//     if (data.home) {
//       this.home.hydrate(data.home);
//     }

//     if (data.auth) {
//       this.auth.hydrate(data.auth);
//     }
//   }
// }

// export default RootStore;
