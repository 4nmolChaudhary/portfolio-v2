import { mono } from '@/helpers/mono-font'

const About = () => {
  return (
    <div className='pt-8 gap-16 grid'>
      <div className='gap-4 grid'>
        <div className={`${mono.className} text-black/50 text-sm`}>shortly</div>
        <div className='text-sm pr-8 pb-8 border-b border-black/10'>
          I'm a self taught UX/UI Designer and Frontend Developer for 5 years, working mainly with <strong>React JS, Next JS</strong>, and many others utility libraries in React ecosystem. Passionate about what I do, I get fully involved in every project,<span className='font-semibold'>with a particular focus on design</span>{' '}
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default About
