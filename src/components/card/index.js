import React from 'react'
import { c, hover, group, groupHover, lastChild } from 'classy-ui/macro'

const Card = () => {
  return (
    <div className={group()}>
      <div className={card}>
        <img
          className={c('max-w-full')}
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className={spacing}>
          <div className={c('font-bold', 'text-xl', 'mb-2')}>The Coldest Sunset</div>
          <p className={c('text-gray-700', 'text-base', 'leading-relaxed')}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aperiam porro commodi
            vel voluptatum amet itaque ab. Harum, dignissimos quibusdam aliquid veniam expedita
            tempore, molestiae incidunt quas nam, sint optio.
          </p>
        </div>
        <div className={spacing}>
          <span className={tag}>#photography</span>
          <span className={tag}>#travel</span>
          <span className={tag}>#winter</span>
        </div>
      </div>
    </div>
  )
}

export default Card

const card = c(
  'max-w-sm',
  'rounded',
  'shadow-lg',
  'overflow-hidden',
  'transition-property-transform',
  'transition-duration-200',
  'transition-timing-function-linear',
  groupHover('scale-105')
)

const spacing = c('px-6', 'py-4')

const tag = c(
  'inline-block',
  'mr-2',
  'px-3',
  'py-1',
  'bg-gray-200',
  'font-semibold',
  'text-sm',
  'text-gray-700',
  'rounded-full',
  'transition-property-colors',
  'transition-duration-150',
  lastChild('mr-0'),
  hover('bg-gray-500')
)
