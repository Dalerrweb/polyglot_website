interface InfoProps {
   translation:any
}

const Info: React.FC<InfoProps> = ({translation}) => {
   return (
      <div className="bg-blue">
         <div className="custom-container py-20 relative">
            <div className="w-2 max-xl:w-2 max-md:w-1 absolute top-32 max-lg:top-24 left-8 max-2xl:left-[5px] max-xl:left-[22px] max-lg:left-2 max-md:left-[13px] max-sm:left-[27px] min-h-[990px] max-3xl:min-h-[970px] max-2xl:min-h-[590px] max-xl:min-h-[460px] max-lg:min-h-[470px] max-md:min-h-[720px] max-sm:min-h-[850px] bg-white"></div>

            <div className="flex justify-between">
               <div className="max-xl:pl-5 relative max-w-[380px] max-2xl:max-w-[300px] max-lg:max-w-[200px] max-sm:max-w-[50px] w-full">
                  <p className="max-sm:absolute max-sm:top-0 max-sm:left-2 text-[210px] max-2xl:text-[110px] max-xl:text-[90px] max-lg:text-[80px] leading-[133.5px] max-lg:leading-[51.316px] font-semibold text-white">
                     01
                  </p>
                  <div className="w-8 h-8 max-xl:w-5 max-xl:h-5 max-lg:w-4 max-lg:h-4 absolute top-10 max-lg:top-3 -left-16 max-2xl:-left-10 max-xl:-left-3 max-lg:-left-5 max-md:-left-[24.7px] max-sm:-left-2 rounded-full bg-orange"></div>
               </div>
               <div className="max-sm:max-w-[400px] w-full flex max-md:flex-col justify-center items-center gap-1">
                  <div className="max-w-[700px] max-sm:max-w-[200px] w-full max-md:mb-5 max-sm:ml-10">
                     <h3 className="text-[64px] max-3xl:text-[45px] max-2xl:text-[36px] max-xl:text-[28px] max-lg:text-[24px] leading-[68px] max-2xl:leading-[40px] max-lg:leading-[26px] mb-7 max-2xl:mb-4 max-xl:mb-2 text-white">
                        {translation?.title1}
                     </h3>
                     <p className="text-[36px] max-3xl:text-[28px] max-2xl:text-[24px] max-xl:text-[15px] leading-[45px] max-2xl:leading-[30px] max-xl:leading-[26px] max-lg:leading-[22px] max-md:leading-[16.069px] text-white ">
                        {translation?.text1}
                     </p>
                  </div>
                  <div className="max-w-[548px] w-full h-full min-h-[200px] rounded-2xl bg-[gray]"></div>
               </div>
            </div>

            <div className="flex justify-between mt-28 max-3xl:mt-20 max-2xl:mt-14 max-xl:mt-6">
               <div className="max-xl:pl-5 relative max-w-[380px] max-2xl:max-w-[300px] max-lg:max-w-[200px] max-sm:max-w-[50px] w-full">
                  <p className="max-sm:absolute max-sm:top-0 max-sm:left-2 text-[210px] max-2xl:text-[110px] max-xl:text-[90px] max-lg:text-[80px] leading-[133.5px] max-lg:leading-[51.316px] font-semibold text-white">
                     02
                  </p>
                  <div className="w-8 h-8 max-xl:w-5 max-xl:h-5 max-lg:w-4 max-lg:h-4 absolute top-10 max-lg:top-3 -left-16 max-2xl:-left-10 max-xl:-left-3 max-lg:-left-5 max-md:-left-[24.7px] max-sm:-left-2 rounded-full bg-orange"></div>
               </div>
               <div className="max-sm:max-w-[400px] w-full flex max-md:flex-col justify-center items-center gap-1">
                  <div className="max-w-[700px] max-sm:max-w-[200px] w-full max-md:mb-5 max-sm:ml-10">
                     <h3 className="text-[64px] max-3xl:text-[45px] max-2xl:text-[36px] max-xl:text-[28px] max-lg:text-[24px] leading-[68px] max-2xl:leading-[40px] max-lg:leading-[26px] mb-7 max-2xl:mb-4 max-xl:mb-2 text-white">
                        {translation?.title2}
                     </h3>
                     <p className="text-[36px] max-3xl:text-[28px] max-2xl:text-[24px] max-xl:text-[15px] leading-[45px] max-2xl:leading-[30px] max-xl:leading-[26px] max-lg:leading-[22px] max-md:leading-[16.069px] text-white ">
                        {translation?.text2}
                     </p>
                  </div>
                  <div className="max-w-[548px] min-h-[200px] w-full h-full rounded-2xl bg-[gray]"></div>
               </div>
            </div>

            <div className="flex justify-between mt-28 max-3xl:mt-20 max-2xl:mt-14 max-xl:mt-6">
               <div className="max-xl:pl-5 relative max-w-[380px] max-2xl:max-w-[300px] max-lg:max-w-[200px] max-sm:max-w-[50px] w-full">
                  <p className="max-sm:absolute max-sm:top-0 max-sm:left-2 text-[210px] max-2xl:text-[110px] max-xl:text-[90px] max-lg:text-[80px] leading-[133.5px] max-lg:leading-[51.316px] font-semibold text-white">
                     03
                  </p>
                  <div className="w-8 h-8 max-xl:w-5 max-xl:h-5 max-lg:w-4 max-lg:h-4 absolute top-10 max-lg:top-3 -left-16 max-2xl:-left-10 max-xl:-left-3 max-lg:-left-5 max-md:-left-[24.7px] max-sm:-left-2 rounded-full bg-orange"></div>
               </div>
               <div className="max-sm:max-w-[400px] w-full flex max-md:flex-col justify-center items-center gap-1">
                  <div className="max-w-[700px] max-sm:max-w-[200px] w-full max-md:mb-5 max-sm:ml-10">
                     <h3 className="text-[64px] max-3xl:text-[45px] max-2xl:text-[36px] max-xl:text-[28px] max-lg:text-[24px] leading-[68px] max-2xl:leading-[40px] max-lg:leading-[26px] mb-7 max-2xl:mb-4 max-xl:mb-2 text-white">
                        {translation?.title3}
                     </h3>
                     <p className="text-[36px] max-3xl:text-[28px] max-2xl:text-[24px] max-xl:text-[15px] leading-[45px] max-2xl:leading-[30px] max-xl:leading-[26px] max-lg:leading-[22px] max-md:leading-[16.069px] text-white ">
                        {translation?.text3}
                     </p>
                  </div>
                  <div className="max-w-[548px] w-full h-full min-h-[200px] rounded-2xl bg-[gray]"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Info;
