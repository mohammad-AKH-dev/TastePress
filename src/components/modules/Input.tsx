import React from "react";
import type { ContactUsInputPropsType } from "../contact-us/ContactUsHeader";


function Input(props: ContactUsInputPropsType) {
  const { title, register, placeholder, type , error} = props;
  return (
    <div className="input-wrapper">
      <label htmlFor={`#${title}`} className="input-label flex flex-col gap-y-2">
        <span className="text-[16px] font-bold">{title}:</span>
        <input
          className="input border border-[#E63946] w-full p-[.5rem] font-bold text-[#3333334D] placeholder:text-[#3333334D]
          placeholder:font-bold
           pl-[2rem] outline-none rounded-[5px] placeholder:text-[16px] text-[16px]
          "
          type={type}
          id={`#${title}`}
          {...register}
          placeholder={placeholder}
        />
        {
          error && <span className="error text-[12px] mt-0 text-red">{error.message}</span>
        }
      </label>
    </div>
  );
}

export default Input;
