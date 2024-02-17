// import axios, { AxiosHeaders } from "axios";
// import { BASE_URL } from "./constant";

// // const apiClient = axios.create({
// //     baseURL: "https://gratify.esmagico.net/",
// // });

// const apiClient = axios.create({
//     baseURL: BASE_URL,
// });

// apiClient.interceptors.request.use((req: any) => {
//     (req.headers as AxiosHeaders).set("Content-Type", "application/json");
//     req.headers["Content-Type"] = "application/json";
//     // req.headers["Access-Control-Allow-Origin"] = "*";
//     // req.headers["strict-origin-when-cross-origin"] = "*";
//     return req;
// });

// export { apiClient };

import axios, { AxiosHeaders } from "axios";
import { BASE_URL } from "./constant";

const apiClient = axios.create({
    baseURL: BASE_URL,
});

// Add a request interceptor
apiClient.interceptors.request.use(
    function (config) {
        // Check if FormData is present in the request data
        if (config.data instanceof FormData) {
            // Set Content-Type to 'multipart/form-data'
            config.headers["Content-Type"] = "multipart/form-data";
        } else {
            // Set Content-Type to 'application/json' or any other default content type
            config.headers["Content-Type"] = "application/json";
        }

        // Return the modified config
        return config;
    },
    function (error: any) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// apiClient.interceptors.request.use((req: any) => {

//   (req.headers as AxiosHeaders).set("Content-Type", "application/json");
//   // req.headers["Content-Type"] = "application/json";
//   // req.headers["Access-Control-Allow-Origin"] = "*";
//   // req.headers["strict-origin-when-cross-origin"] = "*";
//   return req;
// });

export { apiClient };
