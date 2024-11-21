import React from 'react'

type ExperienceProps = {
  start: string
  end: string
  title: string
  company: string
  link?: string
}

const ExperienceBlock = ({ start, end, title, company, link }: ExperienceProps) => {
  return (
    <div className='mt-4 text-sm'>
      <div className='opacity-50'>
        {start} - {end}
      </div>
      <div className='flex items-center'>
        <div className='mr-1'>{title}</div>
        <div className='opacity-50'>@{company}</div>
      </div>
    </div>
  )
}

export default ExperienceBlock
