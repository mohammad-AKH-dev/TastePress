import React, { useState } from "react";
import ServiceBox from "../modules/ServiceBox";

export type ServiceBoxPropsType = {
  id: number;
  description: string;
  img: string;
  style: string;
};

function OurServices() {
  const [services, setServices] = useState<ServiceBoxPropsType[]>([
    {
      id: 1,
      description: "آماده‌سازی و ارسال غذا در کوتاه‌ترین و زمان ممکن",
      img: "/images/icons/postman.svg",
      style: "from-[#E6394626] to-[#E6394608] border-[#E63946] sm:-translate-x-[120px] min-[905px]:-translate-x-[80px] xl:-translate-x-[55px]  ml-0",
    },
    {
      id: 2,
      description: "کسب اعتماد و لبخند صدها مشتری خوشحال",
      img: "/images/icons/service-support.svg",
      style: "from-[#2A9D8F26] to-[#2A9D8F08] border-[#2A9D8F] sm:translate-x-[120px] min-[905px]:translate-x-[80px]  xl:translate-x-[55px]  mr-0",
    },
    {
      id: 3,
      description: "استفاده از سبزیجات و مواد اولیه تازه و باکیفیت",
      img: "/images/icons/organic-salad.svg",
      style: "from-[#F4A26126] to-[#F4A26108] border-[#F4A261] sm:-translate-x-[120px] min-[905px]:-translate-x-[80px] xl:-translate-x-[55px]  ml-0",
    },
    {
      id: 4,
      description: "تیمی حرفه‌ای از سرآشپزان و پرسنل آموزش‌دیده",
      img: "/images/icons/kit-lab.svg",
      style: "from-[#9D2A9526] to-[#9D2A9508] border-[#9D2A95] sm:translate-x-[120px] min-[905px]:translate-x-[80px] xl:translate-x-[55px]  mr-0",
    },
  ]);
  return (
    <section className="our-services__section bg-white">
      <div className="our-services__content w-[54%] lg:w-[50%] flex flex-col gap-y-10 md:block relative md:static mx-auto py-12">
        <div className="divider w-[450px] max-[745px]:hidden flex top-[20rem] left-0 right-0 max-[800px]:left-[-2rem] min-[800px]:left-[-1rem] lg:left-0 rotate-[-90deg] md:top-[13rem] relative h-[1px] bg-orange mx-auto">
            <div className="circle-1 absolute -top-[7px] right-0 left-[27.5rem] bg-orange w-[15px] h-[15px] rounded-full"></div>
            <div className="circle-2 absolute -top-[7px] right-0 left-[20.5rem] bg-orange w-[15px] h-[15px] rounded-full"></div>
            <div className="circle-3 absolute -top-[7px] right-0 left-[13.5rem] bg-orange w-[15px] h-[15px] rounded-full"></div>
            <div className="circle-4 absolute -top-[7px] right-0 left-[6.5rem] bg-orange w-[15px] h-[15px] rounded-full"></div>
            <div className="circle-5 absolute -top-[7px] right-0 left-0 bg-orange w-[15px] h-[15px] rounded-full"></div>
        </div>
        {
          services.map((service) => (
            <div className="service-box__wrapper ">
                <ServiceBox {...service} key={service.id} />
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default OurServices;
