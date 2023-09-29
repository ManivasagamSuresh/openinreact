import React, { useContext, useEffect, useState } from 'react';
// import { useSession } from 'next-auth/react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context';
import ProfileForm from './ProfileForm';
import Menu from './Menu';
import DashboardMain from './DashboardMain';


function Dashboard  () {
  const [open,setOpen] = useState(false);
  // const {status,data} = useSession();
  const navigate = useNavigate();
  
  // useEffect(()=>{
  //   if(status == "unauthenticated"){
  //    
  //   }
  // },[data])
  
  const {user} = useContext(UserContext);
  // console.log(user);


  const HandleOpen = ()=>{
    setOpen(!open)
  }
  return (
    <div className='relative '>
    {
      open && (

        <div className='absolute z-50'><ProfileForm HandleOpen= {HandleOpen}/></div>
      )
    } 
    <div className='dashboard flex bg-bgSoft min-h-screen w-screen relative z-10'>
       
      <div className='flex-1 h-screen lg:p-5 hidden lg:block'><Menu/></div>
      
      <div className='flexCustomDashboard py-1 lg:py-5'><DashboardMain HandleOpen= {HandleOpen}/></div>
    </div>
    </div>
  );
}

export default Dashboard    ;
