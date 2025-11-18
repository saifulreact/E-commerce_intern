"use client"

import React from 'react'
import Image from 'next/image'

const Browse = () => {
  return (
    <>
    <section className='py-[56px]'>
        <div className="container">
           <div className='text-center mb-12'>
             <h2 className='font-poppin font-bold text-[32px] text-[#333333] '>Browse The Range</h2>
            <p className='font-poppin font-normal text-[#666666] text-20px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </div>
          <div className='flex gap-5'>
             <div className='w-1/3'>
       
            <Image src="/table.png" width={381} height={480} alt='table_images' />
            <p className='font-semibold font-poppin text-[24px] text-[#333333] text-center'>Dining</p>
           </div>
             <div className='w-1/3'>
       
            <Image src="/sofa.png" width={381} height={480} alt='table_images' />
            <p className='font-semibold font-poppin text-[24px] text-[#333333] text-center'>Living</p>
           </div>
             <div className='w-1/3'>
       
            <Image src="/bedroom.png" width={381} height={480} alt='table_images' />
            <p className='font-semibold font-poppin text-[24px] text-[#333333] text-center'>Bedroom</p>
           </div>
          </div>

        </div>
    </section>
      
    </>
  )
}

export default Browse
