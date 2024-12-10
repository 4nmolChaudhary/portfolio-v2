'use client'
import React from 'react'
import MonoFont from '@/components/ui/mono-font'

import { socials } from '@/constants/socials'
import { ArrowDownToLine } from 'lucide-react'
import { CV_DOWNLOAD_LINK, CAL_COM_CALL_LINK } from '@/constants/others'

const Connect = () => {
  const handleOnSocialLinkClick = (link: string) => window.open(link, '_')
  const handleDownloadCV = async () => {
    try {
      const link = document.createElement('a')
      link.href = CV_DOWNLOAD_LINK
      link.click()
    } catch (error) {}
  }
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
      <div className='flex items-center gap-3'>
        <div onClick={() => handleOnSocialLinkClick(CAL_COM_CALL_LINK)} className='flex text-sm opacity-50 underline cursor-pointer hover:opacity-75'>
          <span>{`Let's talk`}</span>
        </div>
        <div onClick={handleDownloadCV} className='flex items-center text-sm opacity-50 underline cursor-pointer hover:opacity-75'>
          <span>{`CV`}</span>
          <ArrowDownToLine size={16} className='opacity-50' />
        </div>
      </div>
    </div>
  )
}

export default Connect
