import React from 'react'

import BackToHome from '@/components/blocks/back-to-home'

export default function WorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='relative min-h-screen bg-base overflow-x-hidden'>
      <div className='flex justify-center py-20 px-5'>
        <div className='h-full lg:w-[786px] w-full text-sm'>
          <BackToHome />
          {children}
        </div>
      </div>
    </main>
  )
}
