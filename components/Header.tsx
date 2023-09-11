import Image from "next/image";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   return (
      <header className="border-b-4 border-blue">
         <div className="custom-container flex items-center justify-between py-7">
            <div className="">
               <Image
                  src={"/images/logo.svg"}
                  width={240}
                  height={60}
                  alt="logo"
               />
            </div>
            <div className="">
               <nav>
                  <ul className="flex gap-11">
                     <li>Курсы</li>
                     <li>Преподаватели</li>
                     <li>Мини тесты</li>
                     <li>О школе</li>
                  </ul>
               </nav>
            </div>
            <div className="">
               <select className="text-blue">
                  <option>RU</option>
                  <option>UZB</option>
               </select>
            </div>
            <div className="">
               <button className="px-10 py-3 rounded-md bg-blue text-white">
                  Оставить заявку
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;
