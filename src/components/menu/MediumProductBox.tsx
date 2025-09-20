import React from "react";
import Button from "../modules/Button";

type MediumProductBoxPropsType = {
    title: string
    price: number
    path: string
    size: string
}

function MediumProductBox(props:MediumProductBoxPropsType) {
    const {title, path , price } = props
  return (
    <div className="medium-product__box w-[270px] md:w-[277px] h-[347px] bg-[#fff] mx-auto flex flex-col justify-center rounded-[5px]">
      <img src={path} alt={title} className="w-[188px] max-w-[188px] max-h-[200px] h-[200px] mx-auto object-cover translate-y-[1rem]" />
      <div className="product-box__infos flex flex-col items-center justify-center mt-4">
        <h4 className="product-box__infos-title text-[18px] font-bold">
          {title}
        </h4>
        <div className="product-box__order flex flex-wrap md:flex-nowrap items-center justify-between w-full px-6 mt-[2rem]">
          <div className="product-box__price flex items-center gap-x-3">
            <h5 className="text-[32px] font-bold">{price}</h5>
            <span className="font-bold text-[12px]">تومان</span>
          </div>
          <Button
            title="سفارش"
            style="bg-red w-[102px] h-[37px] text-white flex items-center justify-center py-[9px] px-[33px] rounded-[5px]"
          />
        </div>
      </div>
    </div>
  );
}

export default MediumProductBox;
