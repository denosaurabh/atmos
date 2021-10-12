// import { observable, action, makeObservable } from 'mobx';
// import BaseStore from '@stores/baseStore';

// export default class HomeStore extends BaseStore {
//   @observable courses: Map<string, object> = new Map();
//   @observable loading: boolean = false;
//   @observable error: Error | string | null = null;

//   constructor() {
//     super();
//     makeObservable(this);

//     this.fetch = this.fetch.bind(this);
//   }

//   @action
//   fetchCourses = async () =>
//     await this.fetch('/courses', 'courses', 'loading', 'error');

//   @action
//   hydrate = async (data) => {
//     if (!data) return;

//     this.courses =
//       data.courses !== null ? data.courses : await this.fetchCourses();

//     this.loading = !!data.loading;
//     this.error = data.error !== null ? data.error : null;
//   };
// }
