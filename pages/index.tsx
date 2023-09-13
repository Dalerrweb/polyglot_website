import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Entry from "@/components/Entry";
import Courses from "@/components/Courses";
import Tests from "@/components/Tests";
import Students from "@/components/Students";
import Support from "@/components/Support";
import Teacher from "@/components/Teachers";

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
            <Teacher />
         </section>
      </>
   );
}
