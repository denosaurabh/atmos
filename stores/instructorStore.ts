import { observable, action, makeObservable } from "mobx";
import BaseStore from "@stores/baseStore";

export default class IntructorStore extends BaseStore {
  @observable instructor: object | null = null;
  @observable loading: boolean = false;
  @observable error: Error | string | null = null;

  constructor() {
    super();

    makeObservable(this);
    this.fetch = this.fetch.bind(this);
  }

  @action
  fetchInstructor = async (instructorId: string) =>
    await this.fetch(
      `/instructors/${instructorId}`,
      "instructor",
      "loading",
      "error"
    );
}
