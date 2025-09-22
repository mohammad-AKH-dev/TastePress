import React, { useState } from "react";
import { Accordion, Placeholder } from "rsuite";
import "rsuite/Accordion/styles/index.css";

type QuestionsType = {
  id: number;
  question: string;
  answer: string;
};

export function AccordionIconElm() {
  return (
    <div className="Accordion-svg w-[45px] h-[45px] flex items-center justify-center border border-[#33333333] rounded-full">
      <img src="/images/icons/chevron down.svg" className="w-[24px] h-[24px]" />
    </div>
  );
}

export function AccordionIconRotatedElm() {
  return (
    <div className="Accordion-svg w-[45px] h-[45px] flex items-center justify-center border border-[#33333333] rounded-full">
      <img
        src="/images/icons/chevron down.svg"
        className="w-[24px] h-[24px] rotate-[180deg]"
      />
    </div>
  );
}

function Questions() {
  const [questions, setQuestions] = useState<QuestionsType[]>([
    {
      id: 1,
      question: "چطور می‌توانم سفارش خود را ثبت کنم؟",
      answer: "سلام ! به صفحه ی هر محصول برید و اون رو به سبد خرید اضافه کنید",
    },
    {
      id: 2,
      question: "زمان تحویل سفارش چقدر است؟",
      answer: "با سلام حداکثر 2 ساعت.",
    },
    {
      id: 3,
      question: "آیا امکان رزرو میز به صوت حضوری هست؟",
      answer: "با سلام؛بله امکان رزرو میز به صورت حضوی نیز هست.",
    },
    {
      id: 4,
      question: "چطور می‌توانم سفارش خود را ثبت کنم؟",
      answer: "سلام! از طریق درگاه پرداخت سایت یا پرداخت در محل.",
    },
  ]);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <section className="questions-section my-12 py-9 bg-[#f2f2f2]">
      <div className="questions-section__content container mx-auto text-center">
        <h4 className="questions-section__title text-[28px] font-bold">
          سوالات متداول
        </h4>
        <p className="questions-section__paragraph text-[14px] max-w-[573px] mx-auto mt-4 px-[1rem] sm:px-0">
          در این بخش پاسخ به پرتکرارترین سوالات شما ارائه شده است. اگر پاسخ سوال
          خود را پیدا نکردید، می‌توانید از طریق فرم تماس با ما با ما در ارتباط
          باشید.
        </p>
        <Accordion
          dir="rtl"
          className="max-w-[663px] mx-auto flex flex-col gap-y-[1rem] mt-10 px-[3rem] sm:px-[2rem] md:px-0 "
        >
          {questions.map((question, index) => (
            <Accordion.Panel
              key={question.id}
              className=" bg-white rounded-[10px]! flex items-start justify-center flex-col "
              header={question.question}
             
              onClick={() => {
                setSelectedItem((prev) => {
                  if (prev === question.id) {
                    return null;
                  } else {
                    return question.id;
                  }
                });
              }}
              caretAs={
                selectedItem === question.id
                  ? AccordionIconRotatedElm
                  : AccordionIconElm
              }
            >
              {question.answer}
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Questions;
