const WorkCard = ({ project }: { project: ProjectEntity }) => {
  return (
    <div
      className=" rounded-md overflow-hidden shadow bg-white
    dark:bg-gray-700
     cursor-pointer
    hover:shadow-lg hover:-translate-y-1 transform transition duration-300 ease-in-out
    "
    >
      {/* image */}
      <img
        src={
           
          project.attributes.images?.data?.[0]?.attributes?.url
        }
        className="w-full h-48 object-cover"
        alt=""
      />
      {/* content */}
      <div className="p-6 text-center space-y-4">
        <p
          className="font-bold text-xl text-gray-900
        dark:text-gray-50
        "
        >
          {project.attributes.name}
        </p>
        <p
          className="text-gray-600 text-sm
        dark:text-gray-300
        line-clamp-3
        "
        >
          {project.attributes.summary}
        </p>
        <div className="flex space-x-3 justify-center w-full">
          {project.attributes.technologies?.data?.map(
            (technology: TechnologyEntity) => (
              <div
                className="group relative mt-6 h-6 w-6   rounded-full
        cursor-pointer 
        hover:shadow-lg hover:-translate-y-1 transform transition duration-300 ease-in-out
        bg-center bg-cover border-2 border-white
        bg-white
        "
                style={{
                  backgroundImage: `url(${
                    technology.attributes.icon?.data.attributes.url
                  })`,
                }}
                key={technology.id}
              >
                <span className="pointer-events-none absolute -top-7 whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100 text-sm">
                  {technology.attributes.name}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
<div className="p-10"></div>;
export default WorkCard;
