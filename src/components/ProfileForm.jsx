
import React, { useContext, useState } from "react";
// import {  Montserrat, Lato, Poppins, Figtree } from 'next/font/google'
import axios from "axios";
import { useFormik } from "formik";
// import { UserContext } from "../Context";
// import Image from "next/image";
import { UserContext } from "../Context";
import loader from "../media//loading-gif.gif"
import { config } from "../Config";

// const monteserat = Montserrat({ subsets: ['latin'] });
// const figtree = Figtree({ 

//   subsets: ['latin'] })



function ProfileForm({HandleOpen}) {

  const {user,setUser} = useContext(UserContext);
  const [loading,setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

 

  const handleNext = () => {
    setCurrentPage(2);
  };

  const handleBack = () => {
    setCurrentPage(1);
  };


  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      phone:"",
      instagram:"",
      youtube:"",
    },
    onSubmit:async(values)=>{
      try {
        setLoading(true);
        console.log(values)
        console.log(user)
        const result  = await axios.put(`${config.api}/user/addProfile/${user._id}`,values);
        console.log({...user,profile:values})
        setUser({...user,profile:values})
        setLoading(false);
        HandleOpen();
        // console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  })
  const handleDone = async () => {
    try {
      await formik.handleSubmit();
    } catch (error) {
      console.log(error);
    }
  };


  
  // ;


  return (
    <div className="bg-profileTrans bg-opacity-75 text-black w-screen h-screen z-50 flex items-center justify-center ">
      <div className="bg-white h-fit w-11/12 md:w-7/12 lg:w-5/12  flex flex-col rounded-2xl shadow-xl">
        <div className={`header p-7 flex justify-between px-4 py-4 text-xl figtree-c `}><span className="font-bold"> Add new profile</span> <span className="text-greySoft cursor-pointer" onClick={()=>{HandleOpen()}}>X</span></div>
        <hr className="text-greySoft opacity-50"/>
        <div className="main px-7 py-3">
          
            <div className="flex ">
              <div className={`flex-1 text-center figtree-c font-semibold mt-2 mb-8 mr-2 ${currentPage === 1 ? "LineBlue":'Line'}  `}>Basic</div>
              <div className={`flex-1 text-center figtree-c font-semibold mt-2 mb-8 ml-2 ${currentPage === 1 ? "Linee":'LineBlue'} `}>Social</div>
            </div>
          

          <form className="inputs flex flex-col " onSubmit={formik.handleSubmit}>
            {currentPage === 1 && (
              <div className="basic flex flex-col gap-5">
                <div className=" flex flex-col gap-2">
                  <label htmlFor="name" className={`figtree-c`}> Enter Name*</label>
                  <input
                    id="name"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name"
                    placeholder="Eg. John Doe"
                   className=" border border-greySoft  border-opacity-50 p-1 md:p-2 rounded"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="email" className={`figtree-c`}>Enter Email*</label>
                  <input
                    id="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    placeholder="Eg. John@xyz.com"
                    className=" border border-greySoft  border-opacity-50 p-1 md:p-2 rounded"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="phone" className={`figtree-c`}>Enter Phone*</label>
                  <input
                    id="phone"
                    type="number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    name="phone"
                    placeholder="Eg. 1234567890"
                    className=" border border-greySoft border-opacity-50 p-1 md:p-2 rounded"
                  />
                </div>
              </div>
            )}
            {currentPage === 2 && (
              <div className="social flex flex-col gap-5">
                <div className=" flex flex-col gap-2">
                  <label htmlFor="Instagram" className={`figtree-c`}>Instagram Link (Optional)  </label>
                  <input
                    id="Instagram"
                    type="text"
                    value={formik.values.instagram}
                    onChange={formik.handleChange}
                    name="instagram"
                    placeholder="Eg...instagram.com/username"
                    className=" border border-greySoft  border-opacity-50 p-1 md:p-2 rounded"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="Youtube" className={`figtree-c`}>Youtube Link (Optional)</label>
                  <input
                    id="Youtube"
                    type="text"
                    value={formik.values.youtube}
                    onChange={formik.handleChange}
                    name="youtube"
                    placeholder="Eg...youtebe/username"
                    className=" border border-greySoft  border-opacity-50 p-1 md:p-2 rounded"
                  />
                </div>
              </div>
            )}
          </form>
        </div>
        <div className="footer px-7 py-3 flex justify-end gap-5">
          {currentPage === 1 && (
            <button onClick={handleNext} className={`py-2 px-3 rounded-lg text-white bg-blueS figtree-c cursor-pointer`}>Next</button>
          )}
          {currentPage === 2 && (
            <button onClick={handleBack} className={`py-2 px-3 rounded-lg text-white bg-blueS figtree-c cursor-pointer`}>Back</button>
          )}
           {currentPage === 2 && (
            <button type="submit" onClick={handleDone}className={`py-2 px-3 rounded-lg text-white bg-blueS figtree-c cursor-pointer flex gap-2`}>Done {loading && <img src={loader} alt="gif" width={20} height={20}/>} </button>
          )}

          
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
