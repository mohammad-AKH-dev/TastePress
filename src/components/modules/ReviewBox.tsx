import React from 'react'
import type { CustomerReviewBoxPropsType } from '../home/CustomerReviews'


function ReviewBox(props: CustomerReviewBoxPropsType) {
  
    const {name , profile , img , comment , imgSize , style , imgStyle , img1Style , img2Style} = props

  return (
    <div className={`review-box__wrapper relative flex flex-row-reverse items-center ${style}`}>
       <div className="review max-w-[300px] sm:max-w-[240px] md:max-w-[320px] bg-[#ffffff] p-[12px] py-[20px]
       shadow-[2px_2px_4px_0px_#00000040] pb-[30px] rounded-[5px] relative z-10 flex flex-col items-end justify-center">
         <img src={profile} alt={name} className='w-[80px] h-[80px] absolute -top-13 
          left-8 rounded-full border border-[#DEDEDE] outline-8 outline-orange'/>
         <h5 className='review-customer__name font-bold text-[14px]'>{name}</h5>
         <p dir='rtl' className='review-customer__comment text-[12px] text-right mt-1'>{comment}</p>
       </div>
       <div className={`review-box__images absolute  ${imgSize}`}>
          <img className={`main-img  object-cover absolute  z-1 border border-[#ffffff]
             ${imgSize} ${imgStyle} ${img1Style}`} src={img}/>
          <img className={`bg-img object-cover absolute opacity-[25%]  ${imgSize} ${imgStyle} ${img2Style}`} src={img}/>
       </div>
    </div>
  )
}

export default ReviewBox
