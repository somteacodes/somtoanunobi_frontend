import Skeleton from "react-loading-skeleton";
import { useGetProjectsQuery } from "../../api/projectApi";
 
import WorkCard from "./WorkCard";
const WorkSection = () => {
   
  const {
    data: latestProjects,
    isLoading: latestProjectsLoading,
    isFetching: latestProjectsFetching,
    isError: latestProjectsError,
  } = useGetProjectsQuery("?populate=images&populate=technologies.icon&pagination[page]=1&pagination[pageSize]=4"

  );
  return (
    <section
      className="relative  min-h-[100vh] w-full   p-16
  bg-no-repeat bg-cover bg-center bg-white
  dark:bg-gray-800
  "
      //   style={{
      //     backgroundImage: `url(${workBackground})`,
      //   }}
    >
      <div
        className="flex w-full h-full
 flex-col space-x-0 space-y-8
 lg:flex-row lg:space-x-8 lg:space-y-8
 "
      >
        {/* left */}
        <div className="lg:w-1/3 text-left">
          <div
            className="flex flex-col  w-full lg:w-10/12  
          justify-center h-full
            "
          >
            <p
              className="text-lg text-green-700 font-bold
            dark:text-green-200
            "
            >
              Take a look at
            </p>

            <p
              className="text-2xl xl:text-4xl text-gray-900 font-bold capitalize
            dark:text-gray-100
            "
            >
              my works
            </p>
            <p
              className="text-sm xl:text-base text-gray-600 mt-3
            dark:text-gray-300
            "
            >
              This is where I get to showcase some of the projects I have worked
              on, some are in progress, some are completed and some will never
              be completed.
            </p>
            <button
              className="
            hidden lg:inline
            bg-green-700 text-white px-4 py-2 rounded-md mt-4
            hover:bg-green-600
            "
            >
              See all
            </button>
          </div>
        </div>
        {/* right */}
        {
          latestProjectsError && <p>Something went wrong</p>
        }
        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {latestProjectsFetching || latestProjectsLoading ? (
              Array.from({ length: 4 }).map((_, i) => <
              Skeleton height={200}  
              key={i} />)
            ) : (
              latestProjects?.data?.map((project:ProjectEntity) => (
                <WorkCard key={project.id} project={project} />
              ))
            )}
          </div>
          <button
            className="
            lg:hidden block w-full
            bg-green-700 text-white px-4 py-2 rounded-md mt-8
            hover:bg-green-600
            "
          >
            See all
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
