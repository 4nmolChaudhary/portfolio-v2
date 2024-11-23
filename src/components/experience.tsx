import React from 'react'

import ExperienceBlock from '@/components/blocks/experience-block'
import { experience } from '@/constants/experience'

import MonoFont from '@/components/ui/mono-font'

const Experience = () => {
  return (
    <div className='pt-6'>
      <MonoFont text='experience' />
      <div className='pb-8 border-b border-dashed border-black/10'>
        {experience?.map((exp, index) => (
          <ExperienceBlock key={`exp-${index}`} start={exp?.start} end={exp?.end} company={exp?.company} title={exp?.title} />
        ))}
      </div>
    </div>
  )
}

export default Experience
