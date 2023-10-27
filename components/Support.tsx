interface SupportProps {
   translation: any;
}

const Support: React.FC<SupportProps> = ({ translation }) => {
   return (
      <div className="mt-[95px] bg-[#ECECEC]">
         <div className="custom-container py-20 max-xl:py-14 max-md:py-8 flex max-lg:flex-col gap-28 max-2xl:gap-20 max-xl:gap-14 max-lg:gap-1">
            <div className="max-lg:w-[85%] max-md:w-full">
               <div className="text-orange">
                  <p className="text-[40px] max-2xl:text-[36px] max-xl:text-[32px] max-lg:text-[28px] max-sm:text-[24px] leading-[68px] max-md:leading-[46.457px]">
                     {translation?.text1}
                  </p>
                  <h3 className="text-[62px] max-3xl:text-[50px] max-2xl:text-[40px] max-xl:text-[38px] max-lg:text-[32px] max-sm:text-[28px] font-medium leading-[61.5px] max-2xl:leading-[50px] max-xl:leading-[35px] max-lg:leading-[42.017px]">
                     {translation?.text2}
                  </h3>
               </div>
               <div className="mt-16 max-xl:mt-[40px]">
                  <ul className="grid grid-cols-2 max-md:grid-cols-1 gap-[35px] gap-y-[16px] max-md:gap-2">
                     {translation?.texts.map((item: any) => {
                        return (
                           <li
                              key={item?.id}
                              className="flex gap-9 pb-7 max-2xl:pb-5 border-b-[10px] max-2xl:border-b-8 border-orange text-blue"
                           >
                              <div className="">
                                 <p className="text-[40px] max-2xl:text-[30px] max-lg:text-[27.89px] font-medium leading-[48px] max-2xl:leading-[30px]">
                                    {item?.id}
                                 </p>
                              </div>
                              <div className="">
                                 <p className="text-[36px] max-2xl:text-[28px] max-lg:text-[25.101px] font-medium leading-[36px] max-2xl:leading-[30px]">
                                    {item?.text01}
                                 </p>
                              </div>
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>
            <div className="w-2/5 max-lg:w-full"></div>
         </div>
      </div>
   );
};

export default Support;
