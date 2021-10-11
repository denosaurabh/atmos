import { apiClient } from '@utils';

class BaseStore {
  constructor() {}

  fetch = async (url: string, data: string, loading: string, error: string) => {
    this[loading] = true;

    try {
      const { status, data: resData, error: resError } = await apiClient.get(
        url
      );

      if (status === 'failed') {
        console.log('api failed');
      }

      console.log(resData);

      this[data] = resData;
      this[error] = resError;
    } catch (error) {
      this[data] = null;

      this[error] =
        'Something went wrong while getting data! Please try again later.';
    } finally {
      this[loading] = false;
    }
  };
}

export default BaseStore;
