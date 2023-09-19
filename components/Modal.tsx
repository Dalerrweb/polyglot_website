import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { setCookie,hasCookie, getCookie, deleteCookie } from 'cookies-next';
import ModalContext from "@/context/ModalContext";
import { useRouter } from "next/router";
import TranslateContext from "@/context/useTranslate";



function Modal() {
	const {changeModal, modalTestID } = useContext(ModalContext);
	const translation:any = useContext(TranslateContext)
	
	const [secondModal, setSecondModal] = useState<boolean>(hasCookie("infoStudent"));
	const [infoStudent, setInfoStudent] = useState<any>();
	
	const router = useRouter();

	useEffect(() => {
		if(secondModal){
			const getInfoStudent:any = getCookie("infoStudent")
			setInfoStudent(JSON.parse(getInfoStudent))
		}
	}, [])
	
	const ModalSubmit = (e: any) => {
		e.preventDefault();
	
		let data: any = {};
	
		const formData = new FormData(e.target);
	
		formData.forEach((value, key): any => {
		  data[key] = value;
		});
	
		setCookie("infoStudent", data)
		changeModal(false);
	
		router.push(`/${modalTestID}`);
	}; 


  return (
    <div className="fixed top-0 left-0 z-[55] w-screen h-screen backdrop-blur-sm bg-black/75">
      <div className="w-1/2 max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] p-10 max-md:p-5 rounded-2xl fixed top-1/2 left-1/2 z-[60] -translate-x-1/2 -translate-y-1/2 bg-orange text-center">
        <IoClose
          onClick={() => changeModal(false)}
          size={40}
          className="text-white absolute top-5 right-5 max-md:top-2 max-md:right-2 cursor-pointer"
        />
        {secondModal ? (
          <>
            <button
              onClick={() => {
                router.push(`/${modalTestID}`);
                changeModal(false);
              }}
              type="submit"
              className="w-[70%] mb-5 small_text_size py-4 max-2xl:py-3 max-sm:py-2 font-medium rounded-md bg-blue text-white"
            >
              Продолжить как {infoStudent?.name}
            </button>
            <button
              onClick={() => {
                deleteCookie("infoStudent");
                setSecondModal(hasCookie("infoStudent"));
              }}
              type="submit"
              className="w-[70%] small_text_size py-4 max-2xl:py-3 max-sm:py-2 font-medium rounded-md bg-blue text-white"
            >
              Изменить данные
            </button>
          </>
        ) : (
          <>
            <p className="text_size font-bold text-blue mb-5 text-center m-auto">
              {translation?.modalTestStart?.title}
            </p>
            <form
              onSubmit={ModalSubmit}
              className="w-full flex flex-col justify-center items-center gap-5"
            >
              <input
                type="text"
                required
                name="name"
                placeholder="Имя"
                className="w-[70%] small_text_size focus:border-blue px-6 max-2xl:px-[20px] py-[16px] max-3xl:py-[12px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
              />
              <input
                type="number"
                name="number"
                required
                placeholder="+998 90 123 45 67"
                className="w-[70%] small_text_size focus:border-blue px-6 max-2xl:px-[20px] py-[16px] max-3xl:py-[12px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
              />
              <button
                type="submit"
                className="w-[70%] small_text_size py-4 max-2xl:py-3 max-sm:py-2 font-medium rounded-md bg-blue text-white"
              >
                {translation?.modalTestStart?.button}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
