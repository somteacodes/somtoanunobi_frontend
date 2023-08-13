import baseApi from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query<Project, string>({
      query: (searchParams) => `/projects${searchParams}`,
      providesTags: ["Projects"],
    }),
    getProjectBySlug: builder.query<Project, string>({
      query: (slug) => `/projects/?filters[slug][$eq]=${slug}&populate=technologies.icon&populate=images`,
      providesTags:  (_result, _error, slug) => [{ type: "Projects", id: slug }],
    }),
  }),
});

export const { useGetProjectsQuery, useGetProjectBySlugQuery } = projectApi;
