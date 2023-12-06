import axios from "axios";

const instance = axios.create({
  baseURL: "http://amanimagdi.pythonanywhere.com/",
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
       if (error.response.status === 403) {
        console.error(
          "403 Error: Forbidden. No permission to access this resource"
        );
      } else if (error.response.status === 404) {
        console.error("404 Error: Resource not found");
      } else if (error.response.status === 500) {
        console.error("500 Error: Internal server error");
      } else if (error.response.status === 0) {
        console.error("0 Error: Unable to connect to the server");
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
