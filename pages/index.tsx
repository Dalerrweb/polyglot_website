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
import Layout from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <Layout>
         <section>
            <Hero />
         </section>
         <section>
            <Entry />
         </section>
         <section className="overflow-hidden">
            <Courses />
         </section>
         <section className="overflow-hidden">
            <Tests />
         </section>
         <section className="overflow-hidden">
            <Students />
         </section>
         <section>
            <Support />
         </section>
         <section>
            <div id="about" className="bg-orange">
               <div className="custom-container flex items-center justify-between py-[40px] max-2xl:py-[30px]">
                  <div className="">
                     <Image
                        className="max-lg:w-[80px] max-2xl:w-[70px] max-xl:w-[60px] max-md:w-[55px]"
                        src={"/images/mini-logo.png"}
                        width={110}
                        height={132}
                        alt="logo"
                     />
                  </div>
                  <div className="">
                     <h2 className="text-[90px] max-3xl:text-[80px] max-2xl:text-[50px] max-xl:text-[40px] max-lg:text-[30px] max-sm:text-[24px] leading-[90.5px] max-xl:leading-[60px] max-sm:leading-[25px] font-semibold text-center text-white">
                        POLYGLOT LANGUAGE SCHOOL
                     </h2>
                  </div>
                  <div className="">
                     <Image
                        className="max-lg:w-[80px] max-2xl:w-[70px] max-xl:w-[60px] max-md:w-[55px]"
                        src={"/images/mini-logo.png"}
                        width={110}
                        height={132}
                        alt="logo"
                     />
                  </div>
               </div>
            </div>

            <div className="bg-blue">
               <div className="custom-container flex max-lg:flex-col gap-20 max-lg:gap-10 max-md:gap-10 max-sm:gap-5 py-14">
                  <div className="max-w-[500px]">
                     <h3 className="text-[96px] max-2xl:text-[70px] max-xl:text-[55px] leading-[90.5px] max-2xl:leading-[65px] font-semibold text-orange">
                        Polyglot language school
                     </h3>
                  </div>
                  <div className="max-w-[800px]">
                     <h3 className="text-[62px] max-2xl:text-[50px] max-xl:text-[45px] max-lg:text-[32px] leading-[68px] max-2xl:leading-[55px] max-lg:leading-[42.017px] font-medium text-white">
                        Oдна из ведущих школ по изучению иностранного языка в
                        Самарканде
                     </h3>
                     <p className="text-[36px] max-2xl:text-[32px] max-xl:text-[24px] max-lg:text-[24px] max-md:text-[20px] leading-[45px] max-xl:leading-[35px] max-md:leading-[30px] mt-40 max-2xl:mt-24 max-lg:mt-20 max-md:mt-10 max-sm:mt-5 text-white">
                        2 Филиала в центре города, более 1000 выпущенных
                        студентов, уже освоили: Английский, Французский и т.д
                     </p>
                  </div>
               </div>
            </div>

            <div className="w-full flex flex-col py-20 max-2xl:py-10 gap-10 max-xl:gap-3 bg-blue">
               <div className="marquee-infinite">
                  <div className="">
                     <span className="gap-10 max-xl:gap-3">
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                     </span>
                     <span className="gap-5 max-xl:gap-3">
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                     </span>
                  </div>
               </div>
               <div className="marquee-infinite -rotate-180">
                  <div className="">
                     <span className="rotate-180">
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                     </span>
                     <span className="rotate-180">
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                        <Image
                           className="w-full h-[400px] max-2xl:h-[200px] py-5 px-5 rounded-2xl bg-[#D9D9D9]"
                           src={""}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                     </span>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <Info />
         </section>
         <section className="overflow-hidden">
            <Teacher />
         </section>
         <section>
            <Map />
         </section>
      </Layout>
   );
}
