import axios from "axios";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import MyComponent from "./MyReCAPTCHA";

interface EntryProps {
	translation: any;
}
const URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`;

const Entry: React.FC<EntryProps> = ({ translation }) => {
    const router = useRouter();
    const [phone, setPhone] = useState("");

	const formRef: any = useRef(null);
    const CapchaRef: any = useRef(null);

    const [reCapchaHendel, setRecapchaHendel] = useState(true);

    const [reCapchaText, setRecapchaText] = useState(false);


	const hendelSubmit = (e: any) => {
        e.preventDefault();

        let info: any = {};

        const formData = new FormData(e.target);

        formData.forEach((value, key) => {
            info[key] = value;
        });

        if (!reCapchaHendel) {
            SendMessage(info);
        } else setRecapchaText(true);
    };

    const SendMessage = (info: any) => {
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
                    formRef.current.name.value = "";
                    CapchaRef.current.reset();
                    setRecapchaHendel(true)
                    setPhone('')
                }
            })
            .catch((err) => console.log("error_bot"));
    };

    const examination = () => {
        setRecapchaHendel(false);
        setRecapchaText(false);
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
				    ref={formRef}
                    onSubmit={hendelSubmit}
                    className="w-full flex max-2xl:flex-col gap-[35px] max-2xl:gap-4 max-md:gap-[15px]"
                >
                    <div className="w-full flex flex-col gap-[24px] max-2xl:gap-3 max-md:gap-[10px]">
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder={`${translation?.input}`}
                            className="text-[24px] max-xl:text-[20px] px-6 max-2xl:px-[20px] py-[16px] max-3xl:py-[12px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
                        />
                        <div className="text-[24px] max-xl:text-[20px] px-6 max-2xl:px-[20px] py-[16px] max-3xl:py-[12px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]">
                            <InputMask
                                mask="+\9\98-(99)-999-99-99"
                                placeholder={translation?.inputNumber}
                                required
                                value={phone}
                                onChange={(e: any) => setPhone(e.target.value)}
                            ></InputMask>
                        </div>
                    </div>

                    <div className="w-full">
                        <MyComponent
                            examination={examination}
                            reCapchaText={reCapchaText}
                            capchaRef={CapchaRef}
                        />
                        <button
                            type="submit"
                            className="mt-3 w-full py-4 max-3xl:py-3 font-medium rounded-md bg-blue text-white"
                        >
                            {translation?.buttonText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Entry;
