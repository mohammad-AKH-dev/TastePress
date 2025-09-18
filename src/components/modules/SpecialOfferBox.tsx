import React from "react";
import type { SpecialOfferBoxPropsType } from "../home/SpecialOffers";
import Button from "./Button";

function SpecialOfferBox(props: SpecialOfferBoxPropsType) {
  const { title, description, img, href } = props;

  return (
    <div className="special-offer__box overflow-hidden max-[570px]:max-w-[350px]
     mx-auto relative flex flex-col lg:flex-row items-center justify-center min-h-[300px] rounded-[8px] border border-[#ffffff]">
      <img
        src={img}
        alt={title}
        className="special-offer__box-image border border-[#ffffff] xl:border-none w-full lg:w-[50%] h-[300px] top-0 right-0 left-0 rounded-[5px] xl:rounded-0"
      />
      <div className="special-offer__box-infos flex justify-center items-center lg:items-end border 
      border-[#ffffff] xl:border-none rounded-[5px] xl:rounded-0 flex-col relative z-10 w-full lg:w-[50%]
       text-right lg:pr-6 py-6 lg:p-0 xl:p-10 xl:pt-12 bg-white h-full">
        <div className="triangle-topright max-[570px]:right-[4.8rem] max-[570px]:-top-[14rem]!
         max-[700px]:-rotate-[90deg] max-[700px]:top-[-13rem]! max-[700px]:right-[3.8rem] max-sm:border-t-[304px] max-sm:-top-[19rem]
         max-md:top-[-17rem] max-md:border-t-[280px] max-[827px]:right-[7rem] max-[805px]:right-0
         max-[805px]:-top-[18.9rem] max-[805px]:rotate-[-180deg]
         rotate-[-90deg] top-[-13.9rem] right-[7.4rem]  rotate-y-[180deg] lg:rotate-x-0 lg:rotate-y-0
         lg:rotate-0 w-0 h-0 border-t-[302px] border-t-white absolute lg:top-0 lg:-left-[5rem] border-l-[140px]
          lg:border-l-[80px] border-l-transparent"></div>
        <h3 className="special-offer__box-title font-bold text-[20px]">
          {title}
        </h3>
        <p className="special-offer__box-desc text-center lg:text-right font-medium text-[13px] mt-3">
          {description}
        </p>
        <Button
          title="مشاهده"
          href={href}
          style="bg-red text-white hover:bg-white mt-6 hover:text-red py-[12px] lg:ml-[5rem] rounded-[5px] px-[33px]"
        />
      </div>
    </div>
  );
}

export default SpecialOfferBox;
