import React from "react";
import type { ClientCommentsPropsType } from "../about-us/ClientComments";

function ClientCommentBox(props: ClientCommentsPropsType) {
  const { profile, name, score, comment } = props;
  return (
    <div className="client-comment__box group transition-all hover:translate-y-[-1.5rem] cursor-pointer
     w-full md:w-[310px] lg:w-[270px] xl:w-[326px] max-[585px]:max-h-[300px] max-[585px]:min-h-[300px] min-[585px]:h-[345px] relative p-[2rem]
      bg-white mx-auto rounded-[5px] border border-[#C2C2C2]">
    <div className="bg-[#f3f3f3] w-[95px] h-[95px] sm:w-[110px] lg:w-[130px] sm:h-[110px] 
    lg:h-[130px] xl:w-[142px] transition-all duration-300 xl:h-[150px] rounded-full 
    flex items-center 
    absolute top-[-2.5rem] right-[-1.5rem] lg:right-[-2.5rem] max-[585px]:group-hover:top-[14.5rem]
     group-hover:top-[17.5rem] sm:group-hover:top-[15rem] 
    group-hover:right-[-1.5rem] lg:group-hover:right-[-1.8rem]
     justify-center border border-[#C2C2C2]">
        <img
          src={profile}
          className="client-comment__profile 
           w-[75px] sm:w-[90px] h-[75px] sm:h-[90px] max-w-[122px] lg:w-[108px] xl:w-[122px] lg:h-[108px]
           xl:h-[130px] rounded-full border border-[#C2C2C2] "
        />
      </div>
      <h4 className="client-comment__name  text-[20px] text-center  sm:text-left transition-all translate-y-[2rem]
       sm:translate-y-0
       sm:group-hover:translate-x-[3rem] md:group-hover:translate-x-[5rem]
       duration-300 font-bold">{name}</h4>
      <p dir="rtl" className="client-comment__desc line-clamp-3 min-[585px]:line-clamp-4 max-[585px]:text-center mmax-[585px]:mx-auto 
       text-ellipsis text-[18px] min-[585px]:max-w-[241px] mt-[3rem] font-medium">{comment}</p>
      <div className="scores flex items-center justify-center gap-x-[1px] mt-[3rem] duration-300 transition-all min-[585px]:group-hover:pr-[5rem]">
        {new Array(score).fill(0).map((item,index) => (
          <img key={index} src="/images/comments/filled-star.png" />
        ))}
        {new Array(5 - score).fill(0).map((item,index) => (
          <img key={index} src="/images/comments/empty-star.png" />
        ))}
      </div>
    </div>
  );
}

export default ClientCommentBox;
