import React from "react";

function AboutUsHeader() {
  return (
    <section className="about-us__header-section mb-36">
      <div className="about-us__heaader-content container mx-auto px-[1rem] lg:px-0 flex flex-col sm:flex-row items-center justify-center">
        {/* left section */}
        <div className="about-us__header-left relative w-full sm:w-[50%] lg:w-[45%] xl:w-[40%]">
          <img
            src="/images/support/support-1.jpg"
            className="w-[288px] h-[355px] object-cover mx-auto sm:mr-0 sm:ml-0"
            alt="support-1"
          />
          <img
            src="/images/support/support-2.jpg"
            className=" w-[185px] h-[280px] lg:w-[241px] relative 
            top-[-10rem] mx-auto sm:mr-0 sm:ml-0 lg:h-[330px] sm:absolute rounded-[5px] sm:top-[10rem] lg:top-[6rem] 
           sm:right-4 md:right-0 lg:right-[1rem] z-10 
          "
            alt="support-2"
          />
          <div className=" w-[185px] h-[280px] mx-auto sm:mr-0 sm:ml-0 lg:w-[241px] lg:h-[330px] sm:absolute 
         sm:top-[9rem] 
         relative right-[1rem] top-[-28.5rem] sm:right-8 md:right-[1rem] lg:top-[5rem] rounded-[5px] lg:right-[2rem] bg-white"></div>
        </div>
        {/* right section */}
        <div dir="rtl" className="about-us__header-right flex sm:block flex-col items-center justify-center
         mt-[-22rem] sm:mt-0 w-full sm:w-[50%] lg:w-[45%] xl:w-[40%]">
          <h3 className="about-us__header-right__title font-bold text-[28px]">
            داستان ما
          </h3>
          <p className="about-us__header-right__paragraph font-medium max-w-[439px] text-center sm:text-right text-[16px] lg:text-[18px] sm:max-w-[295px]
           md:max-w-[334px] lg:max-w-[418px] pt-5">
            رستوران ما در سال ۱۳۹۵ توسط تیمی از علاقه‌مندان به غذا و آشپزی اصیل
            ایرانی تأسیس شد. هدف از آغاز این مسیر، ارائه غذاهایی سالم، تازه و
            باکیفیت بود تا تجربه‌ای متفاوت از سفارش آنلاین برای مشتریان ایجاد
            شود. از آن زمان تاکنون، همواره بر نوآوری، طعم اصیل و رضایت مشتریان
            تمرکز داشته‌ایم.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsHeader;
