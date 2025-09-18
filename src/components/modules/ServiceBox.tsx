import React from 'react'
import type { ServiceBoxPropsType } from '../home/OurServices'


function ServiceBox(props: ServiceBoxPropsType) {
    const {description , img , style} = props
  return (
    <div className={`service-box flex items-center min-[820px]:min-w-[300px] max-[640px]:w-full max-[745px]:w-[90%] max-[820px]:w-[67%] w-[50%] bg-gradient-to-r justify-center rounded-[10px] text-right gap-x-[24px]
     py-[20px] max-[550px]:px-[12px] max-[550px]:flex-col max-[550px]:gap-y-3 max-[550px]:text-center px-[24px] mx-auto border-l-4 ${style}`}>
       <img className='service-box__img w-[62px] h-[62px] bg-transparent object-cover' src={img}/>
       <p className='service-box__paragraph max-w-[280px] max-[550px]:text-[13px]'>{description}</p>
    </div>
  )
}

export default ServiceBox
