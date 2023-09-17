import ModalContext from "@/context/ModalContext";
import Image from "next/image";
import { useContext} from "react";
import { IoClose } from 'react-icons/io5';

import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {

   const {modalOpen, changeModal,setInfoStudent, modalTestID} = useContext(ModalContext)
   const router = useRouter()

    const ModalSubmit = (e:any) =>{
        e.preventDefault()
		
		let data:any = {}

        const formData = new FormData(e.target)

		formData.forEach((value, key):any=>{
			data[key] = value
		})
 
		setInfoStudent(data)
      changeModal(false)

      router.push(`/${modalTestID}`)
   }

   return (
      <>
	  {
		modalOpen ? (
			<>
			    <div className="fixed top-0 left-0 z-[55] w-screen h-screen backdrop-blur-sm bg-black/75"></div>
                <div className="w-1/2 p-10 rounded-2xl fixed top-1/2 left-1/2 z-[60] -translate-x-1/2 -translate-y-1/2 bg-orange text-center">
	    	    <IoClose onClick={()=> changeModal(false)} size={40} className="text-white absolute top-5 right-5 cursor-pointer"/>
                  <p className="text_size font-bold text-blue mb-5 text-center w-1/2 m-auto">Заполните форму, чтобы начать тестирование</p>
                  <form onSubmit={ModalSubmit} className="flex flex-col justify-center items-center gap-5">
	    	    	<input
                        type="text"
	    	    		required
						name="name"
                        placeholder="Имя"
                        className="text-[24px] focus:border-blue max-xl:text-[20px] px-6 max-2xl:px-[20px] py-[16px] max-3xl:py-[12px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
                      />
	    	    	<input
                        type="number"
						name="number"
	    	    	    required
                        placeholder="+998 90 123 45 67"
                        className="text-[24px] focus:border-blue max-xl:text-[20px] px-6 max-2xl:px-[20px] py-[16px] max-3xl:py-[12px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
                      />
	    	    	<button type="submit" className="w-1/2 py-4 max-3xl:py-3 font-medium rounded-md bg-blue text-white">
	    	    	    Начинать
	    	    	</button>
                  </form>
                </div>
			</>
		):null
	  }
      

      <header className="w-full fixed top-0 left-0 z-50 border-b-4 border-blue bg-white">
         <div className="custom-container flex items-center justify-between py-3 ">
            <div className="w-[240px] max-2xl:w-[140px] max-xl:w-[180px] max-md:w-[130px]">
               <Image
               className="w-auto h-auto"
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
               <button className="max-2xl:text-[18px] px-10 max-2xl:px-5 max-xl:px-3 py-3 max-2xl:py-2 rounded-md bg-blue text-white">
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
      </>
   );
};

export default Header;
