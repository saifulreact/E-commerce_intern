import Link from 'next/link'
import React from 'react'
import Button from '../button/Button'

const Banner = () => {
  return (
    <div className="banner_row py-[150px]">
      <div className="container">
        <div className='w-1/2 bg-[#FFF3E3] ml-auto pt-[63px] pb-[37px] pl-[38px] pr-[43px] rounded-xl'>
        <h2 className='font-poppin font-semibold text-[16px] text-[#333333]'>New Arrival</h2>
        <h1 className='font-poppin font-bold text-[52px] text-[#B88E2F] w-[441px] pt-1 pb-[18px]'>Discover Our New Collection</h1>
        <p className='font-poppin font-medium mb-[46px] text-[18px] text-[#333333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <Button textme="BUY Now"/>
        </div>
      </div>
    </div>
  )
}

export default Banner
