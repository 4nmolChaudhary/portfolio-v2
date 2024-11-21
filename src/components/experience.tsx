import React from 'react'
import { mono } from '@/helpers/mono-font'

import ExperienceBlock from '@/components/blocks/experience-block'
import { experience } from '@/constants/experience'

const Experience = () => {
  return (
    <div className='pt-6'>
      <div className={`${mono.className} text-black/50 text-sm`}>experience</div>
      {experience?.map((exp, index) => (
        <ExperienceBlock key={`exp-${index}`} start={exp?.start} end={exp?.end} company={exp?.company} title={exp?.title} />
      ))}
    </div>
  )
}

export default Experience
