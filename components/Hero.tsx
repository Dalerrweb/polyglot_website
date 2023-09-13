import Image from "next/image";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
   return (
      <div className="custom-container min-h-[1000px] max-2xl:min-h-[850px] max-xl:min-h-[700px] max-lg:min-h-[600px] flex max-md:flex-col gap-7 max-md:gap-[20px]">
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
         <div className="w-1/2 max-lg:w-3/5 max-md:w-full max-md:min-h-[500px] max-sm:min-h-[450px] grid grid-cols-4 gap-y-[32px] gap-x-[37px] max-xl:gap-5 max-sm:gap-4">
            <div className="col-span-2 row-span-3 rounded-[15px] bg-orange"></div>
            <div className="col-span-2 row-span-2 rounded-[15px] bg-orange"></div>
            <div className="col-span-2 row-span-3 rounded-[15px] bg-orange"></div>
            <div className="col-span-2 row-span-2 rounded-[15px] bg-orange"></div>
         </div>
      </div>
   );
};

export default Hero;
