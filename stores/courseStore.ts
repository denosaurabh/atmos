// import { observable, action, makeObservable } from "mobx";
// import BaseStore from "@stores/baseStore";

// export default class CourseStore extends BaseStore {
//   @observable topData: Map<string, unknown> = new Map();
//   @observable topDataLoading: boolean = false;
//   @observable topDataError: Error | string | null = null;

//   @observable subData: Map<string, unknown> = new Map();
//   @observable subDataLoading: boolean = false;
//   @observable subDataError: Error | string | null = null;

//   constructor() {
//     super();

//     makeObservable(this);
//     this.fetch = this.fetch.bind(this);
//   }

//   @action
//   fetchTopData = async (courseId: string) =>
//     await this.fetch(
//       `/courses/${courseId}/topData`,
//       "topData",
//       "topDataLoading",
//       "topDataError"
//     );

//   @action
//   fetchBottomData = async (courseId: string) =>
//     await this.fetch(
//       `/courses/${courseId}/bottomData`,
//       "subData",
//       "subDataLoading",
//       "subDataError"
//     );
// }
