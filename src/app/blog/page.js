import Image from "next/image";
import { blog as blogPost } from "../../json/blog.json";
import metaDescription from "../../app/constant";

export async function generateMetadata({ params }) {
  const currentMeta = blogPost[0];

  return {
    title: currentMeta.title || "Jeba Blogs",
    description: currentMeta.description || metaDescription,
    keywords: currentMeta.title.split(" ").splice(0, 5),
  };
}

const MainBlog = () => {
  return (
    <main>
      <div>
        <h1 className="text-xl sm:text-3xl lg:text-5xl text-center font-semibold mt-10 sm:mt-14 lg:mt-20">
          Top Trending Post
        </h1>
        <div className="mt-10 sm:mt-16 md:mt-20 pb-10 sm:pb-20 xl:pb-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPost?.map((blog, index) => (
              <a
                key={`${blog.Category}-${blog.id}`}
                href={`/blog/${blog.slug}`}
                className={`relative rounded-[24px] ${
                  blog.theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full object-cover rounded-[24px] "
                  width={250}
                  height={250}
                />
                <div className="absolute top-0 right-0 w-20 h-12 flex justify-center items-center rounded-bl-[32px] bg-white">
                  <Image
                    src="/svg/arrow-angled.svg"
                    alt="blog"
                    className="w-12 sm:w-14 md:w-16 lg:w-12 "
                    width={20}
                    height={20}
                  />
                </div>
                <div className="absolute right-[79px] top-0 overflow-hidden before:block before:h-full before:rounded-tr-[40px] before:shadow-[0_0_0_40px_#FFF] w-7 h-7"></div>
                <div className="absolute right-0 top-12 overflow-hidden before:block before:h-full before:rounded-tr-[40px] before:shadow-[0_0_0_40px_#FFF] w-7 h-7"></div>
                <div className="absolute bottom-0 p-6 xl:p-8">
                  <div className="bg-[#D6C9D4] w-fit px-4 py-1 rounded-3xl text-base sm:text-lg lg:text-base xl:text-lg text-white mb-4">
                    {blog.Category}
                  </div>
                  <div className="sm:text-xl  font-semibold bg-black bg-opacity-50 p-3 rounded-lg">
                    {blog.title}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainBlog;
