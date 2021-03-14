import { api } from "../../mockData/api";

// Util
export function mockFetch() {
  // return () => {
    return new Promise((resolve, reject) => {
      const timeout = () => {
        const error = new Error(
          "We're having trouble retrieving that, please try again later"
        );
        error.code = 500;
        resolve(api)
      };

      // Return promise after timeout
      setTimeout(timeout, 200);
    });
  // };
}
