interface SupportProps {}

const Support: React.FC<SupportProps> = () => {
   return (
      <div className="mt-[95px] bg-[#ECECEC]">
         <div className="custom-container py-20 max-xl:py-14 max-md:py-8 flex max-lg:flex-col gap-28 max-2xl:gap-20 max-xl:gap-14 max-lg:gap-1">
            <div className="w-2/5 max-lg:w-full">
               <h2 className="text-[96px] max-3xl:text-[72px] max-xl:text-[64px] font-semibold leading-[110px] max-2xl:leading-[80px] max-lg:leading-[70px] text-blue">
                  Academic support
               </h2>
            </div>
            <div className="max-lg:w-full">
               <div className="text-orange">
                  <p className="text-[40px] max-2xl:text-[36px] max-xl:text-[32px] max-lg:text-[28px] max-sm:text-[24px] leading-[68px] max-md:leading-[46.457px]">
                     Выпускников не забываем!
                  </p>
                  <h3 className="text-[62px] max-3xl:text-[50px] max-2xl:text-[40px] max-xl:text-[38px] max-lg:text-[32px] max-sm:text-[28px] font-medium leading-[61.5px] max-2xl:leading-[50px] max-lg:leading-[42.017px]">
                     После окончания курса наши специалисты готовы к любой
                     помощи, будь то поступление в ВУЗ или в трудоустройстве.
                  </h3>
               </div>
               <div className="mt-20 max-xl:mt14 max-lg:mt-11">
                  <ul className="grid grid-cols-2 max-md:grid-cols-1 gap-[35px] gap-y-[16px]">
                     {[0, 1, 2, 3, 4].map((item: number) => {
                        return (
                           <li
                              key={item}
                              className="flex items-center gap-9 pb-12 border-b-[6px] border-orange text-blue"
                           >
                              <div className="">
                                 <p className="text-[40px] max-xl:text-[30px] font-medium leading-[48px]">
                                    0{item + 1}
                                 </p>
                              </div>
                              <div className="max-w-[225px]">
                                 <p className="text-[36px] max-xl:text-[28px] font-medium leading-[36px]">
                                    Помощь в поступлении
                                 </p>
                              </div>
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Support;
