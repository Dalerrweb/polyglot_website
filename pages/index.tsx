import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Layout from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <Layout>
         <section>
            <Hero />
         </section>
      </Layout>
   );
}
