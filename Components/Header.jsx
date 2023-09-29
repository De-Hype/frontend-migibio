import Link from "next/link";
import { AiOutlineSubnode, AiOutlineThunderbolt, AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-3 py-3 border">

        <Link className="flex items-center cursor-pointer" href='/'>
        <h3 className="text-base font-bold mr-2">MigiBio</h3>
        <AiOutlineThunderbolt />
        </Link>
      <div className="flex items-center">
        <div id="dark mode" className="mr-3">
          <AiOutlineSubnode className="cursor-pointer"/>
        </div>
        
        <AiOutlineUser className="cursor-pointer"/>
      </div>
      
    </header>
  );
};

export default Header;
