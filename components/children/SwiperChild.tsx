import ModalContext from "@/context/ModalContext";
import { useContext } from "react";

interface SwiperChild {
   item: number;
   translation: any;
}

const SwiperChild: React.FC<SwiperChild> = ({ item, translation }) => {
   const { changeModal, setModalTestID } = useContext(ModalContext);

   return (
      <>
         <div className="rounded-[30px] max-lg:rounded-[20px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_7px_20px_gray] ease-in duration-150 bg-blue text-white">
            <div className="mt-11 max-3xl:mt-8 max-lg:mt-5">
               <h3 className="text-[36px] max-3xl:text-[28px] max-lg:text-[24px] font-semibold text-center">
                  YOUR
                  <span className="p-1 relative z-10 text-[36px] max-3xl:text-[28px] max-lg:text-[24px] font-semibold text-black">
                     <svg
                        className="w-full h-full absolute top-0 left-0 z-[-1]"
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
                  {translation?.info}
               </p>
            </div>
            <div className="px-8 max-2xl:px-7 pt-5 max-3xl:pt-0 max-sm:pt-4 pb-3 bg-orange">
               <div className="w-full flex items-center justify-between gap-">
                  <div className="">
                     <p className="max-3xl:text-[16px] max-md:text-[14px] leading-[25.5px]">
                        {translation?.time}
                     </p>
                     <p className="text-[40px] max-3xl:text-[27px] font-bold leading-[40px]">
                        15 {translation?.min}
                     </p>
                  </div>
                  <div className="">
                     <p className="max-3xl:text-[16px] max-md:text-[14px] leading-[25.5px]">
                        {translation?.quantity}
                     </p>
                     <p className="text-[40px] max-3xl:text-[27px] font-bold leading-[40px]">
                        20 {translation?.question}.
                     </p>
                  </div>
                  <div className="">
                     <div
                        className="cursor-pointer"
                        onClick={() => {
                           changeModal(true), setModalTestID(item + 1);
                        }}
                     >
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
                              strokeWidth="10"
                           />
                           <path
                              d="M86.0001 67L57.5001 83.4545L57.5001 50.5455L86.0001 67Z"
                              fill="#21209C"
                           />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SwiperChild;
