
// import Image from 'next/image';
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import profile from "../media/profile.avif"
// import {  Montserrat, Lato, Poppins } from 'next/font/google'
// import { useSession } from 'next-auth/react';

// const monteserat = Montserrat({ subsets: ['latin'] });
// const poppins = Poppins({ 
//   weight: '400',
//   subsets: ['latin'] })
// const lato = Lato({ 
//   weight: '400',
//   subsets: ['latin'] })



function Topbar() {
  const [open, setOpen] = useState(false)
  // const {data,status} = useSession();
  // console.log(data.user.image);
  
  const HandleOpen = ()=>{
    setOpen(!open);
  }

  return (
    <>
               {
              open ? <div className='relative lg:hidden mt-7'>
              <input type='search' placeholder='Search..' className='bg-white outline-none py-2 px-3 w-11/12 rounded-lg '/>
              <div className='absolute top-1 right-2 text-greySoft' onClick={()=>{HandleOpen()}}>X</div>
              </div>  

           
    :<div className='h-20 flex items-center justify-between w-full'>
       
        <div className={`text-2xl font-bold monteserat-c`}>Dashboard</div>
        <div className='flex items-center gap-2 lg:gap-5'>

        <div className={`flex items-center lg:w-60} justify-between relative`}>

             
            
            <AiOutlineSearch className=' text-greySoft h-5 w-5 md:h-7 md:w-7 lg:hidden ' onClick={()=>{HandleOpen()}}/>
           
             <input type='search' placeholder='Search..' className='hidden lg:block bg-white outline-none py-2 px-3 w-11/12 rounded-lg'/>
            
            <AiOutlineSearch className='hidden lg:block absolute right-8 text-greySoft h-5 w-5 md:h-7 md:w-7 lg:h-4 lg:w-4'/>
        </div>
        <div><IoMdNotificationsOutline  className='h-5 w-5 md:h-7 md:w-7'/> </div>
        <div className='rounded-full h-7 w-7  md:h-10 md:w-10 relative overflow-hidden' ><img src={profile} alt='pro'  className='object-cover'/> </div>
        </div>

    </div>}
    </>
  )
}

export default Topbar