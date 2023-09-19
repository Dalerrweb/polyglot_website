import Image from "next/image";
import React from "react";

function Preloader() {
   return (
      <div className="w-full h-screen bg-gray flex items-center justify-center">
         <Image
            src={"/images/logo.svg"}
            alt={"logo"}
            width={100}
            height={100}
            className="animate-pulse animate-infinite animate-duration-[2000ms] animate-ease-linear w-[30%] z-10"
         ></Image>
         <Image
            src={"/images/parrot.png"}
            alt={"logo"}
            width={100}
            height={100}
            className="w-[30%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
         ></Image>
      </div>
   );
}

export default Preloader;
