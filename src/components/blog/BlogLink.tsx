import React from "react";
import { Link } from "react-router";
import type { BlogLinkBoxPropsType } from "./Blogs";



function BlogLink(props: BlogLinkBoxPropsType) {
  const { title, path } = props;
  return (
    <div
      className="blog-link__box flex flex-col-reverse md:flex-row items-center justify-center gap-x-3"
    >
      <Link to={'/blog'} className="blog-link__box-content min-w-[111px]">
        <h5 className="blog-link__box-title text-[18px] mt-4 md:mt-0 text-center md:text-right font-bold">{title}</h5>
        <div  className="blog-link__box-link text-[#959595] text-[12px] flex items-center pt-2 justify-center md:justify-end">
          <img src="/images/icons/chevron left.svg" /> برو به مقاله
        </div>
      </Link>
      <Link to={'/blog'} className="blog-link__box-img h-[78px] border border-[#DEDDDD] rounded-[5px]">
        <img
          src={path}
          className="min-w-[144px] max-w-[144px] object-cover h-[78px] transition-all rounded-[5px] hover:brightness-75"
        />
      </Link>
    </div>
  );
}

export default BlogLink;
