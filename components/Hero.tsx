import Image from "next/image";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
   return (
      <div className="custom-container h-[85vh] max-lg:h-[700px] max-md:min-h-[600px] pt-14 flex max-md:flex-col justify-between gap-7 max-md:gap-[20px]">
         <div className="w-1/2 max-lg:w-2/5 max-md:w-full flex flex-col justify-center max-md:mt-[30px]">
            <h3 className="max-lg:text-[16px] max-sm:text-[20px] text-blue">
               Ученье свет, а не ученье тьма!
            </h3>
            <h1 className=" text-blue">
               Изучи всё что не смог изучить раньше!
            </h1>
            <div className="max-w-[550px] w-full bg-[re] flex gap-5 max-lg:gap-2 mt-8 max-lg:mt-5 max-md:mt-2">
               <div className="w-[85px] max-lg:w-[50px]">
                  <Image
                     className="w-full h-full"
                     src={"/images/mini-logo.svg"}
                     width={100}
                     height={100}
                     alt="logo"
                  />
               </div>
               <div className="">
                  <h3 className="text-[32px] max-xl:text-[24px] max-lg:text-[16px] leading-[38.5px] max-lg:leading-[25px] text-blue">
                     Освойте иностранные языки на уровне носителя!
                  </h3>
               </div>
            </div>
         </div>
         <div className="w-[42%] max-2xl:w-[45%] max-lg:w-3/5 max-md:w-full max-md:h-full grid grid-cols-4 gap-8 max-2xl:gap-3 max-sm:gap-4">
            <div className="col-span-2 row-span-3 rounded-[15px] bg-orange"></div>
            <div className="col-span-2 row-span-2 rounded-[15px] bg-orange"></div>
            <div className="col-span-2 row-span-3 rounded-[15px] bg-orange"></div>
            <div className="col-span-2 row-span-2 rounded-[15px] bg-orange"></div>
         </div>
      </div>
   );
};

export default Hero;
