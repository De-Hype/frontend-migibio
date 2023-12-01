import Cookies from "js-cookie";
import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from 'next/router'
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Backend_Url } from "../utils/server";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  useEffect(() => {
    if (Cookies.get('isLoggedIn') === 'true'){
      Router.push('/')
    } 
  }, [])
  

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${Backend_Url}/login`, {
        email,
        password,
      });
      const cookie_Data = await result.data.activeUser
      console.log(cookie_Data)
      Cookies.set("activeUser", cookie_Data )
      // console.log(result)
        if (Cookies.get('activeUser') == cookie_Data) {
         Cookies.set("isLoggedIn", "true");
<<<<<<< HEAD
         toast.success("Login Successful", {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
=======
      alert('Login Succesful');
toast.success("Login Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
>>>>>>> ac2b8d3e85424f4074c96b4b647c09a0a01053dd
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
<<<<<<< HEAD
        });
           router.push("/");
      } 
=======
        });         
         router.push("/");
        } else {
         console.log("You are a piece of shit");
        }
        
>>>>>>> ac2b8d3e85424f4074c96b4b647c09a0a01053dd
    } catch (error) {
      toast.error("Error Occured While Trying To Log In", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Log In</title>
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
        <h3 className="text-center font-bold text-3xl text-white pb-3">
          Log In
        </h3>
        <form
          onSubmit={onLogin}
          className="flex items-center justify-center flex-col  text-white phones:w-72"
        >
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 outline-none rounded-sm border mb-3 w-full bg-black"
            placeholder="Email Address"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 outline-none rounded-sm border mb-3 w-full bg-black"
            placeholder="Password"
          />
          <input
            type="submit"
            className="px-4 py-1 font-bold outline-none rounded-sm mb-3 w-full bg-white text-black cursor-pointer"
            value="Log In"
          />
        </form>
        
        <p className=" text-lg  cursor-pointer hover:text-stone-400">
          <Link href="/register">Register</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
