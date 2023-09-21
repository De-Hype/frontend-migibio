import Cookies from "js-cookie"
import Router from "next/router"
import { useEffect } from "react"

const about = () => {
  useEffect(() => {
    if (Cookies.get('isLoggedIn') !== 'true'){
      Router.push('/login')
    } 
  }, [])
  return (
    <div>about</div>
  )
}

export default about