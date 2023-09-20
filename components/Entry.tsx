import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import InputMask from "react-input-mask";

interface EntryProps {
   translation: any;
}

const Entry: React.FC<EntryProps> = ({ translation }) => {
   const router = useRouter();
   const [phone, setPhone] = useState("");

   const URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`;

   const SendMessage = (e: any) => {
      e.preventDefault();

      let info: any = {};

      const formData = new FormData(e.target);

      formData.forEach((value, key) => {
         info[key] = value;
      });

      let msg = `🆕 Бесплатная консультация! \n`;
      msg += `👨 Имя: ${info?.name} \n`;
      msg += `📞 Номер телефона: ${phone} \n`;

      axios
         .post(URL, {
            chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
            parse_mode: "html",
            text: msg,
         })
         .then((res) => {
            if (res.status === 200 || res.status === 201) {
               setPhone("");
               e.target["name"].value = "";
            }
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="shadow-[0px_3px_15px_#21209c33] max-md:rounded-[20px] bg-white">
         <div className="custom-container py-16 max-2xl:py-10 max-lg:py-10 max-sm:py-[20px] flex max-lg:flex-col max-2xl:items-center max-lg:items-start">
            <div className="max-w-[550px] 3xl:mr-[35px] max-xl:mr-[10px] max-lg:mr-0 max-lg:mb-[25px]">
               <h2 className="text-[64px] max-3xl:text-[50px] max-sm:text-[32px] font-semibold leading-[64px] max-sm:leading-[37px] text-blue">
                  {translation?.text1}
               </h2>
            </div>
            <form
               onSubmit={(e) => SendMessage(e)}
               className="w-full flex max-2xl:flex-col gap-[35px] max-2xl:gap-4 max-md:gap-[15px]"
            >
               <div className="w-full flex flex-col gap-[24px] max-2xl:gap-3 max-md:gap-[10px]">
                  <input
                     type="text"
                     name="name"
                     required
                     placeholder="Имя"
                     className="text-[24px] max-xl:text-[20px] px-6 max-2xl:px-[20px] py-[16px] max-3xl:py-[12px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
                  />
                  <div className="text-[24px] max-xl:text-[20px] px-6 max-2xl:px-[20px] py-[16px] max-3xl:py-[12px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]">
                     <InputMask
                        mask="+\9\98-(99)-999-99-99"
                        placeholder="+998-(__)-___-__-__"
                        required
                        value={phone}
                        onChange={(e: any) => setPhone(e.target.value)}
                     ></InputMask>
                  </div>
               </div>
               <div className="w-full">
                  <button
                     type="submit"
                     className="w-full py-4 max-3xl:py-3 font-medium rounded-md bg-blue text-white"
                  >
                     {translation?.buttonText}
                  </button>
                  <div className="mt-[24px] max-2xl:mt-[15px] max-md:mt-[8px]">
                     <p className="text-[24px] max-3xl:text-[18px] text-[#181818]">
                        {translation?.text2}
                     </p>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Entry;
