import React, { useState } from "react";
import ActivityBox from "../modules/ActivityBox";

export type ActivityBoxPropsType = {
  id: number;
  title: string;
  count: number;
  additionalChar?: string;
  order?: string;
};

function ActivityStatistics() {
  const [activities, setActivities] = useState<ActivityBoxPropsType[]>([
    { id: 1, title: "تعداد غذاها", count: 120, additionalChar: "+" },
    {
      id: 2,
      title: "مشتریان راضی ",
      count: 98,
      additionalChar: "%",
      order: "order-1",
    },
    { id: 3, title: "سفارش های تحویل داده شده", count: 12245 },
    { id: 4, title: "سابقه فعالیت", count: 6 },
  ]);
  return (
    <section className="activity-statistics__section min-h-[635px] overflow-y-hidden md:overflow-y-visible overflow-x-hidden">
      <div className="activity-statistics__content flex flex-col md:flex-row h-full items-center justify-center container mx-auto">
        {/* left section */}
        <div className="activity-statistics__content-left w-[90%] md:w-[50%]">
          <div className="activities__wrapper shadow-[0px_4px_4px_0px_#00000040] relative p-[2rem] lg:p-0
          top-[1rem] left-0 translate-y-[3rem] sm:translate-y-[6rem] md:translate-y-0
           md:left-[1rem] xl:left-[8rem] rounded-[5px] bg-white sm:w-[500px] lg:w-[714px] max-[415px]:h-full h-[685px]
            sm:h-[551px] mx-auto md:mr-0 md:ml-0 ">
            <div className="activities__boxes grid grid-cols-1 sm:grid-cols-2 sm:px-[1rem] gap-y-[3rem]
             sm:gap-y-[5rem] sm:pt-[2rem] place-items-center">
              {activities.map((activity) => (
                <ActivityBox key={activity.id} {...activity} />
              ))}
            </div>
            <p dir="rtl" className="activity-statistics__paragraph pt-[4rem] 
            sm:pt-[6rem] lg:pt-[8rem] text-black max-w-[520px] lg:max-w-[594px] mx-auto  
            text-[15px] lg:text-[18px] font-medium">
              ما با تجربه طولانی در ارائه غذاهای تازه و متنوع، تلاش می‌کنیم
              بهترین خدمات و تجربه خوشمزه را به مشتریان خود ارائه دهیم. هر روز
              با عشق و دقت، کیفیت غذا و رضایت مشتریان را در اولویت قرار می‌دهیم.
            </p>
          </div>
        </div>
        {/* right section */}
        <div className="activity-statistics__content-right flex  items-center justify-center w-full md:w-[50%]">
          <img
            src="/images/chefs/Chef-no-bg.png"
            className="relative max-[933px]:top-[4.1rem] mx-auto md:mr-0 md:ml-0
             md:left-[3rem] lg:left-[5rem] xl:left-0 top-[4rem] lg:top-[1.7rem]"
          />
        </div>
      </div>
    </section>
  );
}

export default ActivityStatistics;
