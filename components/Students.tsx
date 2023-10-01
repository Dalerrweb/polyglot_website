import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface StudentsProps {
   translation: any;
}

const Students: React.FC<StudentsProps> = ({ translation }) => {
   const [swiperRef, setSwiperRef] = useState<any>(null);

   const prevHandler = () => {
      swiperRef.slidePrev();
   };

   const nextHandler = () => {
      swiperRef.slideNext();
   };

   return (
      <div className="custom-container">
         <div className="mt-9 max-lg:mb-5 max-md:mb-1 mb-7 flex items-center justify-between">
            <div className="">
               <h2 className="text-[96px] max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-[32px] font-semibold leading-[90.5px] max-lg:leading-[32px] text-blue">
                  {translation?.ourStudents}
               </h2>
            </div>
            <div className="flex gap-3 max-md:gap-1 items-center relative">
               <button
                  onClick={prevHandler}
                  className="w-14 h-14 max-xl:w-12 max-xl:h-12 max-md:w-7 max-md:h-7 flex items-center justify-center bg-blue rounded-full"
               >
                  <svg
                     className="w-5 max-sm:w-4"
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
                  className="w-14 h-14 max-xl:w-12 max-xl:h-12 max-md:w-7 max-md:h-7 flex items-center justify-center bg-blue rounded-full"
               >
                  <svg
                     className="w-5 max-sm:w-4"
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
            className="swiper-visible"
            spaceBetween={20}
            slidesPerView={3}
            onSwiper={(swiper) => setSwiperRef(swiper)}
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
               0: {
                  slidesPerView: 1,
               },
            }}
         >
            {[0, 1, 2, 3, 4, 5].map((item: number) => {
               return (
                  <SwiperSlide key={item}>
                     <div className="px-[30px] max-2xl:px-[25px] max-lg:px-[20px] py-[46px] max-2xl:py-[40px] max-lg:py-8 max-md:py-5 rounded-[20px] hover:-translate-y-1 hover:shadow-[0_7px_20px_gray] ease-in duration-150 bg-orange">
                        <div className="flex items-center mb-[43px] max-3xl:mb-5 max-md:mb-2">
                           <div className="w-[200px] mr-[25px] max-2xl:mr-[15px] rounded-full bg-white">
                              <Image
                                 className=""
                                 src={"/images/daler.png"}
                                 width={1000}
                                 height={1000}
                                 alt="student"
                              />
                           </div>
                           <div className="">
                              <p className="w-fit p-1 py-2 relative z-10 text-[36px] max-3xl:text-[28px] max-2xl:text-[26px] font-bold leading-[22px] text-white">
                                 <svg
                                    className="w-full h-full absolute top-0 left-0 z-[-1]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="183.77px"
                                    height="44.253px"
                                    viewBox="0 0 131 31"
                                    fill="none"
                                 >
                                    <path
                                       d="M1.43775 7.81404C1.70167 4.59663 4.36358 2.10439 7.59139 2.05264L124.163 0.183864C127.871 0.124427 130.821 3.27565 130.518 6.97131L129.176 23.3331C128.912 26.5505 126.25 29.0428 123.022 29.0945L6.45042 30.9633C2.74282 31.0227 -0.207538 27.8715 0.0956121 24.1758L1.43775 7.81404Z"
                                       fill="#21209C"
                                    />
                                 </svg>
                                 IELTS 7.5
                              </p>
                              <p className="text-[40px] max-3xl:text-[32px] max-2xl:text-[28px] font-bold leading-[40.5px] max-2xl:leading-[28.239px] mt-2">
                                 {translation?.student?.name}
                              </p>
                              <p className="text-[24px] max-2xl:text-[16px] leading-[40.5px]">
                                 1 {translation?.student?.yearofLear}
                              </p>
                           </div>
                        </div>

                        <div className="">
                           <div className="">
                              <svg
                                 className="max-2xl:w-[50px]"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="61"
                                 height="23"
                                 viewBox="0 0 61 23"
                                 fill="none"
                              >
                                 <path
                                    d="M37.377 23L34.016 21.0992C35.1683 19.0083 36.1286 17.1074 36.8969 15.3967C37.6011 13.7493 38.1772 12.292 38.6254 11.0248C37.409 10.5179 36.4807 9.94766 35.8405 9.31405C35.1363 8.68044 34.6562 8.07851 34.4001 7.50826C34.08 7.00138 33.952 6.58953 34.016 6.27273L34.3041 4.18182C34.3041 4.0551 34.5922 3.76997 35.1683 3.32644C35.7445 2.88292 36.4167 2.40771 37.1849 1.90083C37.8892 1.39394 38.5613 0.950411 39.2015 0.570244C39.7777 0.190081 40.1298 8.2819e-08 40.2579 9.40125e-08C40.5139 1.16399e-07 40.9621 0.22176 41.6023 0.665287C42.1784 1.17217 42.7866 1.74242 43.4268 2.37603C44.067 3.073 44.6111 3.70661 45.0593 4.27686C45.5074 4.91046 45.7315 5.38567 45.7315 5.70248C45.7315 6.84297 45.4434 8.20523 44.8672 9.78925C44.291 11.4366 43.5868 13.084 42.7546 14.7314C41.8583 16.4421 40.9301 18.0262 39.9698 19.4835C39.0095 21.0041 38.1452 22.1763 37.377 23ZM52.6455 23L49.2845 21.0992C50.4369 19.0083 51.3972 17.1074 52.1654 15.3967C52.8696 13.7493 53.4458 12.292 53.8939 11.0248C52.6775 10.5179 51.7493 9.94766 51.1091 9.31405C50.4049 8.68044 49.9247 8.07851 49.6686 7.50827C49.3485 7.00138 49.2205 6.58953 49.2845 6.27273L49.5726 4.18182C49.5726 4.0551 49.8607 3.76997 50.4369 3.32644C51.013 2.88292 51.6852 2.40771 52.4535 1.90083C53.1577 1.39394 53.8299 0.950412 54.4701 0.570245C55.0462 0.190082 55.3983 1.41764e-06 55.5264 1.42883e-06C55.7825 1.45122e-06 56.2306 0.221761 56.8708 0.665289C57.4469 1.17217 58.0551 1.74242 58.6953 2.37603C59.3355 3.073 59.8797 3.70661 60.3278 4.27686C60.7759 4.91047 61 5.38567 61 5.70248C61 6.84297 60.7119 8.20523 60.1357 9.78926C59.5596 11.4366 58.8554 13.084 58.0231 14.7314C57.1269 16.4421 56.1986 18.0262 55.2383 19.4835C54.278 21.0041 53.4138 22.1763 52.6455 23Z"
                                    fill="#0B1C3F"
                                 />
                                 <path
                                    d="M23.623 0L26.984 1.90082C25.8317 3.99173 24.8714 5.89256 24.1031 7.60331C23.3989 9.25069 22.8228 10.708 22.3746 11.9752C23.591 12.4821 24.5193 13.0523 25.1595 13.686C25.8637 14.3196 26.3438 14.9215 26.5999 15.4917C26.92 15.9986 27.048 16.4105 26.984 16.7273L26.6959 18.8182C26.6959 18.9449 26.4078 19.23 25.8317 19.6736C25.2555 20.1171 24.5833 20.5923 23.8151 21.0992C23.1108 21.6061 22.4386 22.0496 21.7985 22.4298C21.2223 22.8099 20.8702 23 20.7421 23C20.4861 23 20.0379 22.7782 19.3977 22.3347C18.8216 21.8278 18.2134 21.2576 17.5732 20.624C16.933 19.927 16.3889 19.2934 15.9407 18.7231C15.4926 18.0895 15.2685 17.6143 15.2685 17.2975C15.2685 16.157 15.5566 14.7948 16.1328 13.2107C16.709 11.5634 17.4132 9.91598 18.2454 8.2686C19.1417 6.55785 20.0699 4.97383 21.0302 3.51653C21.9905 1.99587 22.8548 0.823692 23.623 0ZM8.35448 0L11.7155 1.90082C10.5631 3.99173 9.60285 5.89256 8.83462 7.60331C8.13041 9.25069 7.55424 10.708 7.10611 11.9752C8.32247 12.4821 9.25074 13.0523 9.89093 13.686C10.5951 14.3196 11.0753 14.9215 11.3314 15.4917C11.6515 15.9986 11.7795 16.4105 11.7155 16.7273L11.4274 18.8182C11.4274 18.9449 11.1393 19.23 10.5631 19.6736C9.98696 20.1171 9.31476 20.5923 8.54653 21.0992C7.84232 21.6061 7.17013 22.0496 6.52994 22.4298C5.95376 22.8099 5.60166 23 5.47362 23C5.21755 23 4.76941 22.7782 4.12922 22.3347C3.55305 21.8278 2.94487 21.2576 2.30468 20.624C1.66449 19.927 1.12033 19.2934 0.672199 18.7231C0.224066 18.0895 0 17.6143 0 17.2975C0 16.157 0.288086 14.7948 0.864256 13.2107C1.44043 11.5634 2.14464 9.91598 2.97688 8.2686C3.87315 6.55785 4.80142 4.97383 5.76171 3.51653C6.72199 1.99587 7.58625 0.823692 8.35448 0Z"
                                    fill="#0B1C3F"
                                 />
                              </svg>
                           </div>
                           <div className="">
                              <p className="text-[24px] max-2xl:text-[20px] max-sm:text-[16px] leading-[29px] max-2xl:leading-[25px] mt-4 max-md:mt-2">
                                 {translation?.student?.about}
                              </p>
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

export default Students;
