import { SwiperSlide } from "swiper/react";

interface CourseProps {}

const Course: React.FC<CourseProps> = ({}) => {
   return (
      <SwiperSlide>
         <div className="course px-8 max-3xl:px-8 max-2xl:px-[30px] pb-[35px] pt-[46px] max-3xl:py-7 max-lg:py-[24px] rounded-[30px] bg-blue text-white">
            <div className="mb-12 max-3xl:mb-[31px]">
               <h3 className="text-[36px] max-xl:text-[28px] max-lg:text-[25px] max-3xl:text-[30px] font-semibold leading-[22px] text-center">
                  BASED
                  <span className="ml-2 relative z-10 text-[36px] max-xl:text-[28px] max-lg:text-[25px] max-3xl:text-[30px] font-semibold leading-[22px] text-black">
                     <svg
                        className="max-3xl:w-[150px] max-3xl:h-[40px] max-xl:w-[145px] max-xl:h-[36px] max-lg:w-[130px] max-lg:h-[33px] absolute top-0 -left-2 z-[-1]"
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
                  Освойте базовый уровень Английского языка до уровня B1, все
                  занятия проводятся по особой методике обучения, разработанного
                  нашими специалистами.
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
                     Онлайн консультация 24/7
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
                     Английский до уровня B1
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
                     Оффлайн формат
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
                     Продвинутая грамматика
                  </li>
               </ul>
            </div>

            <div className="flex items-start justify-between mt-6 max-3xl:mt-[20px] max-2xl:mt-[16px]">
               <div className="">
                  <div className="">
                     <p className="text-[24px] max-3xl:text-[18px] max-lg:text-[16px] leading-[40px]">
                        Срок обучения:
                     </p>
                  </div>
                  <div className="">
                     <p className="text-[45px] max-3xl:text-[32px] max-lg:text-[28px] font-bold leading-[40px] max-lg:leading-[27.89px]">
                        1-2 мес.
                     </p>
                  </div>
               </div>

               <div className="">
                  <div className="">
                     <p className="text-[24px] max-3xl:text-[18px] max-lg:text-[16px] leading-[40px]">
                        Cтоимость:
                     </p>
                  </div>
                  <div className="">
                     <p className="text-[45px] max-3xl:text-[32px] max-lg:text-[28px] font-bold leading-[40px] max-lg:leading-[27.89px]">
                        1 720 000
                     </p>
                     <p className="text-[36px] max-3xl:text-[28px] max-2xl:text-[25px] max-lg:text-[24px] leading-[40px] max-lg:leading-[27.89px]">
                        cум/месяц
                     </p>
                  </div>
               </div>
            </div>

            <div className="flex items-center justify-between mt-5 max-3xl:mt-[18px]">
               <button className="course-btn w-[240px] max-3xl:w-[180px] max-2xl:w-[150px] py-[15px] max-lg:py-[10px] max-3xl:text-[16px] max-2xl:text-[14px] font-semibold text-center rounded-md btn-course bg-orange">
                  Оставить заявку
               </button>
               <button className="max-3xl:text-[16px] max-2xl:text-[14px]  flex items-center gap-3 max-md:gap-2 leading-[40px] ">
                  Подробнее
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
};

export default Course;
