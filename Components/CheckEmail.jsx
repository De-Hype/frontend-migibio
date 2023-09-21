import { hideCheckEmailNotification } from "../redux/userSlice";
import { AiOutlineMail } from "react-icons/ai";
import { useDispatch } from "react-redux";

const CheckEmail = () => {
  const dispatch = useDispatch();
  
  const clearNotification = () =>{
   dispatch(hideCheckEmailNotification())
   console.log('Hide');
  }

  return (
    <div className="absolute h-full flex justify-center items-center bg-opacity-10">
      <div className="bg-slate-900 py-8 px-2 flex justify-center items-center flex-col">
        <h3 className="w-6/12  text-center">
          An Activation Link Has Been Sent To Your Mail.
        </h3>
        <div className=" flex justify-center items-center my-3">
          <AiOutlineMail className="text-4xl text-white" />
        </div>
        <button
          type="submit"
          onClick={clearNotification}
          className="w-full py-2 bg-black rounded-md text-base"
        >
          Okay, exit
        </button>
      </div>
    </div>
  );
};

export default CheckEmail;
