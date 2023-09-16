import { Swiper, SwiperSlide } from "swiper/react";

interface TestsProps {}

const Tests: React.FC<TestsProps> = () => {
   return (
      <div className="custom-container">
         <div className="flex max-lg:flex-col justify-between items-start max-xl:gap-5 mt-24 max-lg:mt-16 max-md:mt-11">
            <div className="max-w-[745px] max-xl:w-1/2 max-lg:w-full">
               <h2 className="text-[64px] max-3xl:text-[48px] max-2xl:text-[40px] max-md:text-[32px] font-semibold leading-[68px] max-2xl:leading-[55px] max-md:leading-[34.778px] text-blue">
                  Всё ещё сомневаетесь в своём уровне знаний языка?
               </h2>
            </div>
            <div className="max-w-[650px] max-xl:w-1/2 max-lg:w-full">
               <h2 className="text-[64px] max-3xl:text-[48px] max-2xl:text-[40px] max-md:text-[32px] font-semibold leading-[68px] max-2xl:leading-[55px] max-md:leading-[46.285px] mb-2 max-md:mb-1 text-orange">
                  Давайте, проверим!
               </h2>
               <p className="text-[36px] max-2xl:text-[30px] max-xl:text-[26px] max-md:text-[18px] leading-[45px] max-md:leading-[23.015px] text-orange">
                  Пройдите мини-тест и узнайте свой уровень владения
                  иностранными языком
               </p>
            </div>
         </div>

         <div className="mt-14 mb-7 flex items-center justify-between">
            <div className="">
               <h2 className="text-[96px] max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-[32px] font-semibold leading-[90.5px] max-lg:leading-[32px] text-blue">
                  Тесты
               </h2>
            </div>
            <div className="flex gap-3 items-center">
               <button className="w-14 h-14 max-xl:w-12 max-xl:h-12 max-md:w-10 max-md:h-10 flex items-center justify-center bg-blue rounded-full">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="25"
                     height="25"
                     viewBox="0 0 25 25"
                     fill="none"
                  >
                     <path
                        d="M4.04448 12.4645C4.04466 12.2603 4.12591 12.0646 4.27037 11.9203L11.4579 4.73278C11.656 4.54019 11.9417 4.46791 12.2076 4.54317C12.4734 4.61843 12.6789 4.82979 12.7466 5.09764C12.8144 5.36548 12.7341 5.64912 12.536 5.84171L5.91323 12.4645L12.536 19.0872C12.742 19.2792 12.8268 19.5684 12.7571 19.8412C12.6875 20.1141 12.4744 20.3271 12.2016 20.3968C11.9287 20.4665 11.6396 20.3817 11.4476 20.1756L4.2601 12.9881C4.12432 12.8473 4.04723 12.6601 4.04448 12.4645Z"
                        fill="white"
                     />
                     <path
                        d="M4.05474 12.4645C4.06028 12.0415 4.40184 11.6999 4.82483 11.6944L20.2266 11.6944C20.5017 11.6944 20.756 11.8412 20.8935 12.0794C21.0311 12.3177 21.0311 12.6113 20.8935 12.8495C20.756 13.0878 20.5017 13.2346 20.2266 13.2346L4.82483 13.2346C4.40184 13.229 4.06028 12.8875 4.05474 12.4645Z"
                        fill="white"
                     />
                     <path
                        d="M3.29492 12.4645C3.29528 12.0561 3.45779 11.6646 3.74671 11.3761L10.9342 4.18859C11.5381 3.58748 12.515 3.58978 13.1161 4.19372C13.7172 4.79766 13.7149 5.77454 13.111 6.37564L7.00162 12.4645L13.0905 18.5431C13.6944 19.1442 13.6967 20.121 13.0956 20.725C12.4945 21.3289 11.5176 21.3312 10.9137 20.7301L3.72617 13.5426C3.44727 13.2533 3.29251 12.8664 3.29492 12.4645Z"
                        fill="white"
                     />
                     <path
                        d="M3.29492 12.4645C3.29492 11.6139 3.98449 10.9243 4.8351 10.9243L20.2369 10.9243C21.0875 10.9243 21.7771 11.6139 21.7771 12.4645C21.7771 13.3151 21.0875 14.0047 20.2369 14.0047L4.8351 14.0047C3.98449 14.0047 3.29492 13.3151 3.29492 12.4645Z"
                        fill="white"
                     />
                  </svg>
               </button>
               <button className="w-14 h-14 max-xl:w-12 max-xl:h-12 max-md:w-10 max-md:h-10 flex items-center justify-center bg-blue rounded-full">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="25"
                     viewBox="0 0 24 25"
                     fill="none"
                  >
                     <path
                        d="M19.9759 12.4918C19.9758 12.6874 19.8979 12.8749 19.7596 13.0131L12.8743 19.8984C12.6845 20.0828 12.4108 20.1521 12.1561 20.08C11.9015 20.0079 11.7046 19.8054 11.6397 19.5488C11.5748 19.2923 11.6518 19.0205 11.8415 18.8361L18.1858 12.4918L11.8415 6.14753C11.6442 5.96363 11.5629 5.68666 11.6297 5.42528C11.6964 5.16391 11.9005 4.95981 12.1619 4.89306C12.4233 4.8263 12.7002 4.90755 12.8841 5.10491L19.7694 11.9902C19.8995 12.1251 19.9733 12.3044 19.9759 12.4918Z"
                        fill="white"
                     />
                     <path
                        d="M19.9661 12.4918C19.9608 12.897 19.6336 13.2242 19.2284 13.2295L4.47431 13.2295C4.21075 13.2295 3.96721 13.0889 3.83544 12.8606C3.70366 12.6324 3.70366 12.3512 3.83544 12.1229C3.96721 11.8947 4.21075 11.7541 4.47431 11.7541L19.2284 11.7541C19.6336 11.7594 19.9608 12.0866 19.9661 12.4918Z"
                        fill="white"
                     />
                     <path
                        d="M20.694 12.4918C20.6936 12.883 20.538 13.258 20.2612 13.5344L13.3759 20.4197C12.7974 20.9955 11.8616 20.9933 11.2858 20.4147C10.71 19.8362 10.7122 18.9004 11.2907 18.3246L17.1432 12.4918L11.3104 6.66885C10.7318 6.09302 10.7296 5.15722 11.3055 4.57868C11.8813 4.00014 12.8171 3.99794 13.3956 4.57376L20.2809 11.459C20.548 11.7362 20.6963 12.1068 20.694 12.4918Z"
                        fill="white"
                     />
                     <path
                        d="M20.694 12.4918C20.694 13.3066 20.0334 13.9672 19.2186 13.9672L4.46447 13.9672C3.64962 13.9672 2.98906 13.3066 2.98906 12.4918C2.98906 11.6769 3.64962 11.0164 4.46447 11.0164L19.2186 11.0164C20.0334 11.0164 20.694 11.677 20.694 12.4918Z"
                        fill="white"
                     />
                  </svg>
               </button>
            </div>
         </div>

         <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
               1536: {
                  spaceBetween: 35,
               },
               1920: {
                  slidesPerView: 3,
               },
               1280: {
                  slidesPerView: 3,
               },
               768: {
                  slidesPerView: 2,
               },
            }}
         >
            {[0, 1, 2, 3, 4, 5].map((item: number) => {
               return (
                  <SwiperSlide key={item}>
                     <div className="rounded-[30px] max-lg:rounded-[20px] overflow-hidden bg-blue text-white">
                        <div className="mt-11 max-3xl:mt-8 max-lg:mt-5">
                           <h3 className="text-[36px] max-3xl:text-[28px] max-lg:text-[24px] font-semibold text-center">
                              YOUR
                              <span className="relative z-10 mx-2 text-[36px] max-3xl:text-[28px] max-lg:text-[24px] font-semibold text-black">
                                 <svg
                                    className="max-3xl:w-[143px] max-3xl:h-[43px] max-lg:w-[125px] max-lg:h-[38px] absolute -top-[3px] -left-2 z-[-1]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="177"
                                    height="47"
                                    viewBox="0 0 177 47"
                                    fill="none"
                                 >
                                    <path
                                       d="M3.68207 10.8459C4.18352 6.34777 7.94737 2.92177 12.4727 2.84433L167.327 0.194341C172.753 0.101481 177.026 4.79645 176.425 10.1902L173.613 35.4135C173.112 39.9116 169.348 43.3375 164.823 43.415L9.96876 46.065C4.54243 46.1579 0.268891 41.4629 0.870181 36.0692L3.68207 10.8459Z"
                                       fill="#EEEEEE"
                                    />
                                 </svg>
                                 ENGLISH
                              </span>
                              LEVEL
                           </h3>
                        </div>
                        <div className="px-11 mt-14 max-3xl:mt-3 mb-11 max-3xl:mb-6 max-lg:mb-4 max-3xl:px-7">
                           <p className="text-[24px] max-3xl:text-[20px] max-2xl:text-[16px] leading-[32px] max-2xl:leading-[22.312px]">
                              Вы уже знакомы с Английским языком? Давайте
                              проверим. Вам даются 20 вопросов за определённое
                              время, после вы сможете определить ваш уровень
                              Английского Языка от A1 до С2
                           </p>
                        </div>
                        <div className="px-8 max-2xl:px-7 pt-5 max-3xl:pt-0 max-sm:pt-4 pb-3 bg-orange">
                           <div className="w-full flex items-center justify-between gap-">
                              <div className="">
                                 <p className="max-3xl:text-[16px] max-md:text-[14px] leading-[25.5px]">
                                    Отведённое время
                                 </p>
                                 <p className="text-[40px] max-3xl:text-[27px] font-bold leading-[40px]">
                                    15 мин
                                 </p>
                              </div>
                              <div className="">
                                 <p className="max-3xl:text-[16px] max-md:text-[14px] leading-[25.5px]">
                                    Количество вопросов
                                 </p>
                                 <p className="text-[40px] max-3xl:text-[27px] font-bold leading-[40px]">
                                    20 воп.
                                 </p>
                              </div>
                              <div className="">
                                 <button>
                                    <svg
                                       className="max-3xl:w-[80px] max-lg:h-[80px]"
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="134"
                                       height="134"
                                       viewBox="0 0 134 134"
                                       fill="none"
                                    >
                                       <circle
                                          cx="67"
                                          cy="67"
                                          r="62"
                                          fill="white"
                                          stroke="#C4C4C4"
                                          stroke-width="10"
                                       />
                                       <path
                                          d="M86.0001 67L57.5001 83.4545L57.5001 50.5455L86.0001 67Z"
                                          fill="#21209C"
                                       />
                                    </svg>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
};

export default Tests;
