import ModalContext from "@/context/ModalContext";
import Image from "next/image";
import { useContext, useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import Link from "next/link";
import { useRouter } from "next/router";
import { Select } from "antd";
import TranslateContext from "@/context/useTranslate";
import Modal from "./Modal";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   const [hide, setHide] = useState<boolean>(false);
    const router = useRouter();
	const { locale } = router;
	const [localeValue, setLocaleValue] = useState<any>(locale);
	

    const { modalOpen} = useContext(ModalContext);
  
    const translation:any = useContext(TranslateContext);
  
     

    const changeLang = (e: any) => {
  	    const locale = e;
  	    router.push({pathname: router.pathname, query: router.query}, router.asPath, {locale});
  	    setLocaleValue(locale);
    };  

  return (
    <>
      {modalOpen ? (
          <Modal/>
      ) : null}

      <header
            className={`w-full fixed top-0 left-0 z-50 border-b-4 ${
               hide ? "border-white" : "border-blue"
            } bg-white`}
         >
            <div className="custom-container flex items-center justify-between py-3 ">
               <div className="w-[240px] max-2xl:w-[140px] max-xl:w-[180px] max-md:w-[130px]">
                  <Link href={"/"}>
                     <Image
                        className="w-auto h-auto"
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
                           <Link href={"#courses"}>
                              {translation?.header?.courses}
                           </Link>
                        </li>
                        <li className="max-xl:text-sm">
                           <Link href={"#teacher"}>
                              {translation?.header?.teachers}
                           </Link>
                        </li>
                        <li className="max-xl:text-sm">
                           <Link href={"#tests"}>
                              {translation?.header?.tests}
                           </Link>
                        </li>
                        <li className="max-xl:text-sm">
                           <Link href={"#about"}>
                              {translation?.header?.aboutSchool}
                           </Link>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="flex items-center gap-20">
                  <div className="">
                     <Select
                        defaultValue={localeValue}
                        style={{
                           width: "110px",
                           display: "flex",
                           justifyItems: "center",
                           justifyContent: "center",
                        }}
                        value={localeValue}
                        onChange={(e: any) => changeLang(e)}
                        options={[
                           {
                              value: "ru",
                              label: (
                                 <p className="flex items-center gap-1">
                                    <Image
                                       width={100}
                                       height={100}
                                       src="/images/russia.svg"
                                       alt="russia"
                                       className="w-[20px]"
                                    />
                                    {"RU"}
                                 </p>
                              ),
                           },
                           {
                              value: "uz",
                              label: (
                                 <span className="flex items-center gap-1">
                                    <Image
                                       width={100}
                                       height={100}
                                       src="/images/uzb.png"
                                       alt="uzb"
                                       className="w-[20px]"
                                    />
                                    {"UZ"}
                                 </span>
                              ),
                           },
                           {
                              value: "en",
                              label: (
                                 <span className="flex items-center gap-1">
                                    <Image
                                       width={100}
                                       height={100}
                                       src="/images/usa.png"
                                       alt="usa"
                                       className="w-[20px]"
                                    />
                                    {"USA"}
                                 </span>
                              ),
                           },
                        ]}
                     />
                  </div>
                  <div className="max-lg:hidden">
                     <Link
                        href={"#form"}
                        className="max-2xl:text-[18px] px-10 max-2xl:px-5 max-xl:px-3 py-3 max-2xl:py-2 rounded-md bg-blue text-white"
                     >
                        {translation?.header?.application}
                     </Link>
                  </div>
               </div>
               <div className="max-lg:block hidden">
                  <button onClick={() => setHide(!hide)}>
                     {hide ? (
                        <AiOutlineClose size={25} className="text-blue" />
                     ) : (
                        <GiHamburgerMenu size={25} className="text-blue" />
                     )}
                  </button>
               </div>
            </div>
         </header>

         <div
            className={`${
               hide ? "block" : "hidden"
            } w-full fixed z-50 top-12 left-0 py-5 flex flex-col items-center border-b-4 border-blue bg-white`}
         >
            <nav>
               <ul className="flex flex-col items-center gap-2">
                  <li className="text-sm">
                     <Link href={"#courses"}>
                        {translation?.header?.courses}
                     </Link>
                  </li>
                  <li className="text-sm">
                     <Link href={"#teacher"}>
                        {translation?.header?.teachers}
                     </Link>
                  </li>
                  <li className="text-sm">
                     <Link href={"#tests"}>{translation?.header?.tests}</Link>
                  </li>
                  <li className="text-sm">
                     <Link href={"#about"}>
                        {translation?.header?.aboutSchool}
                     </Link>
                  </li>
               </ul>
            </nav>
            <div className="mt-7">
               <Link
                  href={"#form"}
                  className="text-[18px] px-3 py-2 rounded-md bg-blue text-white"
               >
                  {translation?.header?.application}
               </Link>
            </div>
         </div>
      </>
   );
};

export default Header;
