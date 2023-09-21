import Cookies from "js-cookie";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import { useState } from "react";

const OTP = () => {
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [three, setThree] = useState('')
  const [four, setFour] = useState('')

  useEffect(() => {
    if (Cookies.get('isLoggedIn') === 'true'){
      Router.push('/')
    } 
  }, [])
  return (
    <>
      <Head>
        <title>Verify Account</title>
      </Head>
      <div className="bg-black h-screen flex items-center justify-center text-white flex-col">
        <h3 className="text-center font-bold text-3xl text-white pb-4">
          Enter OTP
        </h3>
        <form
          // onSubmit={onForgot}
          className="flex items-center justify-center flex-col  text-white phones:w-72"
        >
          <div className="flex">
            <input type="text" className="w-14 text-3xl p-3 text-center rounded m-1 bg-black border font-bold outline-none" maxLength="1" name="" id="" />
            <input type="text" className="w-14 text-3xl p-3 text-center rounded m-1 bg-black border font-bold outline-none" maxLength="1" name="" id="" />
            <input type="text" className="w-14 text-3xl p-3 text-center rounded m-1 bg-black border font-bold outline-none" maxLength="1" name="" id="" />
            <input type="text" className="w-14 text-3xl p-3 text-center rounded m-1 bg-black border font-bold outline-none" maxLength="1" name="" id="" />
          </div>
        </form>
        <button className="mt-2 font-bold text-lg hover:text-gray-400">Resend after 20 minutes </button>
        <p className="text-gray-400 text-xs mt-2">00:20:00</p>

        {/* {
          showNotification && <CheckEmail/>
        } */}
      </div>
    </>
  );
};

export default OTP;
