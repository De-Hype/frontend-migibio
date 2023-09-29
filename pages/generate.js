import Head from "next/head";
import { useEffect, useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { ClickCopy } from "../redux/userSlice";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Backend_Url } from "../utils/server";
import Cookies from "js-cookie";

const Generate = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const [isgenerating, setIsGenerating] = useState(true)
  const dispatch = useDispatch();
  const justClicked = useSelector((state) => state.user.clickCopy);
  useEffect(() => {
    if (Cookies.get('isLoggedIn') !== 'true'){
      Router.push('/login')
    } 
  }, [])

  //We Are Going To Make It Possible So That When The New State Comes, The Copy Icon Will Have It Normal Color
  const submitGenerate = async (e) => {
    setIsGenerating(false)
    e.preventDefault();
    try {
      console.log(text);
      const res = await axios.post(
        `${Backend_Url}/completions`,
        text
      );
      const results = res.data.feedback;
      setResult(results);
      setShowIcon(true);
      setIsGenerating(true)
      
    } catch (error) {
      console.error(error);
    }
  };
  const changeOnCopy = () => {
    dispatch(ClickCopy());
    toast.success("Succesfully copied to clipboard!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <Head>
        <title>Generate Bio</title>
      </Head>
      <Header />
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
      <div className="flex justify-center py-5  item-center mt-7  ">
        <div className="w-3/4 flex justify-center  item-center flex-col  ">
          <form
            onSubmit={submitGenerate}
            className="w-3/4 self-center  px-4 py-3 texr-center "
          >
            <textarea
              name="message"
              placeholder="Enter Some Informations About Yourself"
              className=" outline-none border w-full px-3 py-2 resize-none"
              id="textarea"
              cols="30"
              rows="10"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <input
              type="submit"
              className="px-4 py-1 font-bold outline-none rounded-sm my-3 w-full bg-black text-white cursor-pointer"
              value={isgenerating ? "Generate" : "Please Wait..."}
            />
          </form>
          
          <div className="border py-3 px-4 mt-3 relative">
            {showIcon && (
              <CopyToClipboard text={result} onCopy={changeOnCopy}>
                <AiOutlineCopy
                  className={
                    !justClicked
                      ? "absolute right-3 cursor-pointer   "
                      : "absolute right-3 cursor-pointer text-blue-800"
                  }
                />
              </CopyToClipboard>
            )}
            <p className="text-center pt-5">{result}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Generate;
