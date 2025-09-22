import React, { useEffect } from "react";
import {
  useForm,
  type FieldError,
  type SubmitHandler,
  type UseFormRegisterReturn,
} from "react-hook-form";
import Input from "../modules/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g;

const contactFormSchema = yup.object({
  firstName: yup.string().required("وارد کردن نام ضروری است."),
  lastName: yup.string().required("وارد کردن نام خانوادگی ضروری است."),
  email: yup
    .string()
    .matches(emailRegex, "لطفا ایمیل معتبری وارد کنید.")
    .required("وارد کردن ایمیل ضروری است."),
  subject: yup.string().required("وارد کردن موضوع ضروری است."),
  message: yup.string().required("وارد کردن پیام ضروری است."),
});

export type ContactUsInputPropsType = {
  type: string;
  title: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  error: FieldError | undefined;
};

interface ContactUsFormInputsType {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

function ContactUsHeader() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors , isSubmitSuccessful , isSubmitting },
  } = useForm<ContactUsFormInputsType>({
    resolver: yupResolver(contactFormSchema),
  });
  const onSubmit: SubmitHandler<ContactUsFormInputsType> = (data) =>
    console.log(data);
     
    useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [handleSubmit , isSubmitting])

  return (
    <section className="contact-us__header-section overflow-x-hidden sm:overflow-x-visible px-[1rem]">
      <div className="contact-us__header-content container mx-auto px-[1rem] sm:px-0
       grid gap-y-12 md:gap-y-0 grid-cols-1 md:grid-cols-2 place-items-center">
        {/* left section */}
        <div className="contact-us__header-left w-full md:w-fit relative md:pb-[7rem]">
          <img
            src="/images/chefs/chef-2.png"
            className="w-[313px] h-[463px] mx-auto md:mr-0 md:ml-0 relative left-[2rem] md:left-0 z-10"
          />
          <div
            className="chef-circle w-[300px] h-[300px] sm:w-[357px] mx-auto md:mr-0 md:ml-0 
            sm:h-[357px] absolute top-[7rem] right-0 left-0
             md:-left-[3rem]  rounded-full 
          bg-gradient-to-b from-[#F5BD91] to-[#FFFFFF]  shadow-[0px_-4px_1px_0px_#00000017_inset]"
          >
            <div className="border border-[#F4A261] w-[322px] h-[322px] 
            sm:w-[372px] sm:h-[372px] rounded-full absolute left-[-2rem] -z-[1]  top-[-2.5rem]"></div>
          </div>
        </div>
        {/* right section */}
        <div dir="rtl" className="contact-us__header-right w-full">
          <form className="contact-us__form" onSubmit={handleSubmit(onSubmit)}>
            <div
              dir="rtl"
              className="inputs-wrapper grid max-[400px]:grid-cols-1 grid-cols-2 gap-y-[2rem] gap-x-[2.5rem]"
            >
              <Input
                title="نام"
                placeholder="رها"
                type="text"
                register={register("firstName")}
                error={errors.firstName}
              />
              <Input
                title="نام خانوادگی"
                placeholder="حبیبی"
                type="text"
                register={register("lastName")}
                error={errors.lastName}
              />
              <Input
                title="ایمیل"
                placeholder="rahahabibi300@gmail.com"
                type="text"
                register={register("email")}
                error={errors.email}
              />
              <Input
                title="موضوع"
                placeholder="پیشنهاد غذا"
                type="text"
                register={register("subject")}
                error={errors.subject}
              />
            </div>
            <label
              dir="rtl"
              htmlFor="#message"
              className="input-label flex flex-col gap-y-2 mt-[2rem]"
            >
              <span className="text-[16px] font-bold">پیام:</span>
              <textarea
                className="input border border-[#E63946] w-full min-h-[175px] max-h-[175px] p-[.8rem] font-bold
           outline-none rounded-[5px] placeholder:text-[16px] text-[16px]
          "
                id="message"
                {...register("message")}
                placeholder="با سلام و وقت بخیر...."
              />
              {
               errors.message?.message && <span className="error text-[12px] mt-0 text-red">
                  {errors.message.message}
                </span>
              }
            </label>
            <button
              type="submit"
              className="bg-red w-[140px] xl:w-[183px] rounded-[6px] 
              mt-[2rem] h-[50px] xl:h-[56px] font-bold text-[18px] flex items-center justify-center
             text-white py-[12px] px-[32px]"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUsHeader;
