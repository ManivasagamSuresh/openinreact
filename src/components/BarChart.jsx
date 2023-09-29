import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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


const data = [
  {
    name: 'Week 1',
    Guest: 4000,
    User: 2400,
    amt: 2400,
  },
  {
    name: 'Week 2',
    Guest: 3000,
    User: 1398,
    amt: 2210,
  },
  {
    name: 'Week 3',
    Guest: 2000,
    User: 5000,
    amt: 2290,
  },
  {
    name: 'Week 4',
    Guest: 2780,
    User: 3908,
    amt: 2000,
  },

 
];

function Barchart() {
  return (
    <div className='w-full  bg-white p-4 sm:p-8 flex flex-col gap-7 rounded-xl shadow-xl'>
    <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
        <div className={`monteserat-c font-bold text-lg`}>Activities</div>
        <div className={`monteserat-c text-sm text-greySoft`}>Jun-Sep 2023</div>
        </div>
        <div className='flex gap-6'>
        <div className='flex items-center '><span className='h-2 w-2 bg-safron rounded-full mr-2'> </span><span> Guest</span></div>
        <div className='flex items-center '><span className='h-2 w-2 bg-lightGreen rounded-full mr-2'> </span><span> User</span></div>
        </div>
    </div>
    <div className='barchart w-full h-60 lg:h-80'>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className='hidden sm:block'/>
          <YAxis />
          <Tooltip />
          
          <Bar dataKey="User" fill="#98D89E" />
          <Bar dataKey="Guest" fill="#EE8484" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Barchart