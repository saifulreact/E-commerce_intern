import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { BsPersonExclamation } from "react-icons/bs";
import { GiLoveMystery } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";





const Navbar = () => {
  return (
    <nav>
    <div className="container">
   <div className="main_row flex justify-between items-center py-[30px]">
       <div className="logo_col">
        <Image src='/logo.png' width={185} height={45} alt='main_logo'/>
      </div>
            <div className="main_div ">
            <ul className='flex gap-[75px] font-poppin  '>
                <li  className='text-[#000000] font-medium'><Link  href="#">Home</Link></li>
                <li className='text-[#000000] font-medium'><Link href="#">Shop</Link></li>
                <li className='text-[#000000] font-medium'><Link  href="#">About</Link></li>
                <li className='text-[#000000] font-medium'><Link  href="#">Contact</Link></li>
            </ul>
        </div>

        <div className="btn ">
          <ul className='flex gap-[50px] text-[28px] text-[#000000]'>
            <li><Link href={"3"}/><BsPersonExclamation /></li>
            <li><Link href={"3"}/><CiSearch /></li>
            <li><Link href={"3"}/><GiLoveMystery /></li>
            <li><Link href={"3"}/><IoCartOutline /></li>
          </ul>
        </div>
   </div>
    </div>
      
    </nav>
  )
}

export default Navbar
