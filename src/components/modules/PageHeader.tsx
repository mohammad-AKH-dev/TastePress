import React from 'react'
import PaginatedItems from './Pagination'

type PageHeaderPropsType = {
    title: string
    description: string
}

function PageHeader(props: PageHeaderPropsType) {
    const {title , description} = props
  return (
    <div className='page-header container mx-auto text-center my-14' dir='rtl'>
      <h2 className='page-header__title text-[40px] font-extraBold mb-4'>{title}</h2>
      <p className='page-header__description text-[18px] font-medium max-w-[573px] mx-auto px-[1rem] sm:px-0'>{description}</p>
    </div>
  )
}

export default PageHeader
