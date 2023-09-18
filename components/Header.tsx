import Image from "next/image";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   const [hide, setHide] = useState<boolean>(false);

   return (
      <>
         <header className="w-full fixed top-0 left-0 z-50 border-b-4 border-blue bg-white">
            <div className="custom-container flex items-center justify-between py-3 ">
               <div className="w-[240px] max-2xl:w-[140px] max-xl:w-[130px] max-md:w-[110px]">
                  <Link href={"/"}>
                     <Image
                        className="w-auto h-auto cursor-pointer"
                        src={"/images/logo.svg"}
                        width={1000}
                        height={1000}
                        alt="logo"
                     />
                  </Link>
               </div>
               <div className="max-lg:hidden">
                  <nav>
                     <ul className="flex gap-11 max-2xl:gap-5">
                        <li className="max-xl:text-sm">
                           <Link href={"#courses"}>Курсы</Link>
                        </li>
                        <li className="max-xl:text-sm">
                           <Link href={"#teacher"}>Преподаватели</Link>
                        </li>
                        <li className="max-xl:text-sm">
                           <Link href={"#tests"}>Мини тесты</Link>
                        </li>
                        <li className="max-xl:text-sm">
                           <Link href={"#about"}>О школе</Link>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="flex items-center gap-14">
                  <div className="">
                     <select className="text-blue">
                        <option>RU</option>
                        <option>UZB</option>
                     </select>
                  </div>
                  <div className="max-lg:hidden">
                     <button className="max-2xl:text-[18px] px-10 max-2xl:px-5 max-xl:px-3 py-3 max-2xl:py-2 rounded-md bg-blue text-white">
                        Оставить заявку
                     </button>
                  </div>
               </div>
               <div className="max-lg:block hidden">
                  <button onClick={() => setHide(!hide)}>
                     {hide ? (
                        <AiOutlineClose size={25} color="red" />
                     ) : (
                        <GiHamburgerMenu size={25} className="text-blue" />
                     )}
                  </button>
               </div>
            </div>
         </header>

         {hide ? (
            <div className="w-full max-lg:block hidden fixed z-50 top-12 py-5 border-b-4 border-blue bg-white">
               <nav className="w-full">
                  <ul className="w-full flex flex-col items-center gap-2 ">
                     <li onClick={() => setHide(false)} className="text-sm">
                        <Link href={"#courses"}>Курсы</Link>
                     </li>
                     <li onClick={() => setHide(false)} className="text-sm">
                        <Link href={"#teacher"}>Преподаватели</Link>
                     </li>
                     <li onClick={() => setHide(false)} className="text-sm">
                        <Link href={"#tests"}>Мини тесты</Link>
                     </li>
                     <li onClick={() => setHide(false)} className="text-sm">
                        <Link href={"#about"}>О школе</Link>
                     </li>
                  </ul>
               </nav>
               <div className="flex items-center justify-center gap-2">
                  <button className="text-[14px] px-3 py-2 rounded-md mt-5 bg-blue text-white">
                     Оставить заявку
                  </button>
               </div>
            </div>
         ) : null}
      </>
   );
};

export default Header;
