'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { ChevronRight } from 'lucide-react'

type WorkProps = {
  title: string
  at: string
  index: number
  id: string
}

const WorkBlock = ({ title, at, index, id }: WorkProps) => {
  const router = useRouter()
  const handleClick = () => router.push(`/work/${id}`)
  return (
    <div className='mt-4 text-sm cursor-pointer' onClick={handleClick}>
      <div className='flex items-center justify-between'>
        <div className='sm:flex-col md:flex-row items-center mb-2 '>
          <div className='mr-1'>{title}</div>
          <div className='opacity-50'>for/ {at}</div>
        </div>
        <ChevronRight size={16} />
      </div>
      <div className='w-full aspect-video'>
        <img src={`/mockup-shot-${index}.png`} className='w-full h-full rounded-md border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900' />
      </div>
    </div>
  )
}

export default WorkBlock
