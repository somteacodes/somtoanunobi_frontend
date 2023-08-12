import baseApi from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query<Project, string>({
      query: (searchParams) => `/projects${searchParams}`,
      providesTags: ["Projects"],
    }),
  }),
});

export const { useGetProjectsQuery } = projectApi;
