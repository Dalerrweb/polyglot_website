import Image from "next/image";
import Link from "next/link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
   return (
      <footer className="relative mt-20">
         <div className="custom-container">
            <div className="max-md:hidden mb-7 max-xl:mb-3">
               <h2 className="text-[96px] max-3xl:text-[72px] max-2xl:text-[60px] max-xl:text-[48px] leading-[90.5px] font-semibold text-blue">
                  Оставить заявку
               </h2>
            </div>

            <div className="relative max-xl:flex max-lg:flex-col max-xl:justify-between max-xl:items-center z-10 py-16 px-[70px] max-xl:py-10 max-xl:px-14 max-lg:py-7 max-lg:px-10 max-md:pt-[27px] max-md:px-5 rounded-[40px] bg-orange">
               <div className="w-2/5 max-3xl:w-1/2 max-lg:w-full max-lg:mb-4">
                  <h2 className="max-md:block hidden text-[36px] max-[410px]:text-[32px] font-semibold mb-3 text-blue">
                     Оставить заявку
                  </h2>
                  <h2 className="text-[48px] max-2xl:text-[36px] max-sm:text-[28px] max-[430px]:text-[24px] leading-[54.5px] max-2xl:leading-[42px] font-medium mb-10 max-2xl:mb-8 max-sm:mb-3">
                     Если у вас остались вопросы -
                     <span className="truncate relative z-10 text-[48px] max-2xl:text-[36px] max-sm:text-[28px] max-[430px]:text-[24px] leading-[54.5px] max-2xl:leading-[32px] font-medium px-1 rounded-tr-[10%]">
                        <svg
                           className="max-2xl:w-[235px] max-2xl:h-[43px] max-sm:w-[187px] max-sm:h-[35px] max-[430px]:w-[160px] max-[430px]:top-0 absolute top-[2px] left-0 z-[-1]"
                           xmlns="http://www.w3.org/2000/svg"
                           width="310"
                           height="60"
                           viewBox="0 0 318 52"
                           fill="none"
                        >
                           <path
                              d="M4.0341 13.4339C4.58798 8.98225 8.33558 5.61818 12.821 5.54628L308.416 0.807541C313.885 0.719872 318.167 5.49006 317.492 10.9176L313.972 39.2073C313.418 43.6589 309.67 47.023 305.185 47.0949L9.58963 51.8336C4.12093 51.9213 -0.161066 47.1511 0.514241 41.7236L4.0341 13.4339Z"
                              fill="#EEEEEE"
                           />
                        </svg>
                        мы поможем
                     </span>
                  </h2>
                  <div className="max-w-[450px] w-full">
                     <p className="text-[32px] max-2xl:text-[24px] max-sm:text-[14px] max-sm:leading-[24px] leading-[40px] max-2xl:leading-[35px] text-[#181818]">
                        Наши консультанты помогут выбрать курс, расскажут всё о
                        программе обучения
                     </p>
                  </div>
               </div>

               <div className="max-lg:hidden w-64 max-2xl:w-60 absolute z-[-1] top-1/2 left-1/2 max-xl:left-[45%] -translate-x-1/2 -translate-y-1/2 max-3xl:-translate-x-[100%]">
                  <Image
                     src={"/images/parrot.png"}
                     width={1000}
                     height={1000}
                     alt="parrot"
                  />
               </div>

               <div className="max-lg:max-w-none max-w-[545px] max-2xl:max-w-[500px] max-xl:max-w-[400px] w-full px-10 py-10 max-2xl:px-8 max-2xl:py-8 max-md:py-[29px] max-md:px-[27px] xl:absolute xl:top-1/2 xl:right-[3%] xl:-translate-x-[3%] xl:-translate-y-[64%] shadow-[0px_3px_15px_#21209c33] rounded-[20px] bg-white">
                  <div className="mb-1">
                     <h3 className="text-[32px] max-xl:text-[24px] max-sm:text-[20px] max-[420px]:text-sm max-md:mb-2 font-semibold text-blue">
                        Бесплатная консультация
                     </h3>
                  </div>

                  <form className="flex flex-col gap-[24px]">
                     <input
                        type="text"
                        placeholder="Имя"
                        className="text-[24px] max-xl:text-[20px] px-6 py-[16px] max-2xl:py-3 max-xl:py-[10px] max-xl:px-3 rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
                     />
                     <input
                        type="text"
                        placeholder="+998 91 111 33 44"
                        className="text-[24px] max-xl:text-[20px] px-6 py-[16px] max-2xl:py-3 max-xl:py-[10px] max-xl:px-3 rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
                     />
                     <button className="max-xl:text-[16px] font-medium py-[12px] rounded-md bg-blue text-white">
                        Проконсультироваться
                     </button>
                  </form>

                  <div className="mt-[24px] max-xl:mt-[20px]">
                     <p className="text-[24px] max-xl:text-[20px] max-sm:text-[14px] max-2xl:leading-[30px] max-sm:leading-[18.826px] max-xl:leading-[25px] text-[#181818]">
                        Нажимая кнопку я принимаю условия политики и
                        пользовательского соглашения
                     </p>
                  </div>
               </div>
            </div>

            <div className="mt-[77px] max-md:mt-7 pb-10 flex max-lg:flex-col items-start">
               <div className="max-lg:w-full flex justify-center mr-[120px] max-lg:mb-8">
                  <Image
                     src={"/images/logo-white.png"}
                     width={315}
                     height={79}
                     alt="logo"
                  />
               </div>

               <div className="w-full grid grid-cols-4 max-2xl:grid-cols-2 max-sm:grid-cols-1 gap-5 text-white">
                  <div className="max-w-[255px] w-full">
                     <h3 className="text-[40px] font-semibold mb-2">Школа</h3>
                     <ul>
                        <li className="mb-2">О Нас</li>
                        <li className="mb-2">Академическая поддержка</li>
                        <li className="">Мини-тестирование</li>
                     </ul>
                  </div>
                  <div className="max-w-[255px] w-full">
                     <h3 className="text-[40px] font-semibold mb-2">Курсы</h3>
                     <ul>
                        <li className="mb-2">Based English</li>
                        <li className="mb-2">Maximum English</li>
                        <li className="">IELTS</li>
                     </ul>
                  </div>
                  <div className="max-w-[255px] w-full">
                     <h3 className="text-[40px] font-semibold mb-2">
                        Для связи
                     </h3>
                     <ul>
                        <li className="mb-2">
                           г.Самарканд, Дагбиская 8 Hilton Garden Inn
                        </li>
                        <li className="">+998 90 503 30 30</li>
                     </ul>
                  </div>
                  <div className="">
                     <h3 className="text-[40px] font-semibold mb-5">
                        Социальные сети
                     </h3>
                     <div className="w-fit flex gap-5">
                        <Link href={"#"} className="p-2 rounded-full bg-white">
                           ww
                        </Link>
                        <Link href={"#"} className="p-2 rounded-full bg-white">
                           ww
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="min-h-[555px] max-2xl:min-h-[700px] max-xl:min-h-[800px] max-sm:min-h-[1100px] absolute left-0 bottom-0 z-[-1] w-full rounded-t-[120px] max-2xl:rounded-t-[100px] max-md:rounded-t-[50px] bg-blue"></div>
      </footer>
   );
};

export default Footer;
