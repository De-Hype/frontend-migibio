import { useEffect, useState } from "react";
import axios from "axios";
import { Backend_Url } from "../../utils/server";
import Head from "next/head";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";
import { AiOutlineHdd } from "react-icons/ai";
import Link from "next/link";


const activate = () => {
  const [success, setSuccess] = useState(null);
  const router = useRouter()
  const {activationToken} =  router.query
  useEffect(() => {
    if (Cookies.get("isLoggedIn") === "true") {
      Router.push("/login");
    }
 
  console.log(activationToken)
  const onLoad = async () => {
    
     
      if (activationToken !== undefined ){
        try {
          await axios.post(`${Backend_Url}/activate-acount/${activationToken}`)
          console.log('Working')
          setSuccess(true);
          console.log(activationToken, 'Line 18')
        } catch (error) {
          console.error(error);
          setSuccess(false);
        }
      } else  {
        console.log(activationToken, 'Line 21')
        
      }
  };
    onLoad()
  }, [activationToken]);

  return (
    <>
      <Head>
        <title>Accounted Successfull</title>
      </Head>
      <div className="h-screen bg-black flex items-center justify-center">
        {success ? (
          <>
            <p className="text-center text-white text-2xl">
              Account Created Succesfully
            </p>
            <AiOutlineHdd className="text-white text-5xl font-extrabold" />
            <Link href="/login" className="mt-4 underline">
              Log In Account
            </Link>
          </>
        ) : (
          <p className="text-center text-white text-2xl">
            
          </p>
        )}
      </div>
    </>
  );
};

export default activate;
