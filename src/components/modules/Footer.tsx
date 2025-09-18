import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router";

function Footer() {
  const [email, setEmail] = useState<string>("");
  return (
    <footer className="footer bg-black p-12 pt-12 text-white">
      {/* desktop and mobile */}
      <div className="footer-content container  max-[430px]:grid-cols-1 mx-auto grid md:hidden xl:grid grid-cols-2 md:grid-cols-3 gap-[2rem] xl:gap-0 xl:grid-cols-4">
        <div className="membership-section text-center flex flex-col gap-y-[18px]">
          <h4 className="membership-section__title text-[17px] font-bold">
            عضویت در خبرنامه
          </h4>
          <p className="membership-section__paragraph">
            با عضویت در خبرنامه رستوران، از جدیدترین پیشنهادها و تخفیف‌ها مطلع
            شوید
          </p>
          <input
            type="text"
            placeholder="rahahabibi@gmail.com"
            className="border border-red placeholder:font-demiBold placeholder:text-[rgba(51,51,51,0.5)]
             bg-white w-full max-w-[240px] mx-auto text-[rgba(51,51,51,0.5)] font-demiBold rounded-[6px] px-[1.5rem] outline-none h-[51px]"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button
            title="ثبت نام کنید"
            style="bg-red text-white rounded-[6px] hover:bg-white hover:text-red w-full max-w-[240px] mx-auto h-[51px]"
          />
        </div>
        <div className="customer-service__section max-[430px]:text-center flex mx-auto text-end flex-col gap-y-[18px]">
          <h4 className="customer-service__section_title text-[17px] font-bold">
            خدمات مشتریان
          </h4>
          <Link to={"/"} className="font-medium text-white pt-[7px]">
            سوالات متداول
          </Link>
          <Link to={"/"} className="font-medium text-white">
            پشتیبانی
          </Link>
          <Link to={"/"} className="font-medium text-white">
            ارتباط با ما
          </Link>
        </div>
        <div className="fast-links__section flex max-[430px]:text-center text-end mx-auto flex-col gap-y-[18px]">
          <h4 className="customer-service__section_title text-[17px] font-bold">
            لینک های سریع
          </h4>
          <Link to={"/menu"} className="font-medium text-white pt-[7px]">
            منو
          </Link>
          <Link to={"/blog"} className="font-medium text-white">
            بلاگ
          </Link>
          <Link to={"/contact-us"} className="font-medium text-white">
            تماس با ما
          </Link>
          <Link to={"/about-us"} className="font-medium text-white">
            درباره ی ما
          </Link>
        </div>
        <div className="connection-ways__section flex max-[430px]:text-center text-end flex-col gap-y-[18px]">
          <p className="connection-ways__section-paragraph leading-[1.7rem] text-[15px]">
            رستوران ما با ارائه غذاهای تازه، سالم و خوش‌طعم، تلاش می‌کند لحظاتی
            خاطره‌انگیز برای شما رقم بزند. کیفیت بالا، احترام به مشتری در دستور
            کار ما است
          </p>
          <div className="phone flex max-[430px]:justify-center flex-row-reverse gap-x-4">
             <span className="text-[17px] font-bold">:تلفن</span>
             <span>02165623545</span>
          </div>
          <div className="email flex max-[430px]:justify-center flex-row-reverse gap-x-4">
             <span className="text-[17px] font-bold">:ایمیل</span>
             <span>rahahabibi@gmail.com</span>
          </div>
          <div className="socials flex items-center max-[430px]:justify-center justify-end gap-x-[10px] mt-2">
             <div className="instagram w-[24px] h-[24px]">
               <img src="/images/icons/instagram.svg" alt="instagram"/>
             </div>
             <div className="youtube w-[24px] h-[24px]">
              <img src="/images/icons/youtube.svg" alt="youtube" />
             </div>
             <div className="facebook w-[24px] h-[24px]">
              <img src="/images/icons/facebook.svg" alt="facebook" />
             </div>
             <div className="telegram w-[24px] h-[24px]">
              <img src="/images/icons/telegram.svg" alt="telegram" />
             </div>
          </div>
        </div>
      </div>
       {/* tablet */}
        <div className="footer-content container  mx-auto hidden md:flex xl:hidden md:flex-wrap md:justify-end 
        md:gap-x-[2.1rem] lg:gap-x-0 lg:justify-start lg:flex-nowrap gap-y-6">
        <div className="membership-section text-center flex flex-col gap-y-[18px] w-[50%] md:w-[30%] lg:w-[50%]">
          <h4 className="membership-section__title text-[17px] font-bold">
            عضویت در خبرنامه
          </h4>
          <p className="membership-section__paragraph">
            با عضویت در خبرنامه رستوران، از جدیدترین پیشنهادها و تخفیف‌ها مطلع
            شوید
          </p>
          <input
            type="text"
            placeholder="rahahabibi@gmail.com"
            className="border border-red placeholder:font-demiBold placeholder:text-[rgba(51,51,51,0.5)]
             bg-white w-full max-w-[240px] mx-auto text-[rgba(51,51,51,0.5)] font-demiBold rounded-[6px] px-[1.5rem] outline-none h-[51px]"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button
            title="ثبت نام کنید"
            style="bg-red text-white rounded-[6px] hover:bg-white hover:text-red w-full max-w-[240px] mx-auto h-[51px]"
          />
        </div>
        <div className="customer-service__section  lg:-translate-x-[35px] flex  text-end flex-col gap-y-[18px] w-[50%] md:w-[30%] lg:w-[50%]">
          <h4 className="customer-service__section_title text-[17px] font-bold">
            خدمات مشتریان
          </h4>
          <Link to={"/"} className="font-medium text-white pt-[7px]">
            سوالات متداول
          </Link>
          <Link to={"/"} className="font-medium text-white">
            پشتیبانی
          </Link>
          <Link to={"/"} className="font-medium text-white">
            ارتباط با ما
          </Link>
        </div>
        <div className="fast-links__section lg:-translate-x-[80px] flex  flex-col text-end gap-y-[18px] w-[50%] md:w-[30%] lg:w-[50%]">
          <h4 className="customer-service__section_title text-[17px] font-bold">
            لینک های سریع
          </h4>
          <Link to={"/menu"} className="font-medium text-white pt-[7px]">
            منو
          </Link>
          <Link to={"/blog"} className="font-medium text-white">
            بلاگ
          </Link>
          <Link to={"/contact-us"} className="font-medium text-white">
            تماس با ما
          </Link>
          <Link to={"/about-us"} className="font-medium text-white">
            درباره ی ما
          </Link>
        </div>
        <div className="connection-ways__section flex text-end flex-col gap-y-[18px] w-[50%] md:w-[30%] lg:w-[50%]">
          <p className="connection-ways__section-paragraph leading-[1.7rem] text-[15px]">
            رستوران ما با ارائه غذاهای تازه، سالم و خوش‌طعم، تلاش می‌کند لحظاتی
            خاطره‌انگیز برای شما رقم بزند. کیفیت بالا، احترام به مشتری در دستور
            کار ما است
          </p>
          <div className="phone flex flex-row-reverse gap-x-4">
             <span className="text-[17px] font-bold">:تلفن</span>
             <span>02165623545</span>
          </div>
          <div className="email flex flex-row-reverse gap-x-4">
             <span className="text-[17px] font-bold">:ایمیل</span>
             <span>rahahabibi@gmail.com</span>
          </div>
          <div className="socials flex items-center justify-end gap-x-[10px] mt-2">
             <div className="instagram w-[24px] h-[24px]">
               <img src="/images/icons/instagram.svg" alt="instagram"/>
             </div>
             <div className="youtube w-[24px] h-[24px]">
              <img src="/images/icons/youtube.svg" alt="youtube" />
             </div>
             <div className="facebook w-[24px] h-[24px]">
              <img src="/images/icons/facebook.svg" alt="facebook" />
             </div>
             <div className="telegram w-[24px] h-[24px]">
              <img src="/images/icons/telegram.svg" alt="telegram" />
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
