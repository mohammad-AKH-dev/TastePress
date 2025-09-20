import React from 'react'
import Button from '../modules/Button'

type SmallProductBoxPropsType = {
    title: string
    price: number
    path: string
    size: string
}

function SmallProductBox(props: SmallProductBoxPropsType) {
     const {title , price , path} = props
  return (
    <div className='small-product__box w-[265px] md:w-[293px] h-[315px] bg-[#fff] mx-auto flex justify-center flex-col rounded-[5px]'>
       <img src={path} alt={title} className='w-[162px] max-w-[162px] max-h-[155px] h-[155px]  object-cover mx-auto'/>
       <div className='product-box__infos flex flex-col items-center justify-center mt-4'>
        <h4 className='product-box__infos-title w-full text-center text-[20px] font-bold'>{title}</h4>
        <div className='product-box__order flex flex-wrap md:flex-nowrap items-center justify-between w-full px-6 mt-[2rem]'>
            <div className='product-box__price flex items-center gap-x-3'>
                <h5 className='text-[32px] font-bold'>{price}</h5>
                <span className='font-bold text-[10px]'>تومان</span>
            </div>
            <Button title='سفارش' style='bg-red  w-[102px] h-[37px] text-white flex items-center justify-center py-[9px] px-[33px] rounded-[5px]'/>
        </div>
       </div>
    </div>
  )
}

export default SmallProductBox
