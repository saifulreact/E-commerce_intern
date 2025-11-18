import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardArrowLeft } from "react-icons/md";


const Contactbanner = () => {
  return (
    <>
      <div id="Shop_banner">
        <div className="container">
            <div className="main_row">
                <Image src="/contactlogo.png" width={77} height={77} alt="contact_logo"/>
                <h1 className='font-poppin font-medium text-[48px] text-[#000000]'>Contact</h1>
                 <div className="slid flex items-center justify-center">
                    <Link className='font-poppi font-medium text-[16px] text-[#000000]' href={"/"}>Home</Link>
                    <span className='w-5 h-5 text-[#000000]'><MdKeyboardArrowLeft /></span>

                    <Link className='font-poppi font-base text-[16px] text-[#000000]' href={"/Shop"}>Shop</Link>
                </div>

            </div>
            
            
        </div>
      </div>
    </>
  )
}

export default Contactbanner
