import React from 'react'
import { FiPieChart } from 'react-icons/fi';
import { IoPricetagsOutline } from 'react-icons/io5';
import { TbCalendarTime } from 'react-icons/tb';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';


function MenuMobile() {
  return (
    <div className='flex h-12 w-full justify-around py-3 bg-blueS text-white '>
        <div className=''><FiPieChart className='h-5 w-5 sm:w-6 sm:h-6'/></div>
        <div className=''><IoPricetagsOutline className='h-5 w-5 sm:w-6 sm:h-6'/></div>
        <div className=''><TbCalendarTime className='h-5 w-5 sm:w-6 sm:h-6'/></div>
        <div className=''><AiOutlineSetting className='h-5 w-5 sm:w-6 sm:h-6'/></div>

    </div>
  )
}

export default MenuMobile