
import React from 'react'
// import {  Montserrat, Lato, Poppins } from 'next/font/google'

// const monteserat = Montserrat({ subsets: ['latin'] });

function AddProfile({handleOpen}) {
  return (
    <div className='flex flex-col items-center justify-center h-52 sm:h-full gap-2'>
      <div className='text-5xl font-thin text-greySoft bg-greyProfile w-12 h-12 pt-0 pb-2 rounded-full  flex items-center justify-center cursor-pointer' onClick={()=>{handleOpen()}}>+</div>
      <div className={`text-greySoft font-medium monteserat-c`}>Add profile</div>
    </div>
  )
}

export default AddProfile