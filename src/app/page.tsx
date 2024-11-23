import React from 'react'

import About from '@/components/about'
import Experience from '@/components/experience'
import Footer from '@/components/footer'
import Work from '@/components/work'

export default function Home() {
  return (
    <main className='relative min-h-screen bg-base overflow-x-hidden'>
      <div className='flex justify-center py-20 px-5'>
        <div className='h-full lg:w-[786px] w-full'>
          <div className='flex items-center'>
            <div className='glitch h-16 w-16 mr-5'></div>
            <div>
              <div>Anmol Chaudhary</div>
              <div className='text-black/50 text-sm'>UI/UX Designer & Frontend Developer</div>
            </div>
          </div>
          <About />
          <Experience />
          <Work />
          <Footer />
        </div>
      </div>
    </main>
  )
}

