import React from 'react'
import { IoPricetagsOutline } from 'react-icons/io5';
import { AiOutlineLike } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import revenue from "../media/revenue.png"
// import Image from 'next/image';
// import {  Montserrat, Lato, Poppins, Open_Sans } from 'next/font/google'

// const monteserat = Montserrat({ subsets: ['latin'] });
// const poppins = Poppins({ 
//   weight: '400',
//   subsets: ['latin'] })
// const lato = Lato({ 
//   weight: '400',
//   subsets: ['latin'] })
//   const openSans = Open_Sans({ 
//     weight: '700',
//     subsets: ['latin'] })



function Card() {
  return (
    <div className='flex gap-8 flex-wrap'>
        <div className='bg-white w-full sm:w-5/12  lg:flex-1 rounded-xl flex flex-col gap-3 py-4 px-7 shadow-xl '>
            <div className='rounded-full h-10 w-10 relative overflow-hidden bg-lightGreen flex items-center justify-center'><img src={revenue} height={27} width={27}  className=''/></div>
            <div className={`lato-c text-sm`}>Total revenues</div>
            <div className='flex justify-between'>
                <div className={`font-bold openSans-c text-xl`}>$2,129,430</div>
                <div className='text-greenPercent bg-greenPercentBg rounded-3xl py-2 px-2 text-xs'>+2.5%</div>
            </div>
        </div>
        <div className='bg-white w-full sm:w-5/12  lg:flex-1  rounded-xl flex flex-col gap-3 py-4 px-7 shadow-xl'>
            <div className='rounded-full h-10 w-10 relative overflow-hidden bg-gold flex items-center justify-center'><IoPricetagsOutline size="23px" className='text-white'/></div>
            <div className={`lato-c text-sm`}>Total Transactions</div>
            <div className='flex justify-between'>
                <div className={`font-bold openSans-c text-xl`}>1,520</div>
                <div className='text-greenPercent bg-greenPercentBg rounded-3xl py-2 px-2 text-xs'>+1.7%</div>
            </div>
        </div>
        <div className='bg-white w-full sm:w-5/12  lg:flex-1 rounded-xl flex flex-col gap-3 py-4 px-7 shadow-xl'>
            <div className='rounded-full h-10 w-10 relative overflow-hidden bg-lightSafron flex items-center justify-center'><AiOutlineLike size={23} className='text-white'/> </div>
            <div className={`lato-c text-sm`}>Total Likes</div>
            <div className='flex justify-between'>
                <div className={`font-bold openSans-c text-xl`}>9,721</div>
                <div className='text-greenPercent bg-greenPercentBg rounded-3xl py-2 px-2 text-xs'>+1.5%</div>
            </div>
        </div>
        <div className='bg-white w-full sm:w-5/12  lg:flex-1 rounded-xl flex flex-col gap-3 py-4 px-7 shadow-xl'>
            <div className='rounded-full h-10 w-10 relative overflow-hidden bg-lightViolet flex items-center justify-center'><FiUsers size={23} className='text-white'/> </div>
            <div className={`lato-c text-sm`}>Total users</div>
            <div className='flex justify-between'>
                <div className={`font-bold openSans-c text-xl`}>9,721</div>
                <div className='text-greenPercent bg-greenPercentBg rounded-3xl py-2 px-2 text-xs'>+4.2%</div>
            </div>
        </div>
    </div>
  )
}

export default Card