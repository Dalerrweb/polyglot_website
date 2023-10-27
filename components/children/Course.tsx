import Item from "antd/es/list/Item";

interface CourseProps {
   item: any;
   show: any;
   setModalInfo: any;
}

const Course: React.FC<CourseProps> = ({ item, show, setModalInfo }) => {
   return (
      <div className="course h-full flex flex-col justify-between px-8 max-3xl:px-8 max-2xl:px-[30px] pb-[35px] pt-[46px] max-3xl:py-7 max-lg:py-[24px] rounded-[30px] bg-blue text-white">
         <div className="h-full">
            <div className="mb-12 max-3xl:mb-[31px]">
               <h3 className="text-[36px] max-xl:text-[28px] max-lg:text-[25px] max-3xl:text-[30px] font-semibold leading-[22px] text-center">
                  {item?.name1}
                  {item?.name2?.length > 0 ? (
                     <>
                        <span className="px-5 py-4 relative z-10 text-[36px] max-xl:text-[28px] max-lg:text-[25px] max-3xl:text-[30px] font-semibold leading-[22px] text-black">
                           <svg
                              className="w-full min-h-[50px] h-full absolute top-0 -left-0 z-[-1]"
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
                           {item?.name2}
                        </span>
                     </>
                  ) : null}
               </h3>
            </div>

            <div className="pb-6 max-3xl:pb-4 border-b border-white">
               <p className="text-[24px] max-3xl:text-[20px] max-2xl:text-[16px] leading-[32px] max-2xl:leading-[22.312px] elipsis">
                  {item?.info}
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
                     {item?.text1}
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
                     {item?.text2}
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
                     {item?.text3}
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
                     {item?.text4}
                  </li>
               </ul>
            </div>
         </div>

         <div className="">
            <div className="flex items-start justify-between mt-6 max-3xl:mt-[20px] max-2xl:mt-[16px]">
               {item?.learnTime2?.length > 0 ? (
                  <div className="">
                     <div className="">
                        <p className="text-[24px] max-3xl:text-[18px] max-lg:text-[16px] leading-[40px]">
                           {item?.learnTime}
                        </p>
                     </div>
                     <div className="">
                        <p className="text-[45px] max-3xl:text-[32px] max-lg:text-[28px] font-bold leading-[40px] max-lg:leading-[27.89px]">
                           {item?.learnTime2} {item?.mounth}
                        </p>
                     </div>
                  </div>
               ) : null}

               <div className="">
                  <div className="">
                     <p className="text-[24px] max-3xl:text-[18px] max-lg:text-[16px] leading-[40px]">
                        {item?.price}
                     </p>
                  </div>
                  <div className="">
                     <p className="text-[45px] max-3xl:text-[32px] max-lg:text-[28px] font-bold leading-[40px] max-lg:leading-[27.89px]">
                        {item?.price2}
                     </p>
                     <p className="text-[36px] max-3xl:text-[28px] max-2xl:text-[25px] max-lg:text-[24px] leading-[40px] max-lg:leading-[27.89px]">
                        {item?.cumMounth}
                     </p>
                  </div>
               </div>
            </div>

            <div className="flex items-center justify-between mt-5 max-3xl:mt-[18px]">
               <button
                  onClick={() => {
                     show(), setModalInfo(item);
                  }}
                  className="course-btn w-[240px] max-3xl:w-[180px] max-2xl:w-[150px] py-[15px] max-lg:py-[10px] max-3xl:text-[16px] max-2xl:text-[14px] font-semibold text-center rounded-md btn-course bg-orange"
               >
                  {item?.application}
               </button>
            </div>
         </div>
      </div>
   );
};

export default Course;
