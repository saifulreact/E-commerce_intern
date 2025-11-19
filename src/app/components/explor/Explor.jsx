"use client"
import Link from 'next/link'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";



const Explor = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };  
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
    {/* <button className='w-44 h-12  flex justify-center items-center bg-[#B88E2F]' path={"/shop"}>Explore More</button> */}

    </div>  
        </div>    


        <div className='flex gap-[18px]'>
           <Slider {...settings}>
      <div>

       <div>
         <div className='relative '>
          <Image src="/slider.png" width={404} height={582} alt="slider_one" />
         </div>
         <div className='absolute to-0% lef' >
          <div className='w-[212px] flex justify-center items-center  flex-col h-[130] bg-[#ffffffa6] '>

             <div className='flex gap-3'>
              <p className='font-poppin font-medium text-[#616161] text-4'>01</p>
              <span className='w-27px h-1 items-center justify-center flex bg-[red]' ></span>
               <p className='font-poppin font-medium text-[#616161] text-4'>Bed Room</p>
             </div>
          <h3 className='font-poppin font-semibold text-[#3A3A3A] text-[28px]'>Inner Peace</h3>
         </div>

         <div className='p-3 bg-[#B88E2F] inline-block absolute top-[95%] left-53 '>
          <span className='  text-[#ffffff]' ><FaArrowRight /></span>
         </div>
         </div>
       </div>

      </div>
    </Slider>
          </div>  
    
    </div>
         
       </div>

    </section>
      
    </>
  )
}

export default Explor
