import React from 'react'
import { c } from 'classy-ui/macro'

const Header = () => {
  return (
    <header className={container}>
      <h1 className={c('text-2xl', 'font-semibold')}>Tailwind with Classy-UI</h1>
      <a className={c('text-black')} href="https://github.com/th-km/classy-tailwind">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={c('w-8', 'h-8', 'stroke-current')}
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </a>
    </header>
  )
}

export default Header

const container = c(
  'fixed',
  'top-0',
  'left-0',
  'w-full',
  'flex',
  'items-center',
  'justify-between',
  'p-5',
  'bg-gray-200'
)
