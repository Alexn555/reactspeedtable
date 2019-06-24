import axios from "axios";

export default class MoviesClient {
  client;
  apiKey = '67aeed398efbb2e1a3d33ea43395c16f';
  locale = 'en-US';
  getPath = ''

  constructor() {
      this.client = axios.create({
          baseURL: "https://api.themoviedb.org/",
          headers: {
              "Content-Type": "application/json"
          }
      });
  }

  async getData(page = 1) {
     return await this.client.get('/3/movie/popular?api_key='+this.apiKey+'&language='+this.locale+'&page='+page)
      .then((response) => {
         return response;
      })
      .catch((error) => {
         console.warn('error ', error);
         return error;
      });
  }

}