'use client'
import React from 'react'

type WorkProps = {
  title: string
  at: string
  index: number
}

const WorkBlock = ({ title, at, index }: WorkProps) => {
  return (
    <div className='mt-4 text-sm cursor-pointer'>
      <div className='flex items-center mb-2'>
        <div className='mr-1'>{title}</div>
        <div className='opacity-50'>for/ {at}</div>
      </div>
      <div className='w-full aspect-video'>
        <img src={`/mockup-shot-${index}.png`} className='w-full h-full rounded-md border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900' />
      </div>
    </div>
  )
}

export default WorkBlock
