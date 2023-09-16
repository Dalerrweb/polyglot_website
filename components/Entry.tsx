interface EntryProps {}

const Entry: React.FC<EntryProps> = () => {
   return (
      <div className="shadow-[0px_3px_15px_#21209c33] max-md:rounded-[20px] bg-white">
         <div className="custom-container py-16 max-2xl:py-10 max-lg:py-10 max-sm:py-[20px] flex max-lg:flex-col max-2xl:items-center max-lg:items-start">
            <div className="max-w-[550px] 3xl:mr-[35px] max-xl:mr-[10px] max-lg:mr-0 max-lg:mb-[25px]">
               <h2 className="text-[64px] max-3xl:text-[50px] max-sm:text-[32px] font-semibold leading-[64px] max-sm:leading-[37px] text-blue">
                  Запишитесь на бесплатный урок
               </h2>
            </div>
            <form className="w-full flex max-2xl:flex-col gap-[35px] max-2xl:gap-4 max-md:gap-[15px]">
               <div className="w-full flex flex-col gap-[24px] max-2xl:gap-3 max-md:gap-[10px]">
                  <input
                     type="text"
                     placeholder="+998 91 111 33 44"
                     className="text-[24px] max-xl:text-[20px] px-6 max-2xl:px-[20px] py-[16px] max-3xl:py-[12px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
                  />
                  <input
                     type="text"
                     placeholder="+998 91 111 33 44"
                     className="text-[24px] max-xl:text-[20px] px-6 max-2xl:px-[20px] py-[16px] max-3xl:py-[12px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
                  />
               </div>
               <div className="w-full">
                  <button className="w-full py-4 max-3xl:py-3 font-medium rounded-md bg-blue text-white">
                     Проконсультироваться
                  </button>
                  <div className="mt-[24px] max-2xl:mt-[15px] max-md:mt-[8px]">
                     <p className="text-[24px] max-3xl:text-[18px] text-[#181818]">
                        Нажимая кнопку я принимаю условия политики и
                        пользовательского соглашения
                     </p>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Entry;
