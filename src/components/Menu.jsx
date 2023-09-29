
import React from 'react'
import { FiPieChart } from 'react-icons/fi';
import { IoPricetagsOutline } from 'react-icons/io5';
import { TbCalendarTime } from 'react-icons/tb';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
// import {  Montserrat, Lato, Poppins } from 'next/font/google'
// import { signOut, useSession } from 'next-auth/react';
import { useNavigate } from 'react-router-dom';
// import { useRouter } from 'next/navigation';

// const monteserat = Montserrat({ subsets: ['latin'] });
// const poppins = Poppins({ 
//   weight: '400',
//   subsets: ['latin'] })
// const lato = Lato({ 
//   weight: '400',
//   subsets: ['latin'] })


function Menu() {
  // const router = useRouter();
  const navigate = useNavigate();
  // const {data,status} = useSession();

  return (
    <div className={ `hidden bg-blueS w-11/12 h-full rounded-2xl p-10 text-white lg:flex flex-col justify-between monteserat-c`}>
        <div className='menuMain flex flex-col gap-16 '>
            <div className='text-3xl font-bold'>Board.</div>
            <div className='flex flex-col gap-4 item-center justify-center'>
                <div className='text-lg font-normal flex items-center gap-4 cursor-pointer'> <FiPieChart size="20px"/> Dashboard</div>
                <div className='text-lg font-normal flex items-center gap-4 cursor-pointer'><IoPricetagsOutline size="20px"/> Transactions</div>
                <div className='text-lg font-normal flex items-center gap-4 cursor-pointer'><TbCalendarTime size="20px"/> Schedules</div>
                <div className='text-lg font-normal flex items-center gap-4 cursor-pointer' ><BsPersonCircle size="20px" />User</div>
                <div className='text-lg font-normal flex items-center gap-4 cursor-pointer'><AiOutlineSetting size="20px"/> Settings</div>
            </div>
        </div>
        <div className='menuFooter flex flex-col gap-4'>
            <div>Help</div>
            <div>Contact Us</div>
        </div>
    </div>
  )
}

export default Menu