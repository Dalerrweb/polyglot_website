import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

interface CoursesProps {
   translation: any;
}

const Courses: React.FC<CoursesProps> = ({ translation }) => {
   const [swiperRef, setSwiperRef] = useState<any>(null);

   const prevHandler = () => {
      swiperRef.slidePrev();
   };

   const nextHandler = () => {
      swiperRef.slideNext();
   };

   return (
      <div className="custom-container" id="courses">
         <div className="mb-9 max-lg:mb-5 max-md:mb-1 mt-20 flex items-center justify-between">
            <div className="">
               <h2 className="text-[96px] max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-[32px] font-semibold leading-[90.5px] max-lg:leading-[32px] text-blue">
                  {translation?.title}
               </h2>
            </div>
            <div className="flex gap-3 items-center">
               <button
                  onClick={prevHandler}
                  className="w-12 h-12 max-xl:w-12 max-xl:h-12 max-md:w-10 max-md:h-10 flex items-center justify-center bg-blue rounded-full"
               >
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
               <button
                  onClick={nextHandler}
                  className="w-12 h-12 max-xl:w-12 max-xl:h-12 max-md:w-10 max-md:h-10 flex items-center justify-center bg-blue rounded-full"
               >
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
            className="swiper-hidden"
            onSwiper={(swiper) => setSwiperRef(swiper)}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
               1536: {
                  spaceBetween: 30,
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
               0: {
                  slidesPerView: 1,
               },
            }}
         >
            {[0, 1, 2, 3, 4, 5].map((item: number) => {
               return (
                  <SwiperSlide key={item}>
                     <div className="course px-8 max-3xl:px-8 max-2xl:px-[30px] pb-[35px] pt-[46px] max-3xl:py-7 max-lg:py-[24px] rounded-[30px] hover:-translate-y-1    hover:shadow-[0_7px_20px_gray] ease-in duration-150 bg-blue text-white">
                        <div className="mb-12 max-3xl:mb-[31px]">
                           <h3 className="text-[36px] max-xl:text-[28px] max-lg:text-[25px] max-3xl:text-[30px] font-semibold leading-[22px] text-center">
                              BASED
                              <span className="p-1 relative z-10 text-[36px] max-xl:text-[28px] max-lg:text-[25px] max-3xl:text-[30px] font-semibold leading-[22px] text-black">
                                 <svg
                                    className="w-full h-full absolute top-0 -left-0 z-[-1]"
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
                           </h3>
                        </div>

                        <div className="pb-6 max-3xl:pb-4 border-b border-white">
                           <p className="text-[24px] max-3xl:text-[20px] max-2xl:text-[16px] leading-[32px] max-2xl:leading-[22.312px]">
                              {translation?.course?.info}
                           </p>
                        </div>

                        <div className="mt-5 max-3xl:mt-4">
                           <ul>
                              <li className="flex items-center gap-4 max-2xl:gap-2 text-[24px] max-3xl:text-[20px] max-2xl:text-[18px] max-xl:text-[16px] leading-[40px] max-2xl:leading-[35px] max-xl:leading-[27.89px]">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                 >
                                    <path
                                       d="M9.20948 17.5602C9.04155 17.5676 8.87603 17.5183 8.73948 17.4202L4.24948 13.7102C3.9602 13.4541 3.91665 13.0186 4.14948 12.7102C4.40515 12.4223 4.83734 12.3748 5.14948 12.6002L9.14948 15.8602L19.6495 6.15024C19.96 5.91711 20.3971 5.95953 20.657 6.24802C20.9169 6.5365 20.9136 6.97565 20.6495 7.26024L9.71948 17.3602C9.58026 17.488 9.39843 17.5593 9.20948 17.5602Z"
                                       fill="white"
                                    />
                                 </svg>
                                 {translation?.course?.text1}
                              </li>
                              <li className="flex items-center gap-4 max-2xl:gap-2 text-[24px] max-3xl:text-[20px] max-2xl:text-[18px] max-xl:text-[16px] leading-[40px] max-2xl:leading-[35px] max-xl:leading-[27.89px]">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                 >
                                    <path
                                       d="M9.20948 17.5602C9.04155 17.5676 8.87603 17.5183 8.73948 17.4202L4.24948 13.7102C3.9602 13.4541 3.91665 13.0186 4.14948 12.7102C4.40515 12.4223 4.83734 12.3748 5.14948 12.6002L9.14948 15.8602L19.6495 6.15024C19.96 5.91711 20.3971 5.95953 20.657 6.24802C20.9169 6.5365 20.9136 6.97565 20.6495 7.26024L9.71948 17.3602C9.58026 17.488 9.39843 17.5593 9.20948 17.5602Z"
                                       fill="white"
                                    />
                                 </svg>
                                 {translation?.course?.text2}
                              </li>
                              <li className="flex items-center gap-4 max-2xl:gap-2 text-[24px] max-3xl:text-[20px] max-2xl:text-[18px] max-xl:text-[16px] leading-[40px] max-2xl:leading-[35px] max-xl:leading-[27.89px]">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                 >
                                    <path
                                       d="M9.20948 17.5602C9.04155 17.5676 8.87603 17.5183 8.73948 17.4202L4.24948 13.7102C3.9602 13.4541 3.91665 13.0186 4.14948 12.7102C4.40515 12.4223 4.83734 12.3748 5.14948 12.6002L9.14948 15.8602L19.6495 6.15024C19.96 5.91711 20.3971 5.95953 20.657 6.24802C20.9169 6.5365 20.9136 6.97565 20.6495 7.26024L9.71948 17.3602C9.58026 17.488 9.39843 17.5593 9.20948 17.5602Z"
                                       fill="white"
                                    />
                                 </svg>
                                 {translation?.course?.text3}
                              </li>
                              <li className="flex items-center gap-4 max-2xl:gap-2 text-[24px] max-3xl:text-[20px] max-2xl:text-[18px] max-xl:text-[16px] leading-[40px] max-2xl:leading-[35px] max-xl:leading-[27.89px]">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                 >
                                    <path
                                       d="M9.20948 17.5602C9.04155 17.5676 8.87603 17.5183 8.73948 17.4202L4.24948 13.7102C3.9602 13.4541 3.91665 13.0186 4.14948 12.7102C4.40515 12.4223 4.83734 12.3748 5.14948 12.6002L9.14948 15.8602L19.6495 6.15024C19.96 5.91711 20.3971 5.95953 20.657 6.24802C20.9169 6.5365 20.9136 6.97565 20.6495 7.26024L9.71948 17.3602C9.58026 17.488 9.39843 17.5593 9.20948 17.5602Z"
                                       fill="white"
                                    />
                                 </svg>
                                 {translation?.course?.text4}
                              </li>
                           </ul>
                        </div>

                        <div className="flex items-start justify-between mt-6 max-3xl:mt-[20px] max-2xl:mt-[16px]">
                           <div className="">
                              <div className="">
                                 <p className="text-[24px] max-3xl:text-[18px] max-lg:text-[16px] leading-[40px]">
                                    {translation?.course?.learnTime}
                                 </p>
                              </div>
                              <div className="">
                                 <p className="text-[45px] max-3xl:text-[32px] max-lg:text-[28px] font-bold leading-[40px] max-lg:leading-[27.89px]">
                                    1-2 {translation?.course?.mounth}.
                                 </p>
                              </div>
                           </div>

                           <div className="">
                              <div className="">
                                 <p className="text-[24px] max-3xl:text-[18px] max-lg:text-[16px] leading-[40px]">
                                    {translation?.course?.price}
                                 </p>
                              </div>
                              <div className="">
                                 <p className="text-[45px] max-3xl:text-[32px] max-lg:text-[28px] font-bold leading-[40px] max-lg:leading-[27.89px]">
                                    1 720 000
                                 </p>
                                 <p className="text-[36px] max-3xl:text-[28px] max-2xl:text-[25px] max-lg:text-[24px] leading-[40px] max-lg:leading-[27.89px]">
                                    {translation?.course?.cumMounth}
                                 </p>
                              </div>
                           </div>
                        </div>

                        <div className="flex items-center justify-between mt-5 max-3xl:mt-[18px]">
                           <button className="course-btn w-[240px] max-3xl:w-[180px] max-2xl:w-[150px] py-[15px] max-lg:py-[10px] max-3xl:text-[16px] max-2xl:text-[14px] font-semibold text-center rounded-md btn-course bg-orange">
                              {translation?.course?.application}
                           </button>
                           <button className="max-3xl:text-[16px] max-2xl:text-[14px]  flex items-center gap-3 max-md:gap-2 leading-[40px] ">
                              {translation?.course?.details}
                              <svg
                                 className="max-3xl:w-[20px] max-3xl:h-[25px] max-xl:w-[17px] max-xl:h-[17px]"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="25"
                                 height="25"
                                 viewBox="0 0 25 25"
                                 fill="none"
                              >
                                 <path
                                    d="M24.9794 3.10726C24.985 2.69591 24.8241 2.29976 24.5332 2.00886C24.2423 1.71796 23.8461 1.55702 23.4348 1.56262C22.5817 1.56262 21.8901 2.25418 21.8901 3.10726V19.7276L2.67476 0.491667C2.28969 0.0784169 1.70976 -0.0916915 1.16248 0.0480753C0.615192 0.187842 0.187842 0.615192 0.0480753 1.16248C-0.0916915 1.70976 0.0784169 2.28969 0.491667 2.67476L19.7276 21.9107H3.10726C2.25418 21.9107 1.56262 22.6023 1.56262 23.4554C1.56262 24.3084 2.25418 25 3.10726 25H23.4554C24.3084 25 25 24.3084 25 23.4554L24.9794 3.10726Z"
                                    fill="white"
                                 />
                              </svg>
                           </button>
                        </div>
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
};

export default Courses;
