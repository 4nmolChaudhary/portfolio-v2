import React from 'react'
import { mono } from '@/helpers/mono-font'

const MonoFont = ({ text }: { text: string }) => {
  return <div className={`${mono.className} font-mono text-black/50 text-sm`}>{text}</div>
}

export default MonoFont
