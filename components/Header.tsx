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

   const { modalOpen } = useContext(ModalContext);

   const translation: any = useContext(TranslateContext);

   const changeLang = (e: any) => {
      const locale = e;
      router.push(
         { pathname: router.pathname, query: router.query },
         router.asPath,
         { locale }
      );
      setLocaleValue(locale);
   };

   return (
      <>
         {modalOpen ? <Modal /> : null}

         <header
            className={`w-full fixed top-0 left-0 z-[55] backdrop-blur-[100px] border-blue bg-white/60 ${
               hide ? "border-b-8" : "border-b-4"
            }`}
         >
            <div className="custom-container flex items-center justify-between py-3">
               <div className="w-[240px] max-2xl:w-[140px] max-xl:w-[150px] max-md:w-[130px]">
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
                        <li>
                           <Link href={"#courses"} className="max-xl:text-xs">
                              {translation?.header?.courses}
                           </Link>
                        </li>
                        <li>
                           <Link href={"#teacher"} className="max-xl:text-xs">
                              {translation?.header?.teachers}
                           </Link>
                        </li>
                        <li>
                           <Link href={"#tests"} className="max-xl:text-xs">
                              {translation?.header?.tests}
                           </Link>
                        </li>
                        <li>
                           <Link href={"#about"} className="max-xl:text-xs">
                              {translation?.header?.aboutSchool}
                           </Link>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="flex items-center gap-20 max-2xl:gap-10 max-xl:gap-5">
                  <div className="flex gap-5 max-sm:gap-2">
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
                     <div className="max-lg:block hidden">
                        <button onClick={() => setHide(!hide)}>
                           {hide ? (
                              <AiOutlineClose size={30} className="text-blue" />
                           ) : (
                              <GiHamburgerMenu
                                 size={30}
                                 className="text-blue"
                              />
                           )}
                        </button>
                     </div>
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
            </div>
         </header>

         <div
            className={`${
               hide ? "block" : "hidden"
            } w-screen h-full fixed top-0 left-0 z-40 backdrop-blur-[100px] bg-white/30`}
         ></div>
         <div
            className={`${
               hide ? "block" : "hidden"
            } w-full fixed z-50 top-12 left-0  border-b-4  border-blue backdrop-blur-[100px] bg-white/60`}
         >
            <div className="custom-container py-5 flex flex-col">
               <nav className="w-full">
                  <ul className="flex flex-col">
                     <li className="mb-1">
                        <span className="text-xs text-[gray]">Контакты</span>
                     </li>
                     <li className="font- mb-3">
                        <Link href="tel:+998 90 503 30 30">
                           +998 90 503 30 30
                        </Link>
                     </li>
                     <li className="mb-1">
                        <span className="text-xs text-[gray]">Навигация</span>
                     </li>
                     <li
                        onClick={() => setHide(false)}
                        className="text-sm mb-3"
                     >
                        <Link href={"#courses"}>
                           {translation?.header?.courses}
                        </Link>
                     </li>
                     <li
                        onClick={() => setHide(false)}
                        className="text-sm mb-3"
                     >
                        <Link href={"#teacher"}>
                           {translation?.header?.teachers}
                        </Link>
                     </li>
                     <li
                        onClick={() => setHide(false)}
                        className="text-sm mb-3"
                     >
                        <Link href={"#tests"}>
                           {translation?.header?.tests}
                        </Link>
                     </li>
                     <li
                        onClick={() => setHide(false)}
                        className="text-sm mb-3"
                     >
                        <Link href={"#about"}>
                           {translation?.header?.aboutSchool}
                        </Link>
                     </li>
                     <li className="mb-1">
                        <span className="text-xs text-[gray]">Адрес</span>
                     </li>
                     <li className="mb-3">
                        <p>г.Самарканд, Дагбиская 8 Hilton Garden Inn</p>
                     </li>
                     <li className="mb-1">
                        <span className="text-xs text-[gray]">
                           Социональные сеты
                        </span>
                     </li>
                     <li className="flex gap-2">
                        <Link href={"#"} className="p-2 rounded-full bg-white">
                           <Image
                              src={"/images/icons/facebook.png"}
                              width={29}
                              height={29}
                              alt="facebook"
                           />
                        </Link>
                        <Link href={"#"} className="p-2 rounded-full bg-white">
                           <Image
                              src={"/images/icons/Instagram.png"}
                              width={31}
                              height={31}
                              alt="facebook"
                           />
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
         </div>
      </>
   );
};

export default Header;
