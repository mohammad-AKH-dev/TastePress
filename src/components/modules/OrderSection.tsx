import React from "react";
import Button from "./Button";

function OrderSection() {
  return (
    <section className="order-section py-24 px-[3rem] sm:px-[6rem]">
      <div className="order-section__content mx-auto container grid grid-cols-1 md:grid-cols-2 bg-[#F4CACD] rounded-[10px]">
        <div className="order-section__content-left overflow-hidden rounded-[10px]">
          <img
            src="/images/order-section.jpg"
            className="object-cover w-full h-full max-h-[310px] transition-all hover:scale-[1.2] rounded-[10px]"
          />
        </div>
        <div className="order-section__content-right flex flex-col items-center justify-center max-[520px]:px-0 max-[520]:py-6 p-[2rem] md:p-0 ">
          <h3 dir="rtl" className="order-section__content-right__title max-sm:text-[24px] max-md:text-[28px] max-[880px]:text-center
           max-[880px]:p-3 max-[880px]:text-[22px] text-[25px] lg:text-[28px] font-extraBold">
            سفارش غذای تازه، همین حالا!
          </h3>
          <p dir="rtl" className="order-section__content-right__paragraph mx-auto max-md:text-[16px]
           max-[880px]:text-[13px] md:text-[14px] lg:text-[16px] max-w-[400px] max-[880px]:mb-4 max-[880px]:mt-0  mb-[2.5rem] mt-[1.5rem] px-[2rem] lg:px-[1.5rem] text-[#000000]">
            "تنها با چند کلیک غذای مورد علاقه‌ات را انتخاب کن و در کوتاه‌ترین
            زمان درب منزل تحویل بگیر.
          </p>
          <div className="order-section__content-right__buttons max-[880px]:w-full max-[880px]:mb-4
          max-[880px]:px-6 max-[880px]:gap-y-4 flex flex-wrap sm:flex-row max-md:flex-row max-[880px]:flex-col items-center justify-center  gap-x-9">
              <Button title="سفارش غذا" href="/menu" style="max-[880px]:w-full bg-red text-white rounded-[7px] 
              py-[9px] px-[28px] lg:px-[33px] transition-all hover:bg-white hover:text-red"/>
              <Button title="مشاهده منو" href="/menu" style="max-[880px]:w-full bg-white text-red rounded-[7px] 
              py-[9px] px-[28px] lg:px-[33px] transition-all hover:bg-red hover:text-white"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSection;
