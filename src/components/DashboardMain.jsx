
import React, { useContext, useEffect, useState } from 'react'
import Topbar from './Topbar'
import Card from './Card'
import Barchart from './BarChart'
import Piechart from './PieChart'
import AddProfile from './AddProfile'
import Profile from './Profile'
import axios from 'axios'
import { UserContext } from '../Context';
import MenuMobile from './MenuMobile';
import { config } from '../Config'


const data = false;

function DashboardMain({HandleOpen}) {
  const [profile,setProfile] = useState({});
  const {user} = useContext(UserContext);
  console.log(user);
  // const {_id} = user;
  useEffect(()=>{
    console.log(user);
    fetchData(user._id);
  },[user])

  const fetchData =async(id)=>{
    try {
      console.log(id);
     const user = await axios.get(`${config.api}/user/getUser/${id}`)
      console.log(user);
      if(user.data.profile.name){
          setProfile(user.data.profile);
      }else{
        setProfile({});
      }
      
    } catch (error) {
      console.log(error);
    }
  
  }


  

  return (
    <div className='containerDashboard py-3 px-3 lg:px-10 flex flex-col gap-6 max-w-full min-h-screen relative'>
      <div className='lg:hidden stickyTop z-50'> <MenuMobile/></div>
      
      <div className='Topbar'><Topbar/> </div>
      <div className=''><Card/> </div>
      <div className=''><Barchart/></div>
      <div className='flex flex-col w-full gap-9 sm:flex-row mb-14'>
        <div className='flex-1 bg-white  rounded-xl shadow-xl'><Piechart/></div>
        {
       profile?.name  ?  <div className='flex-1 bg-white  rounded-xl shadow-xl'><Profile profile={user.profile}/></div>
         : <div className='flex-1 bg-white  rounded-xl shadow-xl'><AddProfile handleOpen={HandleOpen}/></div>
        }
     
      
      </div>
    </div>
  )
}

export default DashboardMain