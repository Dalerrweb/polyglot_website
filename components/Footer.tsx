import TranslateContext from "@/context/useTranslate";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import InputMask from "react-input-mask";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const translation: any = useContext(TranslateContext);
    const [phone, setPhone] = useState("");

    const router = useRouter();

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
                    e.target["name"].value = "";
                    setPhone("");
                }
            })
            .catch((err) =>console.log('error_bot'));
    };

    return (
        <footer className="relative mt-20">
            <div className="custom-container">
                <div className="max-md:hidden mb-7 max-2xl:mb-3 max-xl:mb-2">
                    <h2 className="text-[96px] max-3xl:text-[72px] max-2xl:text-[60px] max-xl:text-[48px] leading-[90.5px] font-semibold text-blue">
                        {translation?.footer?.title}
                    </h2>
                </div>

                <div
                    id="form"
                    className="relative max-xl:flex max-lg:flex-col max-xl:justify-between max-xl:items-center z-10 py-12 max-2xl:py-5 px-[70px] max-xl:px-8 max-lg:py-6 max-lg:px-10 max-sm:py-4 max-md:pt-[27px] max-md:px-4 rounded-[40px] max-md:rounded-[22px] bg-orange"
                >
                    <div className="w-2/5 max-3xl:w-1/2 max-lg:w-full max-lg:mb-4">
                        <h2 className="max-md:block hidden text-[36px] max-[410px]:text-[32px] font-semibold mb-3 max-sm:mb-0 text-blue">
                            {translation?.footer?.title}
                        </h2>
                        <h2 className="text-[48px] max-2xl:text-[36px] max-sm:text-[28px] max-[430px]:text-[24px] leading-[54.5px] max-2xl:leading-[32px] font-medium mb-10 max-2xl:mb-8 max-sm:mb-2">
                            {translation?.footer?.text1}{" "}
                            <span className="truncate relative z-10 text-[48px] max-2xl:text-[36px] max-sm:text-[28px] max-[430px]:text-[24px] leading-[54.5px] max-2xl:leading-[32px] font-medium px-1 rounded-tr-[10%]">
                                <svg
                                    className="max-2xl:w-[235px] max-2xl:h-[43px] max-sm:w-[187px] max-sm:h-[35px] max-[430px]:w-[160px] max-[430px]:top-0 absolute top-[2px] left-0 z-[-1]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="310"
                                    height="60"
                                    viewBox="0 0 318 52"
                                    fill="none"
                                >
                                    <path
                                        d="M4.0341 13.4339C4.58798 8.98225 8.33558 5.61818 12.821 5.54628L308.416 0.807541C313.885 0.719872 318.167 5.49006 317.492 10.9176L313.972 39.2073C313.418 43.6589 309.67 47.023 305.185 47.0949L9.58963 51.8336C4.12093 51.9213 -0.161066 47.1511 0.514241 41.7236L4.0341 13.4339Z"
                                        fill="#EEEEEE"
                                    />
                                </svg>
                                {translation?.footer?.text2}
                            </span>
                        </h2>
                    </div>

                    <div className="max-xl:hidden w-60 max-2xl:w-40 absolute z-[-1] top-1/2 left-1/2 max-xl:left-[45%] -translate-x-1/2 -translate-y-1/2 max-3xl:-translate-x-[100%]">
                        <Image
                            src={"/images/parrot.png"}
                            width={1000}
                            height={1000}
                            alt="parrot"
                        />
                    </div>

                    <div className="max-lg:max-w-none max-w-[545px] max-2xl:max-w-[500px] max-xl:max-w-[360px] w-full px-10 py-7 max-2xl:px-8 max-2xl:py-5 max-xl:py-4 max-xl:px-5 max-md:py-[29px] max-sm:py-[18px] max-md:px-[20px] lg:absolute lg:top-1/2 lg:right-[3%] lg:-translate-x-[3%] lg:-translate-y-[68%] shadow-[0px_3px_15px_#21209c33] rounded-[20px] max-md:rounded-[12px] bg-white">
                        <div className="mb-1">
                            <h3 className="text-[32px] max-xl:text-[24px] max-sm:text-[20px] max-[420px]:text-sm max-md:mb-2 font-semibold text-blue">
                                {translation?.footer?.form?.title}
                            </h3>
                        </div>

                        <form
                            onSubmit={(e) => SendMessage(e)}
                            className="flex flex-col gap-[24px] max-2xl:gap-3"
                        >
                            <input
                                type="text"
                                placeholder={
                                    translation?.footer?.form?.nameSurname
                                }
                                required
                                name="name"
                                className="text-[24px] max-2xl:text-[20px] max-xl:text-[16px] max-sm:text-[14px] px-6 max-2xl:px-4 py-[16px] max-2xl:py-1 max-xl:py-[8px] max-xl:px-3 rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
                            />
                            <div className="text-[24px] max-2xl:text-[20px] max-xl:text-[16px] max-sm:text-[14px] px-6 max-2xl:px-4 py-[16px] max-2xl:py-1 max-xl:py-[8px] max-xl:px-3 rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]">
                                <InputMask
                                    mask="+\9\98-(99)-999-99-99"
                                    placeholder={translation?.footer?.form?.tel}
                                    required
                                    value={phone}
                                    onChange={(e: any) =>
                                        setPhone(e.target.value)
                                    }
                                ></InputMask>
                            </div>
                            <button className="max-xl:text-[16px] font-medium py-[12px] rounded-md bg-blue text-white">
                                {translation?.footer?.form?.consult}
                            </button>
                        </form>

                        <div className="mt-[24px] max-2xl:mt-[12px]">
                            <p className="text-[24px] max-2xl:text-[20px] max-xl:text-[16px] max-md:text-[14px] max-sm:text-[14px] max-2xl:leading-[25px] max-sm:leading-[18.826px] max-xl:leading-[20px] text-[#181818]">
                                {translation?.footer?.form?.info}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-[77px] max-2xl:mt-[40px] max-md:mt-7 pb-10 max-2xl:pb-6 flex max-lg:flex-col items-start">
                    <div className="max-lg:w-full flex justify-center mr-[120px] max-2xl:mr-[60px] max-lg:mb-8">
                        <Image
                            className="max-xl:w-[280px] max-md:w-[250px]"
                            src={"/images/logo-white.png"}
                            width={315}
                            height={79}
                            alt="logo"
                        />
                    </div>

                    <div className="w-full grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-5 text-white">
                        <div className="max-w-[255px] w-full">
                            <h3 className="text-[40px] max-2xl:text-[32px] font-semibold mb-2">
                                {translation?.footer?.scholl?.title}
                            </h3>
                            <ul>
                                <li className="max-2xl:text-[18px]">
                                    <Link href={"#about"}>
                                        {translation?.footer?.scholl?.aboutUs}
                                    </Link>
                                </li>
                                <li className="max-2xl:text-[18px]">
                                    <Link href={"#tests"}>
                                        {translation?.footer?.scholl?.miniTest}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-[255px] w-full">
                            <h3 className="text-[40px] max-2xl:text-[32px] font-semibold mb-2">
                                {translation?.footer?.course?.title}
                            </h3>
                            <ul>
                                <li className="max-2xl:text-[18px]">
                                    <Link href={"#tests"}>
                                        {translation?.footer?.course?.general}
                                    </Link>
                                </li>
                                <li className="max-2xl:text-[18px]">
                                    <Link href={"#tests"}>
                                        {translation?.footer?.course?.rocket}
                                    </Link>
                                </li>
                                <li className="max-2xl:text-[18px]">
                                    <Link href={"#tests"}>
                                        {translation?.footer?.course?.intensive}
                                    </Link>
                                </li>
                                <li className="max-2xl:text-[18px]">
                                    <Link href={"#tests"}>
                                        {translation?.footer?.course?.kids}
                                    </Link>
                                </li>
                                <li className="max-2xl:text-[18px]">
                                    <Link href={"#tests"}>
                                        {translation?.footer?.course?.german}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-[275px] w-full">
                            <h3 className="text-[40px] max-2xl:text-[32px] font-semibold mb-2">
                                {translation?.footer?.contact?.title}
                            </h3>
                            <ul>
                                <li className="max-2xl:text-[18px]">
                                    {translation?.footer?.contact?.adres}<br/>
                                    <a href="tel:+998905033030">+998905033030</a>
                                </li>
                                <li>
                                    <hr className="my-3"/>
                                </li>
                                <li className="max-2xl:text-[18px]">
                                    {translation?.footer?.contact?.adres2}<br/>
                                    <a href="tel:+998904782020">+998904782020</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="text-[40px] max-2xl:text-[32px] font-semibold mb-5">
                                {translation?.footer?.social}
                            </h3>
                            <div className="w-fit flex gap-5">
                                <Link
                                    href={"https://www.instagram.com/polyglot_language_school_/"}
                                    className="p-2 rounded-full bg-white"
                                >
                                    <Image
                                        src={"/images/icons/Instagram.png"}
                                        width={31}
                                        height={31}
                                        alt="facebook"
                                    />
                                </Link>
                                <Link
                                    href={"https://www.facebook.com/profile.php?id=100072076986854"}
                                    className="p-2 rounded-full bg-white"
                                >
                                    <Image
                                        src={"/images/icons/facebook.png"}
                                        width={29}
                                        height={29}
                                        alt="facebook"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-[555px] max-2xl:min-h-[400px] max-xl:min-h-[500px] max-lg:min-h-[700px] max-sm:min-h-[1000px] absolute left-0 bottom-0 z-[-1] w-full rounded-t-[120px] max-2xl:rounded-t-[100px] max-xl:rounded-t-[70px] max-md:rounded-t-[50px] bg-blue"></div>
        </footer>
    );
};

export default Footer;
