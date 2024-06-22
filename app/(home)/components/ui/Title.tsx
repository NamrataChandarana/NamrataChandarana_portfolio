import React from 'react'

function Title({title, className}: {title: string, className?: string}) {
  return (
        <div className={` ${className}`}>
            <div className="text-3xl lg:text-4xl font-bold">{title}</div>
            <div className="w-52 h-2 bg-indigo-500 rounded-md mx-auto lg:mx-0"></div>
            <div className="w-52 h-2 bg-green-500 translate-x-5 rounded-md mx-auto lg:mx-0"></div>
        </div>
  )
}

export default Title