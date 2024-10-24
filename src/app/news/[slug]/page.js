import Image from "next/image";
import { articles as currentNews } from "../../../json/news.json";

const ChildTrendingNews = async ({ params }) => {
  const articleId = await params;
  const article = currentNews[articleId.slug];
  const relatedArticle = currentNews.filter((n) => n.id < 5)

  return (
    <div className="sm:bg-[url('/images/meal-bg.png')] bg-top bg-no-repeat sm:pb-10 lg:pb-20 mt-10 lg:mt-20">
      <div className="flex gap-8">
        <div className="lg:basis-2/3">
          <h2 className="text-2xl sm:text-5xl xl:text-6xl mb-4">
            {article?.title}
          </h2>
          <p className="text-lg sm:text-2xl xl:text-3xl font-normal">
            March 21, 2023 - {article?.Category}
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 pt-6 sm:mt-8 xl:pt-16">
        <div className="basis-2/3">
          <div className="rounded-[24px] relative">
            <Image
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              alt={article?.title || 'blog'}
              className="w-full object-cover rounded-[24px] "
              width={250}
              height={250}
            />
            <div className="absolute -bottom-8 sm:-bottom-12 xl:-bottom-[60px] font-semibold text-2xl sm:text-5xl xl:text-6xl">
              <div className="bg-white relative w-1/2 pt-3 rounded-tr-[24px] sm:rounded-tr-[40px]">
                <span>Healthy</span>
                <div className="absolute left-[100%] bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_white] w-7 h-7 xl:w-12 xl:h-12"></div>
                <div className="absolute left-[0%] -top-7 sm:-top-12 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_white] w-7 h-7 sm:w-12 sm:h-12"></div>
              </div>
              <div>Eating Habits for Busy Moms</div>
            </div>
          </div>
          <div className="text-sm sm:text-2xl xl:text-3xl font-normal mt-10 sm:mt-24">
            <p className="mb-3 sm:mb-6">{article?.content}</p>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex">
            <div className="basis-3/5 relative bg-[#F4F4F4] rounded-t-[24px] sm:rounded-t-[32px] xl:px-10">
              <div className="absolute left-[100%] bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#F4F4F4] w-12 h-12"></div>
              <div className="text-[#444444] sm:text-xl lg:text-base xl:text-lg text-center font-semibold py-3 sm:py-4">
                More On Our Blog
              </div>
            </div>
          </div>
          <div className="bg-[#F4F4F4] rounded-b-[24px] rounded-tr-[24px] sm:rounded-b-[32px] sm:rounded-tr-[32px] p-3 sm:p-10 lg:p-5 xl:p-7 mb-8">
            {relatedArticle.map((news) => (
              <div key={`relatedArticle-${news.id}`} className="mb-8">
                <div className="relative mb-4">
                  <Image
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    alt="blogs"
                    className="w-full object-cover rounded-[24px] "
                    width={250}
                    height={250}
                  />
                  <a href={`/news/${news.id}`} className="absolute flex justify-center items-center bg-[#F4F4F4] top-0 right-0 rounded-bl-[24px] w-14 h-12">
                    <Image
                      src="/svg/arrow-angled.svg"
                      alt="blog"
                      className="w-10"
                      width={40}
                      height={40}
                    />
                  </a>
                  <div className="absolute right-14 top-0 overflow-hidden before:block before:h-full before:rounded-tr-[40px] before:shadow-[0_0_0_40px_#F4F4F4] w-7 h-7"></div>
                  <div className="absolute right-0 top-12 overflow-hidden before:block before:h-full before:rounded-tr-[40px] before:shadow-[0_0_0_40px_#F4F4F4] w-7 h-7"></div>
                </div>
                <div className="flex justify-between">
                  <div className="text-lg sm:text-2xl lg:text-lg xl:text-xl font-semibold">
                    {news.title}
                  </div>
                  <div className="text-[10px] sm:text-base lg:text-xs">
                    March 21, 2023
                  </div>
                </div>
                <div className="max-sm:text-sm w-60 truncate ...">
                  {news.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildTrendingNews;