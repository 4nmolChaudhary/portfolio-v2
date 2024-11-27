'use client'
import React from 'react'
import MonoFont from '@/components/ui/mono-font'

import { socials } from '@/constants/socials'

const Connect = () => {
  const handleOnSocialLinkClick = (link: string) => window.open(link, '_')
  return (
    <div className='pt-6 mb-8 '>
      <MonoFont text={`let's get in touch`} />
      <div className='py-4'>
        <div className='text-sm '>{`Got a Vision, a Challenge, or Simply Want to Say Hi?`}</div>
        <div className='text-sm'>{`Let's Build Something Incredible Together!`}</div>
      </div>
      <div className='text-sm opacity-50'>
        <a href='mailto:chaudharyanmol321@gmail.com'>chaudharyanmol321@gmail.com</a>
      </div>
      <div className='mt-4 mb-3 flex items-center gap-4'>
        {socials.map(({ Icon, title, link }) => (
          <Icon onClick={() => handleOnSocialLinkClick(link)} key={title} size={20} className='opacity-50 cursor-pointer hover:opacity-75' />
        ))}
      </div>
      <div onClick={() => handleOnSocialLinkClick('https://cal.com/anmol-chaudhary/30min')} className='flex text-sm opacity-50 underline cursor-pointer hover:opacity-75'>
        <span>{`Let's talk`}</span>
      </div>
    </div>
  )
}

export default Connect
