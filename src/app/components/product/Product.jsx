"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Product = () => {
  return (
    <section>
        <div className="container">
            <h2 className='text-center  text-[#3A3A3A] mb-[32px] font-bold font-poppin text-[40px]' >Our Products</h2>
            <div className='flex justify-between'>
                <div className="details">
                   <div className="img_details hover:bg-[#898989] ">
                     <Image className='relative ' src="/oneimages.png" width={285} height={301} alt='card_iamges'/>
                     <div className="circle w-12 h-12 bg-[#E97171] rounded-[100%] absolute top-0 left-[70%]" >
                        -30%
                        
                     </div>
                   </div>
                    <div className="bottom_images mt-4 pl-3">
                        <h4 className='font-semibold font-poppin text-6 text-[#3A3A3A]' >Syltherine</h4>
                        <p className='font-medium font-poppin text-4 text-[#898989]'>Stylish cafe chair</p>
                        <div className="price flex gap-4">
                            <p className='font-semibold font-poppin text-[20px] text-[#3A3A3A]'>Rp 2.500.000</p>
                            <p className='font-poppin font-normal text-4 text-[#B0B0B0] line-through'>Rp 3.500.000</p>
                        </div>
                    </div>
                </div>
                <div className="details">
                   <div className="img_details ">
                     <Image className='relative' src="/chair.png" width={285} height={301} alt='card_iamges'/>
                     <div className="circle w-12 h-12 bg-[#E97171] rounded-[100%] absolute top-0 left-[70%]" >
                        -30%
                        
                     </div>
                   </div>
                    <div className="bottom_images mt-4 pl-3">
                        <h4 className='font-semibold font-poppin text-6 text-[#3A3A3A]' >Leviosa</h4>
                        <p className='font-medium font-poppin text-4 text-[#898989]'>Stylish cafe chair</p>
                        <div className="price flex gap-4">
                            <p className='font-semibold font-poppin text-[20px] text-[#3A3A3A] '>Rp 2.500.000</p>
                        </div>
                    </div>
                </div>
                <div className="details">
                   <div className="img_details ">
                     <Image className='relative' src="/wite.png" width={285} height={301} alt='card_iamges'/>
                     <div className="circle w-12 h-12 bg-[#E97171] rounded-[100%] absolute top-0 left-[70%]" >
                        -30%
                        
                     </div>
                   </div>
                    <div className="bottom_images bg-[#] mt-4 pl-3">
                        <h4 className='font-semibold font-poppin text-6 text-[#3A3A3A]' >Lolito</h4>
                        <p className='font-medium font-poppin text-4 text-[#898989]'>Luxury big sofa</p>
                        <div className="price flex gap-4">
                            <p className='font-semibold font-poppin text-[20px] text-[#3A3A3A]'>Rp 7.000.000</p>
                            <p className='font-poppin font-normal text-4 text-[#B0B0B0] line-through'>Rp 14.000.000</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className="details">
                   <div className="img_details ">
                     <Image className='relative' src="/respira.png" width={285} height={301} alt='card_iamges'/>
                     <div className="circle w-12 h-12 bg-[#E97171] rounded-[100%] absolute top-0 left-[70%]" >
                        -30%
                        
                     </div>
                   </div>
                    <div className="bottom_images mt-4 pl-3">
                        <h4 className='font-semibold font-poppin text-6 text-[#3A3A3A]' >Respira</h4>
                        <p className='font-medium font-poppin text-4 text-[#898989]'>Outdoor bar table and stool</p>
                        <div className="price flex gap-4">
                            <p className='font-semibold font-poppin text-[20px] text-[#3A3A3A]'>Rp 500.000</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='flex justify-between  ' >
                <div className="details">
                   <div className="img_details hover:bg-[#898989] ">
                     <Image className='relative ' src="/oneimages.png" width={285} height={301} alt='card_iamges'/>
                     <div className="circle w-12 h-12 bg-[#E97171] rounded-[100%] absolute top-0 left-[70%]" >
                        -30%
                        
                     </div>
                   </div>
                    <div className="bottom_images mt-4 pl-3">
                        <h4 className='font-semibold font-poppin text-6 text-[#3A3A3A]' >Syltherine</h4>
                        <p className='font-medium font-poppin text-4 text-[#898989]'>Stylish cafe chair</p>
                        <div className="price flex gap-4">
                            <p className='font-semibold font-poppin text-[20px] text-[#3A3A3A]'>Rp 2.500.000</p>
                            <p className='font-poppin font-normal text-4 text-[#B0B0B0] line-through'>Rp 3.500.000</p>
                        </div>
                    </div>
                </div>
                <div className="details">
                   <div className="img_details ">
                     <Image className='relative' src="/chair.png" width={285} height={301} alt='card_iamges'/>
                     <div className="circle w-12 h-12 bg-[#E97171] rounded-[100%] absolute top-0 left-[70%]" >
                        -30%
                        
                     </div>
                   </div>
                    <div className="bottom_images mt-4 pl-3">
                        <h4 className='font-semibold font-poppin text-6 text-[#3A3A3A]' >Leviosa</h4>
                        <p className='font-medium font-poppin text-4 text-[#898989]'>Stylish cafe chair</p>
                        <div className="price flex gap-4">
                            <p className='font-semibold font-poppin text-[20px] text-[#3A3A3A] '>Rp 2.500.000</p>
                        </div>
                    </div>
                </div>
                <div className="details">
                   <div className="img_details ">
                     <Image className='relative' src="/wite.png" width={285} height={301} alt='card_iamges'/>
                     <div className="circle w-12 h-12 bg-[#E97171] rounded-[100%] absolute top-0 left-[70%]" >
                        -30%
                        
                     </div>
                   </div>
                    <div className="bottom_images bg-[#] mt-4 pl-3">
                        <h4 className='font-semibold font-poppin text-6 text-[#3A3A3A]' >Lolito</h4>
                        <p className='font-medium font-poppin text-4 text-[#898989]'>Luxury big sofa</p>
                        <div className="price flex gap-4">
                            <p className='font-semibold font-poppin text-[20px] text-[#3A3A3A]'>Rp 7.000.000</p>
                            <p className='font-poppin font-normal text-4 text-[#B0B0B0] line-through'>Rp 14.000.000</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className="details">
                   <div className="img_details ">
                     <Image className='relative' src="/respira.png" width={285} height={301} alt='card_iamges'/>
                     <div className="circle w-12 h-12 bg-[#E97171] rounded-[100%] absolute top-0 left-[70%]" >
                        -30%
                        
                     </div>
                   </div>
                    <div className="bottom_images mt-4 pl-3">
                        <h4 className='font-semibold font-poppin text-6 text-[#3A3A3A]' >Respira</h4>
                        <p className='font-medium font-poppin text-4 text-[#898989]'>Outdoor bar table and stool</p>
                        <div className="price flex gap-4">
                            <p className='font-semibold font-poppin text-[20px] text-[#3A3A3A]'>Rp 500.000</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-8 mb-[81px]'>
                            <Link className="font-poppin font-semibold text-[16px] text-[#B88E2F] py-4 pl-[82px] pr-[74px] border-2 mt-8 border-solid border-[#B88E2F]" href={"/shop"} >Show More</Link>


            </div>
        </div>
      
    </section>
  )
}

export default Product
