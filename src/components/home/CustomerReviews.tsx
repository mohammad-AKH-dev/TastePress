import React, { useState } from "react";
import SectionHeader from "../modules/SectionHeader";
import ReviewBox from "../modules/ReviewBox";

export type CustomerReviewBoxPropsType = {
  id: number;
  name: string;
  comment: string;
  profile: string;
  img: string;
  style: string
  imgSize?: string;
  img1Style: string
  img2Style: string
  imgStyle: string
};

// box-shadow: 0px 4px 4px 0px #00000040;



function CustomerReviews() {
  const [customers, setCustomers] = useState<CustomerReviewBoxPropsType[]>([
    {
      id: 1,
      name: "رها حبیبی",
      comment:
        "سفارش اولم بود، خیلی راحت ثبت شد. بسته‌بندی هم تمیز بود. فقط ای کاش دسرهای بیشتری تو منو داشتید",
      profile: "/images/profiles/customer-1.jpg",
      img: "/images/reviews/review-1.jpg",
      style: 'justify-center sm:justify-start',
      imgSize: 'w-[160px] h-[180px] sm:w-[170px] md:w-[192px] xl:w-[240px] sm:h-[230px] xl:h-[280px]',
      img1Style: 'shadow-[0px_4px_4px_0px_#00000040] top-[5rem] left-[4.5rem] sm:top-[1rem] sm:left-[-10.5rem] md:top-[6rem] lg:top-[3rem] md:left-[-6.5rem] lg:-left-[11.5rem] xl:-left-[18rem]',
      img2Style: 'top-[5.5rem] left-[5rem] sm:top-0 sm:left-[-11.5rem] md:left-[-7.5rem] lg:-left-[12.5rem] xl:-left-[19rem] md:top-[6.5rem] lg:top-[1.5rem] ',
      imgStyle: 'rounded-tl-[5px] rounded-tr-[90px] rounded-bl-[85px]  sm:rounded-tr-[121px] sm:rounded-bl-[102px] rounded-br-[5px]'
    },
    {
      id: 2,
      name: "محمد ابراهیمی",
      comment:
        "غذاها واقعاً تازه و خوشمزه بودن. تحویل هم خیلی سریع انجام شد و برخورد پرسنل عالی بود. قطعاً دوباره سفارش میدم",
      profile: "/images/profiles/customer-2.jpg",
      img: "/images/reviews/review-2.jpg",
      style: 'justify-center sm:justify-end',
      imgSize:  'w-[130px] h-[200px] sm:w-[160px] sm:h-[230px]  md:w-[190px]  md:h-[270px] xl:w-[219px] xl:h-[320px]',
      img1Style: 'right-[-3rem] top-[7rem] shadow-[0px_4px_4px_0px_#00000040] sm:top-[2.5rem] sm:right-[-6rem] md:-right-[10rem] lg:-right-[16rem] md:top-[.5rem]',
      img2Style: 'top-[6rem] right-[-4rem] sm:right-[-7rem] sm:top-[1.5rem] md:-right-[11rem] lg:-right-[17rem] md:top-[-1rem]',
      imgStyle: 'rounded-tl-[58px] rounded-br-[58px] sm:rounded-tl-[88px] rounded-tr-[5px] rounded-bl-[5px] sm:rounded-br-[88px]'
    },
    {
      id: 3,
      name: "ملیکا نظری",
      comment:
        "من و خانوادم دیشب غذا گرفتیم، هممون راضی بودیم. مخصوصاً بچه‌ها عاشق پاستاها شدند",
      profile: "/images/profiles/customer-3.jpg",
      img: "/images/reviews/review-3.jpg",
      style: 'justify-center sm:justify-start',
      imgSize: 'w-[130px] h-[150px] sm:w-[170px] md:w-[192px] xl:w-[232px] sm:h-[192px] xl:h-[219px]',
      img1Style: 'left-[-7.5rem] sm:left-[-10.5rem] md:-left-[11.5rem] xl:left-[-18rem] shadow-[0px_4px_4px_0px_#00000040] top-[4rem] lg:top-[.5rem]',
      img2Style: ' left-[-8.5rem] sm:left-[-11.5rem] md:-left-[12.5rem] xl:left-[-19rem] top-[4rem] lg:top-[-.5rem]',
      imgStyle: 'rounded-tl-[5px] rounded-tr-[55px] sm:rounded-tr-[80px] rounded-bl-[55px]  sm:rounded-bl-[80px] rounded-br-[5px]'
    },
  ]);
  return (
    <section className="customer-reviews__section my-16 py-12 pb-28  px-[2rem] bg-[#f3f3f3]">
      <div className="customer-review__content  container mx-auto">
        <SectionHeader title="نظرات مشتریان" href="/" />
        <div className="customer-reviews__wrapper w-full lg:w-[90%] xl:w-[86%] mx-auto mt-28 flex flex-col gap-y-[10rem] sm:gap-y-[4rem]">
          {customers.map((customer) => (
            <ReviewBox {...customer} key={customer.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
