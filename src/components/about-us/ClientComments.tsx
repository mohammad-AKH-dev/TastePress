import React, { useState } from "react";
import SectionHeader from "../modules/SectionHeader";
import ClientCommentBox from "../modules/ClientCommentBox";

export type ClientCommentsPropsType = {
  id: number
  name: string
  comment: string
  score: number
  profile: string
}

function ClientComments() {
  const [clientComments, setClientComments] = useState<ClientCommentsPropsType[]>([
    {
      id: 1,
      name: "فاطمه زهرا براتی",
      comment:
        "من چند بار اینجا غذا خوردم، همیشه کیفیت ثابت و خوب بوده. فقط ای کاش پارکینگ اختصاصی هم داشتید.",
      score: 4,
      profile: '/images/comments/comment-1.jpg'
    },
    {
      id: 2,
      name: "علی زارعی",
      comment:
        "من برای مهمونی خانوادگی رزرو کردم، همه راضی بودن. محیط تمیز و مرتب بود، فقط خدمات می‌تونست سریع‌تر باشه.",
      score: 4,
      profile: '/images/comments/comment-2.jpg'
    },
    {
      id: 3,
      name: "ماریا حجتی",
      comment:
        "کاری مرغ رو سفارش دادم، خیلی خوش‌طعم و ادویه‌هاش عالی بودن فقط یکم تندتر از چیزی بود که انتظار داشتم.",
      score: 4,
      profile: '/images/comments/comment-3.jpg'
    },
  ]);
  return (
    <section className="client-comments__section bg-[#f3f3f3]">
      <div className="client__comments__content container mx-auto px-[2rem] lg:px-[3.5rem] py-12">
        <SectionHeader href="/about-us" title="نظرات مشتریان" />
        <div className="client-comments grid max-[585px]:grid-cols-1 grid-cols-2 gap-x-[3rem] gap-y-[5rem] lg:gap-y-0 lg:grid-cols-3 
         lg:gap-x-[3rem] xl:gap-x-[6rem] py-[4rem]">
          {
            clientComments.map(comment => <ClientCommentBox key={comment.id} {...comment}/>)
          }
        </div>
      </div>
    </section>
  );
}

export default ClientComments;
