import React from 'react'
import MonoFont from '@/components/ui/mono-font'

import { work } from '@/constants/work'

export default function Page({ params }: { params: { id: string } }) {
  const workInfo = work.find(d => d.id === params?.id)

  return (
    <div>
      <div className='mb-2'>
        <div className='mr-1'>{workInfo?.title}</div>
        <div className='opacity-50 mb-2'>for/ {workInfo?.at}</div>
        <MonoFont className='tracking-tighter' text={workInfo?.desc || ''} />
      </div>
      <div className='mb-2'>
        <div className='flex items-center'>
          <div className='mr-3'>Year</div>
          <div className='opacity-50'>{workInfo?.year}</div>
        </div>
        <div className='flex items-center'>
          <div className='mr-3'>Website</div>
          <a className='opacity-50 underline' target='_blank' href={workInfo?.website}>
            {workInfo?.website}
          </a>
        </div>
      </div>
      <div className='w-full aspect-video'>
        <img src={`/${workInfo?.image}`} className='w-full h-full rounded-md border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900' />
      </div>
      <div className='mt-2'>
        <div className='mr-3'>Role and Responsibilities</div>
        <div className='opacity-50'>{workInfo?.work}</div>
      </div>
    </div>
  )
}
