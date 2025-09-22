import React from 'react'
import type { BranchBoxPropsType } from '../contact-us/OurBranches'
import Button from './Button'

function BranchBox(props: BranchBoxPropsType) {
    const {title,address,image,activeTime} = props
  return (
    <div className='branch-box bg-white rounded-[5px] max-w-[400px] sm:max-w-none w-full mx-auto
     flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row-reverse items-center justify-center py-6 lg:py-4 p-4 '>
       <div className='branch-box__left rounded-[5px]'>
         <img className='w-[285px] lg:w-[227px] h-[191px] object-cover rounded-[5px]' src={image} alt={title}/>
       </div>
       <div className='branch-box__right flex flex-col gap-y-3 mx-auto sm:mr-0 sm:ml-0 text-center lg:text-right lg:ml-auto'>
          <h5 className='branch-box__right-title text-[18px] font-bold'>{title}</h5>
          <p className='bramch-box__right-address font-medium text-[14px] flex items-center justify-center lg:justify-end gap-x-1 max-w-[190px]'>
            <img src='/images/icons/map.svg' className='w-[24px] h-[24px]'/>
            {address}
            </p>
          <span className='branch-box__right-activeTime flex items-center justify-center lg:justify-start  gap-x-1'>
            <img src='/images/icons/time.svg' className='w-[24px] h-[24px]'/>
            {activeTime}
            </span>
          <Button title='رزرو میز' href='/contact-us' style='bg-red text-white px-[32px] py-[12px] w-[134px] mx-auto 
          lg:mr-0 lg:ml-0 h-[42px] rounded-[6px]'/>
       </div>
    </div>
  )
}

export default BranchBox
