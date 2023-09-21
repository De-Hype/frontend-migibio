import Link from "next/link";
import { AiOutlineSubnode, AiOutlineThunderbolt, AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-3 py-3 border">
      {/* <div > */}
        <Link className="flex items-center cursor-pointer" href='/'>
        <h3 className="text-base font-bold mr-2">MigiBio</h3>
        <AiOutlineThunderbolt />
        </Link>
      {/* </div> */}
      <div className="flex items-center">
        <div id="dark mode" className="mr-3">
          <AiOutlineSubnode className="cursor-pointer" onClick={''} />
        </div>
        {/* <Link
          className="bg-blue-950 cursor-pointer text-slate-50 px-2 py-1"
          href="/login"
        >
          Sign In
        </Link> */}
        <AiOutlineUser className="cursor-pointer" onClick={''}/>
      </div>
      
    </header>
  );
};

export default Header;
