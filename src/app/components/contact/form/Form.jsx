import React from 'react'
import { FaLocationPin } from "react-icons/fa6";

const Form = () => {
  return (
    <>
    <div className="main_div">
        <div className="container">
           <div className='main_row'>
             <div className=" flex flex-col gap-[42px]">
                <div className="text_col">
                    <div className="part_one flex gap-[30px]">
                        <span className='w-[22px] h-[27px]'><FaLocationPin />
</span>
                                 <div>

                                    <h6 className='font-poppin font-medium text-[16px] text-[#000000]'>Address</h6>
                                 <p className='w-[212px] font-poppin font-normal text-[16px] text-[#000000]'>236 5th SE Avenue, New York NY10000, United States</p>
                                 </div>
                    </div>
                </div>
                <div className="text_col">
                    <div className="part_one flex gap-[30px]">
                        <span className='w-[22px] h-[27px]'><FaLocationPin />
</span>
                                 <div>

                                    <h6 className='font-poppin font-medium text-[16px] text-[#000000]'>Address</h6>
                                 <p className='w-[212px] font-poppin font-normal text-[16px] text-[#000000]'>236 5th SE Avenue, New York NY10000, United States</p>
                                 </div>
                    </div>
                </div>
                <div className="text_col">
                    <div className="part_one flex gap-[30px]">
                        <span className='w-[22px] h-[27px]'><FaLocationPin />
</span>
                                 <div>

                                    <h6 className='font-poppin font-medium text-[16px] text-[#000000]'>Address</h6>
                                 <p className='w-[212px] font-poppin font-normal text-[16px] text-[#000000]'>236 5th SE Avenue, New York NY10000, United States</p>
                                 </div>
                    </div>
                </div>
            </div>
            <div className="form_here">
                <form >

                    
                </form>
            </div>
           </div>
        </div>
    </div>
      
    </>
  )
}

export default Form
