import React from 'react'
import { c } from 'classy-ui/macro'

const Header = () => {
  return (
    <header className={container}>
      <h1 className={c('font-size-2xl', 'font-weight-semibold')}>Tailwind with Classy-UI</h1>
      <a className={c('color-black')} href="https://github.com/th-km/classy-tailwind">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={c('width-8', 'height-8', 'stroke-current')}
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
  'position-fixed',
  'top-0',
  'left-0',
  'width-full',
  'flex',
  'align-items-center',
  'justify-content-between',
  'padding-5',
  'background-color-gray-200'
)
