import Link from 'next/link'
import React from 'react'

const Explor = () => {
  return (
    <>
    <section className='explor_part_start bg-[#FCF8F3] py-11 mb-[67px]'>
       <div className="container">
        <div className="main_row_of_explor">
    <div className='w-2/5'>
                   <h1 className='font-poppin font-bold text-[40px] text-[#3A3A3A] w-[442px]'>50+ Beautiful rooms 
inspiration</h1>
<p className='font-poppin font-medium text-[16px] text-[#616161] w-[368px] mt-[7px] mb-[25px]'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
<div className='inline-block m-auto'>
    <Link className='w-44 h-12  flex justify-center items-center bg-[#B88E2F]' href={"/shop"}>Explore More</Link>

    </div>  
        </div>      
    
    </div>
         
       </div>

    </section>
      
    </>
  )
}

export default Explor
