const BlogCard = () => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow cursor-pointer divide-y divide-gray-300 p-6
    hover:shadow-lg hover:-translate-y-1 transform transition duration-300 ease-in-out
    dark:bg-gray-700
    ">
      <div className="space-y-2 pb-3">
        <p className="text-lg font-bold uppercase">A personal website</p>
        <p className="text-sm text-gray-600 line-clamp-2
        dark:text-gray-300
        ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ex
          repudiandae aliquam voluptatum numquam ratione vero tempore! Ducimus,
          distinctio eveniet!
        </p>
      </div>
      <p className="font-bold pt-1">
        July 12, 2021  
      </p>
    </div>
  );
};

export default BlogCard;
