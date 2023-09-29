
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
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
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  
];

const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];

function Piechart() {
  return (
    <div className='p-4'>

      <div className=' flex justify-between items-center'>
        <div className={`text-sm monteserat-c font-semibold`}>Top products</div>  
        <div className={`text-xs lato-c text-greySoft`}>Jun-Sep 2023</div>  
      </div> 

      <div className='flex flex-col sm:flex-row gap-5 items-center '> 

    <div style={{ width: 150, height: 150 }} className='flex-1'>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className='flex-1 flex flex-col gap-1 ' >
      <div className='flex flex-col '>
      <div className='flex items-center '><span className='h-2 w-2 bg-lightGreen rounded-full mr-2'> </span><span className={`text-sm monteserat-c font-semibold`}> Basic Tees</span></div>
      <div className={`text-xs lato-c text-greySoft`}>40%</div>
      </div>
      <div className='flex flex-col'>
      <div className='flex items-center '><span className='h-2 w-2 bg-safron rounded-full mr-2'> </span><span className={`text-sm monteserat-c font-semibold`}> Custom Short Pants</span></div>
      <div className={`text-xs lato-c text-greySoft`}>30%</div>
      </div>
      <div className='flex flex-col '>
      <div className='flex items-center '><span className='h-2 w-2 bg-lightYellow rounded-full mr-2'> </span><span className={`text-sm monteserat-c font-semibold`}> Super Hoodies</span></div>
      <div className={`text-xs lato-c text-greySoft`}>30%</div>
      </div>
    </div>
            </div>
              </div>
  );
}

export default Piechart;
