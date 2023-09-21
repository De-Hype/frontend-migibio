import Header from '../Components/Header'
import Head from 'next/head'
import Hero from '../Components/Hero'
import Generator from '../Components/Generator'
import Footer from '../Components/Footer'
import Cookies from 'js-cookie'
import Router  from "next/router";
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    if (Cookies.get('isLoggedIn') !== 'true'){
       Router.push('/login')
    } 
  }, [])
  
  

  
  return (
    <>
      <Head>
        <title>MigiBio</title>
        <meta name="description" content="The Official MigiBio Profile Bio Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero/>
      <Generator/>
      <Footer/>
    </>
  )
  
}
