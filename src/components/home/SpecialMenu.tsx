import React from "react";
import Button from "../modules/Button";

function SpecialMenu() {
  return (
    <section className="special-menu__section bg-[#f3f3f3] mt-16 p-12 py-24
    relative after:absolute after:right-0 after:top-[2rem] md:after:top-[3rem] after:rounded-[10px]
    after:shadow-[4px_4px_4px_0px_#00000040] after:w-full sm:after:w-[83%] after:h-[90%] md:after:h-[431px] lg:after:h-[454px] after:bg-white ">
      <div className="special-menu__content container mx-auto grid md:grid-cols-2 relative z-[1]">
        {/* left section */}
        <div className="special-menu__left-section hidden md:block overflow-hidden rounded-[8px] shadow-[0px_4px_4px_0px_#00000040]">
          <img className="special-menu__left-img h-full lg:max-h-[358px]  w-full object-cover rounded-[8px] transition-all
          hover:scale-110" src="/images/special-menu.jpg"/>
        </div>
        {/* right section */}
        <div className="special-menu__right-section flex items-center sm:items-end flex-col justify-center text-center sm:text-right gap-y-[32px]">
          <h3 className="special-menu__right-section__title font-extraBold w-full text-[#000000] text-[29px] md:text-[32px]">
            یک تجربه ویژه در انتظار شماست
          </h3>
          <p className="special-menu__right-section__subtitle max-w-[304px] lg:max-w-[430px] text-[15px] md:text-[16px] text-center sm:text-right">
            همین حالا میز خود را رزرو کنید و یک تجربه لذت‌بخش را در رستوران ما
            داشته باشید. پر کردن فرم تنها چند ثانیه طول می‌کشد!
          </p>
           <div className="special-menu__left-section overflow-hidden rounded-[8px] shadow-[0px_4px_4px_0px_#00000040]">
          <img className="special-menu__left-img h-full block md:hidden
           lg:max-h-[358px] max-w-[300px] max-h-[358px] w-full object-cover rounded-[8px] transition-all
          hover:scale-110" src="/images/special-menu.jpg"/>
        </div>
          <Button title="رزرو کنید" style="bg-red text-white hover:bg-white hover:text-red py-[17px] px-[60px] rounded-[6px]"/>
        </div>
      </div>
    </section>
  );
}

export default SpecialMenu;
