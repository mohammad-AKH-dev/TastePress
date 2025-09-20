import React, { useState } from "react";
import BlogLink from "./BlogLink";
import BlogBox from "./BlogBox";
import PaginatedItems from "../modules/Pagination";

export type BlogLinkBoxPropsType = {
  id: number;
  title: string;
  path: string;
};

export type BlogBoxPropsType = {
  id: number;
  title: string;
  description: string;
  path: string;
  author: {
    name: string;
    profile: string;
  };
  created_at: string;
};

function Blogs() {
  const [blogLinks, setBlogLinks] = useState<BlogLinkBoxPropsType[]>([
    {
      id: 1,
      title: "امپانادا آرژانتین",
      path: "/images/bloglinks/Argantina-empanada.jpg",
    },
    {
      id: 2,
      title: "بوبوتی آفریقایی",
      path: "/images/bloglinks/African-bubuti.jpg",
    },
    {
      id: 3,
      title: "کبه سوریه",
      path: "/images/bloglinks/Pie Tee.jpg",
    },
    {
      id: 4,
      title: "مناکیش لبنان",
      path: "/images/bloglinks/lebonan-manakish.jpg",
    },
  ]);
  const [blogs, setBlogs] = useState<BlogBoxPropsType[]>([
    {
      id: 1,
      title: "رازهای خوشمزه‌ی سوشی",
      path: "/images/blogs/sushi.jpg",
      author: {
        name: "محمد مهابادی",
        profile: "/images/profiles/author-1.jpg",
      },
      description:
        "سوشی یکی از معروف‌ترین غذاهای ژاپنی است که در سراسر جهان طرفداران زیادی دارد. این غذا معمولاً از برنجی خاص و تازه،تهیه می شود.",
      created_at: "30 اردیبهشت 1404",
    },
    {
      id: 2,
      title: "عطر گوشت کبابی شاورما",
      path: "/images/blogs/shaverma.jpg",
      author: {
        name: "یاسین مرادی",
        profile: "/images/profiles/author-2.jpg",
      },
      description:"شاورما غذایی است که با ورقه‌های نازک گوشت مزه‌دار شده و روی سیخ عمودی کباب می‌شود. گوشت برشته‌ی شاورما معمولاً در نان پیتا سرو میشود.",
      created_at: "28 اردیبهشت 1404",
    },
    {
      id: 3,
      title: "خوراک خانگی موساکا",
      path: "/images/blogs/musaka.jpg",
      author: {
        name: "غزاله نصرالهی",
        profile: "/images/profiles/author-3.jpg",
      },
      description: "موساکا غذایی سنتی از یونان است که با لایه‌هایی از بادمجان، گوشت چرخ‌کرده و سس سفید بشامل تهیه می‌شود.",
      created_at: "20 اردیبهشت 1404",
    },
    {
      id: 4,
      title: "خوراک گرم مجاری گولاش",
      path: "/images/blogs/gulash.jpg",
      author: {
        name: "علی ملکی",
        profile: "/images/profiles/author-4.jpg",
      },
      description: "گولاش یک غذای سنتی مجارستان است که با گوشت گاو، سیب‌زمینی، سبزیجات و ادویه مخصوص به نام پاپریکا درست می‌شود.",
      created_at: "14 اردیبهشت 1404",
    },
    {
      id: 5,
      title: "غذای شمال آفریقا کوسکوس",
      path: "/images/blogs/koskus.jpg",
      author: {
        name: "زهرا بابایی",
        profile: "/images/profiles/author-5.jpg",
      },
      description: "کوسکوس یکی از غذاهای سنتی کشورهای مراکش، تونس و الجزایر است. این خوراک از دانه‌های ریز آرد گندم بخارپز تهیه می‌شود.",
      created_at: "5 اردیبهشت 1404",
    },
  ]);
  return (
    <section className="blogs-section ">
      <div className="blogs-section__content mb-24 px-[2rem] md:px-0 container mx-auto flex justify-center flex-col-reverse 
      sm:flex-row sm:justify-end lg:justify-center gap-x-[2rem] lg:gap-x-[7rem]">
        {/* left section */}
        <div className="blogs-section__content-left w-full mt-12 sm:mt-0 sm:w-[50%] md:w-[30%]">
            <div className="blog-section__sticky sticky left-0 top-[2rem] ">

          <h4 className="blogs-content-left__title text-[26px] font-bold text-center">
            مقالات اخیر
          </h4>
          <div className="blog-links__wrapper flex flex-col gap-y-[32px] mt-8">
            {blogLinks.map((blogLink) => (
              <BlogLink key={blogLink.id} {...blogLink} />
            ))}
          </div>
            </div>
        </div>
        {/* right section */}
        <div className="blogs-section__content-right flex flex-col gap-y-14 w-full sm:w-[50%] md:w-[60%]">
            {
                blogs.map(blog => <BlogBox key={blog.id} {...blog}/>)
            }
        </div>
      </div>
      <PaginatedItems itemsPerPage={3}/>
    </section>
  );
}

export default Blogs;
