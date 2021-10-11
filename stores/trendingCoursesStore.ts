import { observable, action, makeObservable } from "mobx";
import BaseStore from "@stores/baseStore";

export default class TrendingCoursesStore extends BaseStore {
  @observable trendingCourses: Map<string, unknown> = new Map();
  @observable loading: boolean = false;
  @observable error: Error | string | null = null;

  constructor() {
    super();

    makeObservable(this);
    this.fetch = this.fetch.bind(this);
  }

  @action
  fetchTrendingCourses = async () =>
    await this.fetch(`/courses`, "trendingCourses", "loading", "error");
}
