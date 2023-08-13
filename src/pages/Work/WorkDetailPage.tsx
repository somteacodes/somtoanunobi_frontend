import { useParams } from "react-router-dom";
import { useGetProjectBySlugQuery } from "../../api/projectApi";
import Skeleton from "react-loading-skeleton";
import dayjs from "dayjs";
import NoResult from "../../components/Fallback/NoResult";

const WorkDetailPage = () => {
  // request data using slug
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);
  const {
    data: work,
    isLoading,
    isFetching,
    isError,
  } = useGetProjectBySlugQuery(slug || "");
  return (
    <>
      {isError ? (
        <NoResult title={"We tried, that's all we can say"} description={""} />
      ) : (
        <div className="py-32 text-gray-800 dark:text-gray-100">
          <div
            className="flex-col flex md:flex-row  justify-center p-16 md:space-x-8 md:space-y-0 space-y-8 items-start
         
      "
          >
            <div className="w-full md:w-1/2">
              {isLoading || isFetching ? (
                <Skeleton width={"100%"} height={500} />
              ) : (
                <img
                  src={
                    work?.data[0]?.attributes.images?.data?.[0]?.attributes?.url
                  }
                  alt=""
                  className="w-full h-96 object-cover rounded-md shadow-lg"
                />
              )}
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex w-full space-x-2">
                <p className="font-bold text-green-700">Works -</p>
                <p className="text-base text-gray-700 dark:text-gray-200">
                  {isLoading || isFetching ? (
                    <Skeleton width={"100%"} height={10} />
                  ) : (
                    `Posted on ${dayjs(
                      work?.data[0]?.attributes.createdAt
                    ).format("DD MMMM YYYY")} ` || ""
                  )}
                </p>
              </div>
              <p className="text-3xl font-bold ">
                {isLoading || isFetching ? (
                  <Skeleton width={"100%"} height={30} />
                ) : (
                  work?.data[0]?.attributes.name || ""
                )}
              </p>
              <p className="text-base text-gray-700  dark:text-gray-200">
                {isLoading || isFetching ? (
                  <Skeleton width={"100%"} height={30} count={4} />
                ) : (
                  work?.data[0]?.attributes.summary || ""
                )}
              </p>
              {/* tech stack */}
              <div className="flex items-center divide-x divide-gray-400  dark:text-gray-200 text-gray-900">
                {work?.data[0]?.attributes?.technologies?.data?.map(
                  (technology: TechnologyEntity) => (
                    <div className="flex space-x-1 items-center px-4">
                      <img
                        src={technology.attributes.icon.data.attributes.url}
                        alt=""
                        className="w-10 h-10 object-contain border rounded-full border-gray-700 p-1"
                      />
                      <p className="text-base 
                      ">
                        {technology.attributes.name}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          {/* description */}
          <div
            className="px-16   text-lg space-y-4"
            dangerouslySetInnerHTML={{
              __html: work?.data[0]?.attributes.description || "",
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default WorkDetailPage;
