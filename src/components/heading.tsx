import React from 'react'

type HeadingProps = React.ComponentPropsWithoutRef<'h1'> & {
  leading?: 'leading-none' | 'leading-tight' | 'leading-normal'
  overridingClasses?: string
}

const Heading = ({ children, leading, overridingClasses }: HeadingProps) => {
  const className = leading ?? 'leading-tight'
  return <h1 className={`bg-gradient-to-br w-auto from-black to-black[0.3] dark:from-bg-light dark:to-white[0.5] bg-clip-text text-4xl font-bold tracking-tighter sm:text-[26px] ${className} ${overridingClasses}`}>{children}</h1>
}

export default Heading
