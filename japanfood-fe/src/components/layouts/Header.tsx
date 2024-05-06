import { Link } from "react-router-dom";
import DynamicLayout from "./DynamicLayout";
import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useUser } from "../../contexts/AuthContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
var selected = "text-orange-500 relative before:absolute before:w-2 before:h-2 before:rounded-full before:lg:-bottom-2 before:md:-bottom-1 before:left-1/2 before:bg-orange-500 before:-translate-x-1/2 before:-translate-y-1/2"
export default function Header({menu} : {menu: string}) {
  
  const {user} = useUser()

  const [hamburger, setHamburger] = useState<boolean>(false);

  const hamburgerToggle = () => {
    setHamburger(prevHamburger => !prevHamburger);
  };


  return (
    <div>
      <div className={`transform ${!hamburger ? "-translate-x-full" : "translate-x-0"} transition-transform ease-in duration-150 fixed flex flex-col font-Merienda w-full h-screen items-center justify-center gap-24 bg-[#333333] z-40 md:hidden`}>
          
          <div className="absolute top-0 right-0 text-white z-50 p-6" onClick={hamburgerToggle}>
          <IoMdClose className="text-2xl"/>
          </div>
            <Link to={"/"}  className={(menu === "Home" ? "text-orange-500 " : '') + "hover:text-custom-orange hover:cursor-pointer text-3xl z-50"}>Home</Link>
            <Link to={"/menu"} className={(menu === "Menu" ? "text-orange-500 " : '') + "hover:text-custom-orange hover:cursor-pointer text-3xl z-50"}>Menu</Link>
            <Link to={"/"} className={(menu === "About" ? "text-orange-500 " : '') + "hover:text-custom-orange hover:cursor-pointer text-3xl z-50"}>About</Link>
            <Link to={"/"} className={(menu === "Sessions" ? "text-orange-500 " : '') + "hover:text-custom-orange hover:cursor-pointer text-3xl z-50"}>Sessions</Link>
        </div>
  
    <DynamicLayout border={true}>
      <div className="flex justify-between py-6 mb-2 relative">
      <div className="flex items-center gap-4">
        <div><RxHamburgerMenu className="text-2xl md:hidden inline-block" onClick={hamburgerToggle}/></div>
        <div className="font-Merienda text-2xl text-custom-orange font-bold">Eimi Sushi</div>
        </div>
        <div className="gap-6 lg:gap-10 xl:gap-12 font-Merienda md:flex hidden">
          <Link to={"/"}  className={menu === "Home" ? selected : '' + "hover:text-custom-orange hover:cursor-pointer"}>Home</Link>
          <Link to={"/menu"} className={menu === "Menu" ? selected : '' + "hover:text-custom-orange hover:cursor-pointer"}>Menu</Link>
          <Link to={"/"} className={menu === "About" ? selected : '' + "hover:text-custom-orange hover:cursor-pointer"}>About</Link>
          <Link to={"/"} className={menu === "Sessions" ? selected : '' + "hover:text-custom-orange hover:cursor-pointer"}>Sessions</Link>
        </div>
        {user ? (<div className="flex items-center gap-5">
          <IoCart className="text-2xl cursor-pointer text-custom-orange"/>
          <CgProfile className="text-2xl cursor-pointer"/>
        </div>) : 
        (
          <Link to={"/login"} className="bg-custom-orange md:px-4 md:py-2 text-white md:text-base text-xs px-2 py-2"> Login/Register</Link>
          )}
        
      </div>
    </DynamicLayout>
          </div>
  );
}


