import React from 'react'
import type { BlogBoxPropsType } from './Blogs'
import { Link } from 'react-router'

function BlogBox(props: BlogBoxPropsType) {
    const {title , path , description , author, created_at} = props
  return (
    <Link to={'/blog'} className='blog-box flex flex-col-reverse lg:flex-row items-end lg:items-center justify-center gap-x-6'>
       <div dir='rtl' className="blog-box__left-content text-center mx-auto
        sm:text-right max-w-[390px] xl:max-w-[330px] flex flex-col gap-y-4">
         <h3 className='blog-box__left-title text-[26px] mt-[1rem] lg:mt-0 font-bold'>{title}</h3>
         <p className='blog-box__left-description font-medium'>{description}</p>
         <div className='blog-box__author flex flex-wrap-reverse
         sm:flex-nowrap gap-x-3 sm:gap-x-0 gap-y-3 sm:gap-y-0 flex-row-reverse text-[13px] items-center justify-around sm:justify-between'>
            <div className='created_at text-[#33333380] text-[13px]'>{created_at}</div>
            <div className='author flex flex-row-reverse items-center justify-end gap-x-3'>
                <span className='author-name font-bold'>{author.name}</span>
                <img className='author-profile w-[40px] h-[40px] rounded-full object-cover' src={author.profile}/>
            </div>
         </div>
       </div>
       <div className="blog-box__right-content rounded-[5px] mx-auto sm:mr-0 sm:ml-0">
        <img src={path} className='blog-box__right-content-img min-[333px]:min-w-[250px] sm:min-w-[310px] sm:max-w-[310px]
         md:min-w-[390px] lg:min-w-[310px] md:max-w-[315px] max-h-[215px] min-h-[215px] object-cover
          border border-[#DEDDDD] rounded-[5px]'/>
       </div>
    </Link>
  )
}

export default BlogBox
