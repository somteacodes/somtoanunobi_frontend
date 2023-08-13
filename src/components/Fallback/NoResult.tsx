import { Link } from "react-router-dom";

const NoResult = ({title,subtitle,description,link, linkLabel}:{title:string, subtitle?:string,description:string, link?:string, linkLabel?:string}) => {
  return (
    <main className=" flex justify-center  items-center w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
         {subtitle}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-2 text-base text-gray-500">
          {description}
        </p>
        {link && <div className="mt-6">
          <Link
            to={link}
            className="text-base font-medium text-primary-600 hover:text-primary-500"
          >
            {linkLabel} 
          </Link>
        </div>}
      </div>
    </main>
  );
};

export default NoResult;
