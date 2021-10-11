import { observable, action, makeObservable } from "mobx";
import BaseStore from "@stores/baseStore";
import { apiClient } from "@utils";

export default class CourseQAStore extends BaseStore {
  @observable allQuestions: object[] | null = null;
  @observable allQuestionsLoading: boolean = false;
  @observable allQuestionsError: Error | string | null = null;

  @observable question: object | null = null;
  @observable questionLoading: boolean = false;
  @observable questionError: Error | string | null = null;

  constructor() {
    super();

    makeObservable(this);
    this.fetch = this.fetch.bind(this);
  }

  @action
  fetchAllQuestions = async (courseId: string) =>
    await this.fetch(
      `/courses/${courseId}/questions`,
      "allQuestions",
      "allQuestionsLoading",
      "allQuestionsError"
    );

  @action
  fetchQuestion = async (courseId: string, questionId: string) => {
    this.questionLoading = true;

    const { data: question } = await apiClient.get(
      `/courses/${courseId}/questions/${questionId}`
    );

    const answersIDArr = question.responses;

    const answersArrPromise = answersIDArr.map((id: any) =>
      apiClient.get(`/courses/${courseId}/answers/${id}`)
    );

    const answers = Promise.all(answersArrPromise);

    this.question = {
      ...question,
      answers,
    };

    this.questionLoading = false;
  };
}
