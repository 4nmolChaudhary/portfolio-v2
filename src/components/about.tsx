'use client'
import React from 'react'

import MonoFont from '@/components/ui/mono-font'

import Image from 'next/image'
import IndiaFlag from '@/images/IN.png'

const About = () => {
  const date = new Date()
  const options: Intl.DateTimeFormatOptions = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', year: 'numeric', month: '2-digit', day: '2-digit' }
  const formatter = new Intl.DateTimeFormat('en-US', options)
  return (
    <div className='pt-8 gap-16 grid'>
      <div className='gap-4 grid'>
        <MonoFont text='shortly' />
        <div className='text-sm pr-8 pb-8 border-b border-dashed border-black/10'>
          <div>{`I'm a Designer and Developer working mainly with React, Next.js, and many others. Passionate about what I do, I get fully involved in every project, with a particular focus on design`}</div>
          <div className='text-sm mt-6 flex items-center'>
            <div className='mr-1'>{`Based in Ahmedabad, India`}</div>
            <Image src={IndiaFlag} alt='IN' width={18} height={16} />
          </div>
          <div className='opacity-50'>Local Time {formatter.format(date)?.slice(12, 17)} (IST)</div>
        </div>
      </div>
    </div>
  )
}

export default About
