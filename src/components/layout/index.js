import React from 'react'
import Header from '../header'
import { c } from 'classy-ui/macro'

const Layout = ({ children }) => (
  <div className={c('font-sans', 'antialiased', 'subpixel-antialiased')}>
    <Header />
    <main className={c('flex', 'h-screen', 'items-center', 'justify-center')}>{children}</main>
  </div>
)

export default Layout
