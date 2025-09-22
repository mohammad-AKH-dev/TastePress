import React, { useState } from "react";
import Button from "../modules/Button";

function MembershipForm() {
  const [email, setEmail] = useState<string>("");
  return (
    <section className="membership-form__section bg-white my-32">
      <div className="membership-form__content container mx-auto relative bg-bg-light-section overflow-hidden text-center max-[400px]:p-20 p-24 rounded-[10px]">
        <h2 className="membership-form__title text-[32px] font-extraBold">
          عضو خانواده‌ی خوش‌طعم ما شوید
        </h2>
        <p dir="rtl" className="membership-form__paragraph pt-4 text-[#000000] mx-auto max-w-[418px]">
          با عضویت در خبرنامه ما، همیشه از تازه‌ترین اخبار رستوران، معرفی منوی
          جدید، پیشنهادها و تخفیف‌های ویژه مطلع شوید.
        </p>
        <form
          action={"#"}
          className="membership-form flex flex-col pb-[2.5rem] sm:pb-0 md:flex-row gap-y-[24px] md:gap-y-0 items-center justify-center gap-x-[24px] mt-[2.5rem]"
        >
          <input
            type="text"
            placeholder="rahahabibi@gmail.com"
            className="border border-red placeholder:font-demiBold placeholder:text-[rgba(51,51,51,0.5)]
             bg-white w-[281px] text-[rgba(51,51,51,0.5)] font-demiBold rounded-[6px] px-[1.5rem] outline-none h-[51px]"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button
            title="ثبت نام"
            style="bg-red text-white rounded-[6px] hover:bg-white hover:text-red w-[281px] md:w-[140px] h-[51px]"
          />
        </form>
        <img
          src="/images/membership-form/Taco-Tuesdays.png"
          className="w-[90px] h-[150px] sm:w-[120px] sm:h-[200px] lg:w-[155px] lg:h-[249px] absolute
       left-[.2rem] rotate-[22.43deg] bottom-[-1.8rem]"
        />
        <img
          src="/images/membership-form/Taco2.png"
          className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] lg:w-[205px]  lg:h-[205px] absolute right-[-1rem] bottom-[-2.3rem]"
        />
        <img src="/images/membership-form/pepper.png" className="w-[40px] h-[66px] max-[400px]:hidden block sm:w-[60px] sm:h-[86px] absolute 
        left-[13rem] xl:left-[19rem] top-[1rem] xl:top-[5.5rem] rotate-[20.92deg]"/>
      </div>
    </section>
  );
}

export default MembershipForm;
