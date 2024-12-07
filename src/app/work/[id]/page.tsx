import React from 'react'
import MonoFont from '@/components/ui/mono-font'

import { work } from '@/constants/work'
import { techStackItems } from '@/constants/tech-stack-items'

import TechStack from '@/components/blocks/tech-stack'

export default function Page({ params }: { params: { id: string } }) {
  const workInfo = work.find(d => d.id === params?.id)
  const stackItems = techStackItems.filter(d => workInfo?.techstack?.includes(d.id))
  return (
    <div>
      <div className='mb-2'>
        <div className='mr-1'>{workInfo?.title}</div>
        <div className='opacity-50 mb-2'>for/ {workInfo?.at}</div>
        <MonoFont className='tracking-tighter' text={workInfo?.desc || ''} />
      </div>
      <div className='mb-2'>
        <div className='flex items-center mb-2'>
          <div className='mr-3'>Year</div>
          <div className='opacity-50'>{workInfo?.year}</div>
        </div>
        <div className='flex items-center mb-2'>
          <div className='mr-3'>Website</div>
          <a className='opacity-50 underline' target='_blank' href={workInfo?.website}>
            {workInfo?.website}
          </a>
        </div>
        <div className=''>
          <div className='mb-1'>Tech Stack</div>
          <div className='flex gap-1 flex-wrap'>
            {stackItems?.map(d => (
              <TechStack key={d.id} imageURL={d.imageURL} name={d?.name} />
            ))}
          </div>
        </div>
      </div>
      <div className='w-full aspect-video'>
        <img src={`/${workInfo?.image}`} className='w-full h-full rounded-md border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900' />
      </div>
      <div className='mt-2'>
        <div className='mr-3'>Role and Responsibilities</div>
        <div className='opacity-50'>{workInfo?.work}</div>
      </div>
      <div className='grid auto-rows-[192px] grid-cols-3 gap-4 mt-4'>
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`row-span-1 rounded-md border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${i === 1 || i === 2 ? 'col-span-2' : ''}`}></div>
        ))}
      </div>
    </div>
  )
}
