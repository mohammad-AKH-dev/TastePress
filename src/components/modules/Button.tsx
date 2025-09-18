import React from 'react'
import { Link } from 'react-router'

type ButtonPropsType = {
    title: string
    style: string
    href?: string
}

function Button(props: ButtonPropsType) {
  
    const {title , href , style} = props

  return (
    href ? (
      <Link to={href} className={`flex ${style} items-center cursor-pointer transition-all duration-200
      border border-red justify-center font-bold`}>
        {title}
      </Link>
    ) : (

    <button type='button' className={`flex ${style} items-center cursor-pointer transition-all duration-200
    border border-red justify-center font-bold outline-none`}>
      {title}
    </button>
    )
  )
}

export default Button
