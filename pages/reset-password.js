import axios from "axios"
import Head from "next/head"
import Router from "next/router"
import { useEffect } from "react"
import { useState } from "react"


const resetPassword = () => {
    // const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
      if (Cookies.get('isLoggedIn') === 'true'){
        Router.push('/')
      } 
    }, [])
    const onForgot =(e)=>{
      e.preventDefault()
      try {
        
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <>
      <Head>
        <title>Reset Password</title>
      </Head>
      <div className="bg-black h-screen flex items-center justify-center text-white flex-col">
        <h3 className="text-center font-bold text-3xl text-white pb-4">
         Reset Password
        </h3>
        <form
       onSubmit={onForgot}
          className="flex items-center justify-center flex-col  text-white phones:w-72"
        >
          {/* <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 outline-none rounded-sm border mb-5 w-full bg-black"
            placeholder="Email Address"
          /> */}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 outline-none rounded-sm border mb-5 w-full bg-black"
            placeholder="New Password"
          />

          <input
            type="submit"
            className="px-4 py-1 font-bold outline-none rounded-sm mb-3 w-full bg-white text-black cursor-pointer"
            value="Submit"
          />
        </form>
        
      </div>
    </>
  )
}

export default resetPassword