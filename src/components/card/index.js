import React from 'react'
import { c, hover, group, groupHover } from 'classy-ui/macro'

const Card = () => {
  return (
    <div className={group()}>
      <div className={card}>
        <img
          className={c('max-width-full')}
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className={spacing}>
          <div className={c('font-weight-bold', 'font-size-xl', 'margin-right-2')}>
            The Coldest Sunset
          </div>
          <p className={c('color-gray-700', 'font-size-base', 'line-height-relaxed')}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            Maiores et perferendis eaque, exercitationem praesentium nihil.
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
  'max-width-sm',
  'border-radius',
  'box-shadow-lg',
  'overflow-hidden',
  'transition-property-transform',
  'transition-duration-200',
  'transition-timing-function-linear',
  groupHover('scale-105')
)

const spacing = c('padding-left-6', 'padding-right-6', 'padding-top-4', 'padding-bottom-4')

const tag = c(
  'display-inline-block',
  'margin-right-2',
  'padding-left-3',
  'padding-right-3',
  'padding-top-1',
  'padding-bottom-1',
  'background-color-gray-200',
  'font-weight-bold',
  'font-size-sm',
  'color-gray-700',
  'border-radius-full',
  'transition-property-colors',
  'transition-duration-150',
  hover('background-color-gray-500')
)
