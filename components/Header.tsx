import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   return (
      <header className="border-b-4 border-blue">
         <div className="custom-container flex items-center justify-between py-7 max-lg:py-5">
            <div className="w-[240px] max-2xl:w-[200px] max-xl:w-[180px] max-md:w-[130px]">
               <Image
                  src={"/images/logo.svg"}
                  width={1000}
                  height={1000}
                  alt="logo"
               />
            </div>
            <div className="max-lg:hidden">
               <nav>
                  <ul className="flex gap-11 max-2xl:gap-5">
                     <li className="max-xl:text-sm">Курсы</li>
                     <li className="max-xl:text-sm">Преподаватели</li>
                     <li className="max-xl:text-sm">Мини тесты</li>
                     <li className="max-xl:text-sm">О школе</li>
                  </ul>
               </nav>
            </div>
            <div className="max-lg:hidden">
               <select className="text-blue">
                  <option>RU</option>
                  <option>UZB</option>
               </select>
            </div>
            <div className="max-lg:hidden">
               <button className="max-xl:text-sm px-10 max-2xl:px-6 max-xl:px-3 py-3 rounded-md bg-blue text-white">
                  Оставить заявку
               </button>
            </div>
            <div className="max-lg:block hidden">
               <button>
                  <GiHamburgerMenu size={25} className="text-blue" />
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;
