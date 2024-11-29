import React from 'react'
import MonoFont from '@/components/ui/mono-font'

import WorkBlock from '@/components/blocks/work-block'
import { work } from '@/constants/work'

const Work = () => {
  return (
    <div className='pt-6 pb-8 border-b border-dashed border-black/10'>
      <MonoFont text='work' />
      {work.map((w, index) => (
        <WorkBlock key={`work-block-${index}`} id={w.id} index={index + 1} title={w.title} at={w.at} />
      ))}
    </div>
  )
}

export default Work
