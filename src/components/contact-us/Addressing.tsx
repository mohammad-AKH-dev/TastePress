import React from "react";

function Addressing() {
  return (
    <section  className="adressing-section mt-16 py-9 bg-[#f2f2f2]">
      <div
        className="adressing-section__content container mx-auto px-[1rem]"
      >
        <h4 dir="rtl" className="adressing-section__content-title text-[28px] font-bold">
          مسیریابی
        </h4>
        <div className="adressing-section__content-wrapper mt-12 grid grid-cols-1 gap-y-[2rem] sm:gap-y-0 sm:grid-cols-2 gap-x-[2rem]">
          <div className="adressing-section__content-left">
            <img src="/images/map.jpg" alt="map" className="rounded-[5px] border border-[#C2C2C2] w-full h-[279px] object-cover" />
          </div>
          <div dir="rtl" className="adressing-section__content-right flex flex-col justify-center lg:pr-[4rem] gap-y-[54px] font-medium">
             <div className="adress flex items-center  gap-x-3">
                <img src="/images/icons/map.svg" className="w-[24px] h-[24px]"/>
                <p className="adress-paragraph max-w-[280px]">تجریش,خیابان غفاری,روبه روی بیمارستان جم تهران</p>
             </div>
             <div className="phone flex  gap-x-3">
                <img src="/images/icons/phone.svg" className="w-[24px] h-[24px]"/>
                <p className="adress-phone">02165254135</p>
             </div>
             <div className="email flex  gap-x-3">
                <img src="/images/icons/message.svg" className="w-[24px] h-[24px]"/>
                <p  className="adress-email">rahahabibi300@gmail.com</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Addressing;
