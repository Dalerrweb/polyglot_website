import ModalContext from "@/context/ModalContext";
import Image from "next/image";
import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";

import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";
import { Select } from "antd";
import TranslateContext from "@/context/useTranslate";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const router = useRouter();
	const { locale } = router;
	const [localeValue, setLocaleValue] = useState<any>(locale);

  const { modalOpen, changeModal, setInfoStudent, modalTestID } =useContext(ModalContext);

  const translation:any = useContext(TranslateContext)

  const ModalSubmit = (e: any) => {
    e.preventDefault();

    let data: any = {};

    const formData = new FormData(e.target);

    formData.forEach((value, key): any => {
      data[key] = value;
    });

    setInfoStudent(data);
    changeModal(false);

    router.push(`/${modalTestID}`);
  };


  const changeLang = (e: any) => {
	const locale = e;
	router.push({pathname: router.pathname, query: router.query}, router.asPath, {locale});
	setLocaleValue(locale);
};

  return (
    <>
      {modalOpen ? (
        <>
          <div className="fixed top-0 left-0 z-[55] w-screen h-screen backdrop-blur-sm bg-black/75"></div>
          <div className="w-1/2 max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] p-10 max-md:p-5 rounded-2xl fixed top-1/2 left-1/2 z-[60] -translate-x-1/2 -translate-y-1/2 bg-orange text-center">
            <IoClose
              onClick={() => changeModal(false)}
              size={40}
              className="text-white absolute top-5 right-5 max-md:top-2 max-md:right-2 cursor-pointer"
            />
            <p className="text-2xl max-md:text-lg font-bold text-blue mb-5 text-center m-auto">
              {translation?.modalTestStart?.title}
            </p>
            <form
              onSubmit={ModalSubmit}
              className="flex flex-col justify-center items-center gap-5"
            >
              <input
                type="text"
                required
                name="name"
                placeholder="Имя"
                className="small_text_size focus:border-blue px-6 max-2xl:px-[20px] py-[16px] max-3xl:py-[12px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
              />
              <input
                type="number"
                name="number"
                required
                placeholder="+998 90 123 45 67"
                className="small_text_size focus:border-blue px-6 max-2xl:px-[20px] py-[16px] max-3xl:py-[12px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
              />
              <button
                type="submit"
                className="w-1/2 text_size py-4 max-2xl:py-3 max-sm:py-2 font-medium rounded-md bg-blue text-white"
              >
                {translation?.modalTestStart?.button}
              </button>
            </form>
          </div>
        </>
      ) : null}

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
                <li className="max-xl:text-sm">{translation?.header?.courses}</li>
                <li className="max-xl:text-sm">{translation?.header?.teachers}</li>
                <li className="max-xl:text-sm">{translation?.header?.tests}</li>
                <li className="max-xl:text-sm">{translation?.header?.aboutSchool}</li>
              </ul>
            </nav>
          </div>
          <div className="max-lg:hidden">
            <Select
              defaultValue={localeValue}
              style={{ width: 100, height:'auto',padding:0}}
              value={localeValue}
              onChange={(e: any) => changeLang(e)}
              options={[
                {
                  value: "ru",
                  label: (
                    <p className="flex items-center gap-1">
                      <img
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
                      <img
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
                      <img
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
            <button className="max-2xl:text-[18px] px-10 max-2xl:px-5 max-xl:px-3 py-3 max-2xl:py-2 rounded-md bg-blue text-white">
              {translation?.header?.application}
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
