// import { action, observable, makeObservable } from 'mobx';

// export default class UIStore {
//   @observable sidebarExtended: boolean = false;
//   @observable sidebarShow: boolean = false;
//   @observable showCourseLearningSidebar: boolean = false;

//   constructor() {
//     makeObservable(this);
//   }

//   @action
//   setSidebarExtended = (boolean: boolean) => {
//     this.sidebarExtended = boolean;
//   };

//   @action
//   setSidebarShow = (boolean: boolean) => {
//     this.sidebarShow = boolean;
//   };

//   @action
//   setShowCourseLearningSidebar = (boolean: boolean) => {
//     this.showCourseLearningSidebar = boolean;
//   };

//   @action
//   hydrate = (data) => {
//     if (!data) return;

//     this.sidebarExtended = data.sidebarExtended;
//     this.sidebarShow = data.sidebarShow;
//     this.showCourseLearningSidebar = data.showCourseLearningSidebar;
//   };
// }
