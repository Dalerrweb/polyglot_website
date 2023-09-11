import Image from "next/image";
import Link from "next/link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
   return (
      <footer className="relative">
         <div className="custom-container">
            <div className="mb-7">
               <h2 className="text-[96px] leading-[90.5px] font-semibold text-blue">
                  Оставить заявку
               </h2>
            </div>

            <div className="relative py-16 px-[70px] rounded-[40px] bg-orange">
               <div className="w-2/5">
                  <h2 className="text-[48px] leading-[54.5px] font-medium mb-10">
                     Если у вас остались вопросы -
                     <span className="truncate relative z-10 text-[48px] leading-[54.5px] font-medium px-1 rounded-tr-[10%]">
                        <svg
                           className="absolute top-[2px] left-0 z-[-1]"
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
                     <p className="text-[32px] leading-[40px] text-[#181818]">
                        Наши консультанты помогут выбрать курс, расскажут всё о
                        программе обучения
                     </p>
                  </div>
               </div>

               <div className="w-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image
                     src={"/images/parrot.png"}
                     width={1000}
                     height={1000}
                     alt="parrot"
                  />
               </div>

               <div className="max-w-[545px] w-full px-10 py-10 absolute top-1/2 right-[3%] -translate-x-[3%] -translate-y-[64%] shadow-[0px_3px_15px_#21209c33] rounded-[20px] bg-white">
                  <div className="mb-1">
                     <h3 className="text-[32px] font-semibold text-blue">
                        Бесплатная консультация
                     </h3>
                  </div>

                  <form className="flex flex-col gap-[24px]">
                     <input
                        type="text"
                        placeholder="Имя"
                        className="text-[24px] px-6 py-[16px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
                     />
                     <input
                        type="text"
                        placeholder="+998 91 111 33 44"
                        className="text-[24px] px-6 py-[16px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
                     />
                     <button className="py-[12px] font-medium rounded-md bg-blue text-white">
                        Проконсультироваться
                     </button>
                  </form>

                  <div className="mt-[24px]">
                     <p className="text-[24px] text-[#181818]">
                        Нажимая кнопку я принимаю условия политики и
                        пользовательского соглашения
                     </p>
                  </div>
               </div>
            </div>

            <div className="mt-[77px] pb-10 flex items-start">
               <div className="mr-[120px]">
                  <Image
                     src={"/images/logo-white.png"}
                     width={315}
                     height={79}
                     alt="logo"
                  />
               </div>

               <div className="w-full flex items-start justify-between text-white">
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
         <div className="absolute left-0 bottom-0 z-[-1] w-full min-h-[555px] rounded-tr-[120px] rounded-tl-[110px] bg-blue"></div>
      </footer>
   );
};

export default Footer;
