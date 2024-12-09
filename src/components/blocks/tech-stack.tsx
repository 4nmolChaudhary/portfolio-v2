'use client'
import React from 'react'

const TechStack = ({ imageURL, name }: { imageURL?: string; name: string }) => {
  return (
    <span className='text-xs font-medium leading-4 border border-black/10 rounded-xl text-gray-1k inline-flex items-center justify-center gap-x-1 px-2 py-1 h-6 box-border hover:shadow-tag-hover transition-all ease-in-out select-none group/tag bg-gray-00 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 '>
      {imageURL && <img src={imageURL} alt={`${name} icon`} width='14' height='14' className='object-contain w-[14px] h-[14px]' />}
      <span>{name}</span>
    </span>
  )
}

export default TechStack
