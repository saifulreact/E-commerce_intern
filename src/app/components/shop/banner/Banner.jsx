import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";


const Banner = () => {
  return (
    <>
    <section id='Shop_banner'>
        <div className="container">
            <div className="shop_banner_row  ">
                <h1 className='font-poppin font-medium text-[#000000] text-[48px    ]'>Shop</h1>
                <div className="slid flex items-center justify-center">
                    <Link className='font-poppi font-medium text-[16px] text-[#000000]' href={"/"}>Home</Link>
                    <span className='w-5 h-5 text-[#000000]'><MdKeyboardArrowLeft /></span>

                    <Link className='font-poppi font-base text-[16px] text-[#000000]' href={"/Shop"}>Shop</Link>
                </div>
            </div>
            
        </div>
    </section>
      
    </>
  )
}

export default Banner
