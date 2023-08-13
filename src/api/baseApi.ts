import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../store/store";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:8080/api",
    prepareHeaders: (headers,) => {
      headers.set("Accept", "application/json");
      // const { user } = getState() as RootState;
      // const { token } = (getState() as RootState).user;
      const token = import.meta.env.VITE_API_TOKEN;

      headers.set("Authorization", `Bearer ${token ? token : ""}`);

      return headers;
    },
    credentials: "include",
  }),
  tagTypes: [
    "Projects",
    "Bio",
    "Blogs",
  ],
  endpoints: () => ({}),
});

export default baseApi;
