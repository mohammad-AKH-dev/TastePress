import React from 'react'
import Button from '../modules/Button'

type LargeProductBoxPropsType = {
    title: string
    price: number
    path: string
    size: string
}
function LargeProductBox(props: LargeProductBoxPropsType) {
    const {title , price , path} = props
  return (
    <div className='medium-product__box w-[283px] md:w-[319px] h-[383px] bg-[#fff] mx-auto flex flex-col justify-center rounded-[5px]'>
       <img src={path} alt={title} className='w-[218px] max-w-[218px] max-h-[218px] h-[218px] mx-auto object-cover'/>
       <div className='product-box__infos flex flex-col items-center justify-center mt-4'>
        <h4 className='product-box__infos-title text-[20px] font-bold'>{title}</h4>
        <div className='product-box__order flex flex-wrap md:flex-nowrap items-center justify-between w-full px-6 mt-[2rem]'>
            <div className='product-box__price flex items-center gap-x-3'>
                <h5 className='text-[32px] font-bold'>{price}</h5>
                <span className='font-bold text-[12px]'>تومان</span>
            </div>
            <Button title='سفارش' style='bg-red text-white flex items-center justify-center py-[9px] px-[33px] rounded-[5px]'/>
        </div>
       </div>
    </div>
  )
}

export default LargeProductBox
