import React from 'react'

const Footer = () => {
  return (
    <div className='text-sm mt-8 py-8 border-t border-dashed border-black/10'>
      <div className='opacity-40 text-xs'>Built with 💗 using Next.js</div>
      <div className='opacity-50'>© {new Date().getFullYear()} Anmol Chaudhary</div>
    </div>
  )
}

export default Footer
