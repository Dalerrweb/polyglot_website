import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Entry from "@/components/Entry";
import Courses from "@/components/Courses";
import Tests from "@/components/Tests";
import Students from "@/components/Students";
import Support from "@/components/Support";
import Teacher from "@/components/Teachers";
import Image from "next/image";
import Info from "@/components/Info";
import Map from "@/components/Map";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <>
         <section>
            <Hero />
         </section>
         <section>
            <Entry />
         </section>
         <section>
            <Courses />
         </section>
         <section>
            <Tests />
         </section>
         <section>
            <Students />
         </section>
         <section>
            <Support />
         </section>
         <section>
            <div className="bg-orange">
               <div className="custom-container flex items-center justify-between py-[40px]">
                  <div className="">
                     <Image
                        className="max-lg:w-[80px] max-md:w-[55px]"
                        src={"/images/mini-logo.png"}
                        width={110}
                        height={132}
                        alt="logo"
                     />
                  </div>
                  <div className="">
                     <h2 className="text-[90px] max-2xl:text-[70px] max-xl:text-[50px] max-lg:text-[40px] max-sm:text-[24px] leading-[90.5px] max-xl:leading-[60px] max-sm:leading-[25px] font-semibold text-center text-white">
                        POLYGLOT LANGUAGE SCHOOL
                     </h2>
                  </div>
                  <div className="">
                     <Image
                        className="max-lg:w-[80px] max-md:w-[55px]"
                        src={"/images/mini-logo.png"}
                        width={110}
                        height={132}
                        alt="logo"
                     />
                  </div>
               </div>
            </div>

            <div className="bg-blue">
               <div className="custom-container flex max-lg:flex-col gap-20 max-lg:gap-10 max-md:gap-10 max-sm:gap-5 py-16">
                  <div className="max-w-[500px]">
                     <h3 className="text-[96px] max-2xl:text-[70px] max-xl:text-[64px] leading-[90.5px] max-xl:leading-[62px] font-semibold text-orange">
                        Polyglot language school
                     </h3>
                  </div>
                  <div className="max-w-[800px]">
                     <h3 className="text-[62px] max-2xl:text-[50px] max-xl:text-[45px] max-lg:text-[32px] leading-[68px] max-xl:leading-[55px] font-medium text-white">
                        Oдна из ведущих школ по изучению иностранного языка в
                        Самарканде
                     </h3>
                     <p className="text-[36px] max-2xl:text-[32px] max-xl:text-[28px] max-lg:text-[24px] leading-[45px] mt-40 max-xl:mt-32 max-lg:mt-20 max-md:mt-10 max-sm:mt-5 text-white">
                        2 Филиала в центре города, более 1000 выпущенных
                        студентов, уже освоили: Английский, Французский и т.д
                     </p>
                  </div>
               </div>
            </div>

            <div className="bg-blue">
               <div className="grid grid-cols-4 gap-4">
                  <div className="h-[400px] rounded-2xl bg-[gray]"></div>
                  <div className="h-[400px] rounded-2xl bg-[gray]"></div>
                  <div className="h-[400px] rounded-2xl bg-[gray]"></div>
                  <div className="h-[400px] rounded-2xl bg-[gray]"></div>
                  <div className="h-[400px] rounded-2xl bg-[gray]"></div>
                  <div className="h-[400px] rounded-2xl bg-[gray]"></div>
                  <div className="h-[400px] rounded-2xl bg-[gray]"></div>
                  <div className="h-[400px] rounded-2xl bg-[gray]"></div>
               </div>
            </div>
         </section>
         <section>
            <Info />
         </section>
         <section>
            <Teacher />
         </section>
         <section>
            <Map />
         </section>
      </>
   );
}
