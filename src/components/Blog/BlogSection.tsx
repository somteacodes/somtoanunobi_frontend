import blogBackground from "../../assets/blog.svg";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section
    className="relative  min-h-[100vh] w-full   p-16
bg-no-repeat bg-cover bg-center bg-green-50
dark:bg-gray-900
"
    // style={{
    //   backgroundImage: `url(${blogBackground})`,
    // }}
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
          <p className="text-lg text-green-700 font-bold
          dark:text-green-200
          ">Care to read</p>

          <p className="text-2xl xl:text-4xl text-gray-900 font-bold capitalize
          dark:text-gray-100
          ">
           The Blog
          </p>
          <p className="text-sm xl:text-base text-gray-600 mt-3
          dark:text-gray-300
          ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            eaque quo dolor quae, 
          </p>
          <button className="
          hidden lg:inline
          bg-green-700 text-white px-4 py-2 rounded-md mt-4
          hover:bg-green-600
          ">
            See all
          </button>
        </div>
      </div>
      {/* right */}
      <div className="lg:w-2/3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <BlogCard key={i} />
          ))}
        </div>
        <button className="
          lg:hidden block w-full
          bg-green-700 text-white px-4 py-2 rounded-md mt-8
          hover:bg-green-600
          ">
            See all
          </button>
      </div>
    </div>
  </section>
  )
}

export default BlogSection