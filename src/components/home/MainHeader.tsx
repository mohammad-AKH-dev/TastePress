import React from "react";
import Button from "../modules/Button";

function MainHeader() {
  return (
    <section className="home-page__header bg-[#f3f3f3]">
      <img
        src="/images/main-header-left-bg.png"
        className="max-w-[280px] md:max-w-[350px] max-h-[524px] z-[2] rotate-[-18.87deg]  md:-rotate-[-4.87deg] absolute top-[49px]  md:top-[-35px]
        left-[-163px] md:-left-[158px] xl:-left-[112px]"
      />
      <div className="home-page__header-content pr-0 lg:pr-4 xl:pr-0 relative z-[1] container mx-auto flex flex-col-reverse
      lg:flex-row justify-center w-full">
        {/* header left section */}
        <div className="home-page__left-section overflow-hidden sm:overflow-visible relative w-full lg:w-[50%] mt-[7rem] sm:mt-[12rem] lg:mt-0">
          <div className="circle hidden sm:block sm:w-[360px] w-[200px] rotate-[29deg] sm:rotate-0 h-[200px] lg:w-[460px] sm:h-[360px] 
          lg:h-[460px] absolute rounded-full border-[6px] border-[#F2AAAF] top-[8rem] lg:top-[3.5rem] 
           left-[13.5rem] sm:left-[12.5rem] md:left-[16.5rem] lg:left-[2.5rem] -z-[2]">
            <div className="circles absolute z-10 -right-5 bottom-[-7rem] sm:bottom-[-3rem] lg:bottom-0 w-[150px] h-[150px] bg-[#f3f3f3] rounded-full">
              <div className="small-circle w-[11px] h-[11px] bg-[#F2AAAF] right-24 top-13 md:right-22 md:top-17 absolute rounded-full"></div>
              <div className="small-circle w-[13px] h-[13px] bg-[#F2AAAF] absolute right-18 md:right-17 top-9 md:top-12 rounded-full"></div>
              <div className="small-circle w-[15px] h-[15px] bg-[#F2AAAF] absolute right-12 top-4 md:top-6 rounded-full"></div>
            </div>
          </div>
          <div className="header-left__items rotate-y-[180deg] -rotate-[90deg] sm:rotate-0 sm:rotate-y-0 left-[3rem] md:left-[8rem] lg:left-0 bg-[#f3f3f3] 
          mx-auto sm:mr-0 sm:ml-0 relative top-[-8rem] sm:top-0 -z-1 max-w-[315px] sm:max-w-[400px]">
            <img
              src="/images/header-left-item1.png"
              className="header-left__item1 w-[140px] sm:w-[176px] h-[136px] sm:h-[172px] left-[210px]
               xl:w-[186px] xl:h-[182px] relative top-[30px] xl:left-[180px]"
            />
            <img
              src="/images/header-left-item2.png"
              className="header-left__item2  w-[180px] sm:w-[228px] h-[180px] sm:h-[228px] relative left-[3rem]   sm:left-[1rem] 
             top-[-1rem]  sm:-top-[23px] xl:left-0 xl:top-[-10px]"
            />
            <img
              src="/images/header-left-item3.png"
              className="header-left__item3 w-[160px] sm:w-[207px] min-h-[160px] sm:min-h-[207px] relative -top-[100px] left-[205px]"
            />
             <div className="circle block sm:hidden sm:w-[360px] w-[200px] rotate-[29deg] sm:rotate-0 h-[200px] lg:w-[460px] sm:h-[360px] 
          lg:h-[460px] absolute rounded-full border-[6px] border-[#F2AAAF] top-[7rem] lg:top-[3.5rem] 
           left-[9.5rem] sm:left-[12.5rem] md:left-[16.5rem] lg:left-[2.5rem] -z-[2]">
            <div className="circles absolute z-10 -right-5 bottom-[3.5rem] sm:bottom-[-3rem] rotate-[460deg] lg:bottom-0 w-[150px] h-[150px] bg-[#f3f3f3] rounded-full">
              <div className="small-circle w-[9px] h-[9px] bg-[#F2AAAF] right-37 top-17 md:right-22 md:top-17 absolute rounded-full"></div>
              <div className="small-circle w-[11px] h-[11px] bg-[#F2AAAF] right-33.5 top-8 md:right-22 md:top-17 absolute rounded-full"></div>
              <div className="small-circle w-[13px] h-[13px] bg-[#F2AAAF] absolute right-25 md:right-17 top-0 md:top-12 rounded-full"></div>
              <div className="small-circle w-[15px] h-[15px] bg-[#F2AAAF] absolute right-16 -top-4 md:top-6 rounded-full"></div>
            </div>
          </div>
            {/* <img src="/images/Ellipse 329.png" className="-top-[35rem] left-[20rem] relative"/> */}
          </div>
          <img
            src="/images/header-left-potato.png"
            className="w-[124px] h-[100px] hidden sm:block rotate-[17.63deg] absolute top-1 sm:top-10 lg:top-12 right-[5rem] sm:right-[24rem] md:right-[27rem] lg:right-[-3rem] xl:right-16"
          />
          <img
            src="/images/header-left-paprika.png"
            className="w-[90px] h-[90px] hidden sm:block sm:w-[112.5px] sm:h-[112.5px] absolute right-[6.5rem] sm:right-[24rem] md:right-[5rem] lg:right-[-3rem] xl:right-18 
            bottom-25 sm:bottom-38
             md:bottom-36 rotate-[17.91deg]"
          />
        </div>
        {/* header right section */}
        <div  className="home-page__right-section text-center px-[4rem] sm:px-0 lg:text-right w-full lg:w-[50%] flex flex-col gap-y-6 
        items-center translate-y-16 sm:translate-y-32">
          <h1 className="home-page__right-section-title max-w-[570px] xl:max-w-[500px] text-[35px]
           sm:text-[47px] xl:text-[54px] font-extraBlack lg:text-end ">
            تجربه ای تازه از طعم غذاهای ایرانی و فرنگی
          </h1>
          <p dir="rtl" className="home-page__right-section-paragraph lg:pl-[5rem] w-full lg:text-right max-w-[420px] lg:max-w-none xl:max-w-[494px] xl:text-[18px]">
            با بهترین مواد اولیه غذاهایی سالم و خوشمزه براتون آماده می‌کنیم
            لحظه‌ای خوشمزه رو از دست ندید، همین حالا آنلاین رزرو کنید.
          </p>
        <div className="home-page__right-links flex flex-wrap-reverse sm:flex-nowrap sm:flex-row items-center justify-center lg:justify-end w-full xl:max-w-[494px] gap-y-[1.5rem] sm:gap-x-[2.5rem] xl:gap-x-[3rem] mt-8">
            <Button title="سفارش غذا" style="py-[12px] max-[450px]:px-2 block max-[400px]:min-w-full w-full mx-[4rem] sm:mx-0 sm:w-fit px-[2.8rem] hover:bg-transparent hover:text-red rounded-[5px] bg-red text-white"/>
            <Button title="مشاهده منو" style="py-[12px] max-[450px]:px-2 block max-[400px]:min-w-full w-full mx-[4rem] sm:mx-0 sm:w-fit px-[2.8rem] text-red hover:bg-red hover:text-white bg-transparent rounded-[5px]"/>
        </div>
        </div>
      </div>
    </section>
  );
}

export default MainHeader;
