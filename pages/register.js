import Cookies from "js-cookie"
import { Backend_Url } from "../utils/server"
import axios from "axios"
import Head from "next/head"
import Link from "next/link"
import Router, { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const register = () => {
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (Cookies.get('isLoggedIn') === 'true'){
          Router.push('/')
        } 
      }, [])

    const onRegister = async (e) =>{
        e.preventDefault()
        try {
             await axios.post(`${Backend_Url}/register`, {
                 fullName, username, email, password
            })
            router.push('/login')
            toast.success("Please Check Email For Account Activation Link", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            // console.log('Account Created')
        } catch (error) {
            console.log(error)
            alert('Error Occured In Account Creation')
        }
    }

  return (
   <>
   <Head>
   <title>Register</title>
   </Head>
   <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
   <div className="bg-black h-screen flex items-center justify-center text-white flex-col">
   
        <h3 className="text-center font-bold text-3xl text-white pb-3">Register</h3>
        <form onSubmit={onRegister} className="flex items-center justify-center flex-col  text-white phones:w-72">
            <input type='text' onChange={(e)=> setFullName(e.target.value)} className="px-4 py-2 outline-none rounded-sm border mb-3 w-full  bg-black" placeholder="Full Name"/>
            <input type='text' onChange={(e)=> setUsername(e.target.value)} className="px-4 py-2 outline-none rounded-sm border mb-3 w-full bg-black" placeholder="Username"/>
            <input type='email' onChange={(e)=> setEmail(e.target.value)} className="px-4 py-2 outline-none rounded-sm border mb-3 w-full bg-black" placeholder="Email Address"/>
            <input type='password' onChange={(e) => setPassword(e.target.value)} className="px-4 py-2 outline-none rounded-sm border mb-3 w-full bg-black"  placeholder="Password"/>
            <input type='submit' className="px-4 py-1 font-bold outline-none rounded-sm mb-3 w-full bg-white text-black cursor-pointer" value='Register'/>
        </form>
        <p className="text-center font-bold text-xl pb-3" >Or</p>
        <p className=" text-lg  cursor-pointer hover:text-stone-400" ><Link href='/login'>Log In</Link></p>
        
   </div>
   </>
  )
}

export default register