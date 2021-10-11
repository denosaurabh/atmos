import axios, { AxiosResponse } from "axios";

class APIClient {
  url: string;

  constructor(url) {
    this.url = url;
  }

  async get(endpoint: string) {
    let res: AxiosResponse;

    try {
      res = await axios({
        method: "get",
        url: this.url + endpoint,
      });

      return { status: res.status, data: res.data, error: res.error };
    } catch (err) {
      return { status: "failed", data: null, error: err };
    }
  }

  async post(endpoint: string, data: object) {
    let res: AxiosResponse;

    try {
      res = await axios({
        method: "post",
        url: this.url + endpoint,
        data,
      });

      return res;
    } catch (err) {
      console.log(err);
    }
  }
}

const url = process.env.URL;
const apiClient = new APIClient(`${url}/api`);

export default apiClient;
