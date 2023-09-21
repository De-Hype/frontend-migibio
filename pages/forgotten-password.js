import axios from "axios";
import CheckEmail from "../Components/CheckEmail";
import { showCheckEmailNotification } from "../redux/userSlice";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Backend_Url } from "../utils/server";
import Cookies from "js-cookie";
import Router from "next/router";


const forgottenPassword = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (Cookies.get('isLoggedIn') === 'true'){
      Router.push('/')
    } 
  }, [])
  
  const dispatch = useDispatch();
  const showNotification = useSelector((state) => state.user.showCheckEmail);
  
  const onForgot =async  (e) => {
    e.preventDefault();
    try {
      // await axios.post(`${Backend_Url}/forgot-password`,{email})
      // We Will Set A Redux value of ours to be false here
      dispatch(showCheckEmailNotification());
      setInterval(() => {
        Router.push('/OTP')
      }, 10000);
      
      console.log('Email Sent')
    } catch (error) {
      console.error(error)
    }
    
  };
  return (
    <>
      <Head>
        <title>Forgoten Password</title>
      </Head>
      <div className="bg-black h-screen flex items-center justify-center text-white flex-col">
        <h3 className="text-center font-bold text-3xl text-white pb-4">
          Forgotten Password
        </h3>
        <form
          onSubmit={onForgot}
          className="flex items-center justify-center flex-col  text-white phones:w-72"
        >
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 outline-none rounded-sm border mb-5 w-full bg-black"
            placeholder="Email Address"
          />

          <input
            type="submit"
            className="px-4 py-1 font-bold outline-none rounded-sm mb-3 w-full bg-white text-black cursor-pointer"
            value="Forgot Password"
          />
        </form>
        {
         showNotification && <CheckEmail/>
        }
      </div>
    </>
  );
};

export default forgottenPassword;
