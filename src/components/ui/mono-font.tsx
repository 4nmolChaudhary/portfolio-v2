import React from 'react'
import { mono } from '@/helpers/mono-font'

const MonoFont = ({ text, className }: { text: string; className?: string }) => {
  return <div className={`${mono.className} font-mono text-black/50 text-sm ${className}`}>{text}</div>
}

export default MonoFont
