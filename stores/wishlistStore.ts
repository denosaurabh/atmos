import { observable, action, makeObservable } from "mobx";
import BaseStore from "@stores/baseStore";
import { apiClient } from "@utils";
import RootStore from "./rootStore";

export default class UserWishlistStore extends BaseStore {
  @observable wishlistCourses: object[] | null = null;
  @observable wishlistCoursesLoading: boolean = false;
  @observable wishlistCoursesError: Error | string | null = null;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    super();

    this.rootStore = rootStore;

    makeObservable(this);
    this.fetch = this.fetch.bind(this);
  }

  @action
  fetchWishlistCourses = async () => {
    if (!this.rootStore.auth.authUser) return;

    this.wishlistCoursesLoading = true;

    const userWishlistCoursesIdsArr = this.rootStore.auth.authUser.wishlist;

    const wishlistCoursesArrPromise = userWishlistCoursesIdsArr.map((id: any) =>
      apiClient.get(`/courses/${id}/box`)
    );

    const wishlistCourses: object[] = await Promise.all(
      wishlistCoursesArrPromise
    );

    this.wishlistCourses = wishlistCourses;
  };
}
