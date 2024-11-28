'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { ArrowLeft } from 'lucide-react'
import MonoFont from '@/components/ui/mono-font'

const BackToHome = () => {
  const router = useRouter()
  return (
    <div onClick={() => router.push('../../')} className='mb-3 flex items-center gap-2 opacity-50 cursor-pointer hover:opacity-75'>
      <ArrowLeft size={16} />
      <MonoFont text={`back`} />
    </div>
  )
}

export default BackToHome
