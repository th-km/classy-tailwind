import React from 'react'
import Header from '../header'
import { c } from 'classy-ui/macro'

const Layout = ({ children }) => (
  <div
    className={c(
      'font-family-sans',
      'font-smoothing-antialiased',
      'font-smoothing-subpixel-antialiased'
    )}
  >
    <Header />
    <main className={c('flex', 'height-screen', 'align-items-center', 'justify-content-center')}>
      {children}
    </main>
  </div>
)

export default Layout
