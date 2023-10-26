import { GetServerSideProps } from "next";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Timer from "@/components/CustomTimer";
import TranslateContext from "@/context/useTranslate";
import { getCookie, hasCookie } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_URL}`);
    let data = await res.json();

    return {
        props: {
            data: data.testing[
                query.testingPage !== undefined ? +query.testingPage - 1 : 0
            ],
        },
    };
};

let Ansvers_list: any = [];

const URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`;

const TestingPage = ({ data }: any) => {
    // window.onbeforeunload = e => confirm("are you shure");
    // window.onpopstate
    const [testNumber, setTestNumber] = useState(0);
    const [test, setTest] = useState(data.test[testNumber]);
    const [testAnsver, setTestAnsver] = useState(false);
    const [inputСheck, setInputСheck] = useState<any>();
    const [infoStudent, setInfoStudent] = useState<any>();
    const [sendDataButton, setSendDataButton] = useState(false);

    const [nextButton, setNextButton] = useState<boolean>(false);

    const [endTest, setEndTest] = useState(false);

    const router = useRouter();
    const translation: any = useContext(TranslateContext);

    useEffect(() => {
        if (hasCookie("infoStudent")) {
            const getINfoStudent: any = getCookie("infoStudent");
            setInfoStudent(JSON.parse(getINfoStudent));
        } else {
            router.push("/");
        }
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setNextButton(false);

		if (testNumber + 2 === data.test.length) {
            setSendDataButton(true);
        }

        if (data.test.length <= testNumber + 1) {
            Ansvers_list.push({ number: testNumber + 1, ansver: testAnsver });
        } else {
            Ansvers_list.push({ number: testNumber + 1, ansver: testAnsver });
            setTest(data.test[testNumber + 1]);
            setTestNumber(testNumber + 1);
            inputСheck.checked = false;
        }

		if (testNumber + 1 === data.test.length) {
			sendData()
            setEndTest(true);
        }
    };

    const sendData = () => {
        let k = 0;
        let msg = `🆕 Ответы тестирования! \n`;
        msg += `Уровень: ${data?.title} \n`;
        msg += `👨 Имя: ${infoStudent?.name} \n`;
        msg += `📞 Номер телефона: ${infoStudent?.number} \n`;
        msg += `Количество тестов: ${data?.test?.length}  \n`;
        msg += `Уcпел на: ${Ansvers_list?.length}  \n`;

        for (let i = 0; i < Ansvers_list.length; i++) {
            if (Ansvers_list[i].ansver === true) {
                k++;
            }
        }

        msg += `Резултаты тестирования  \n`;
        msg += `${k} из ${data?.test?.length}  \n`;

        axios
            .post(URL, {
                chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
                parse_mode: "html",
                text: msg,
            })
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    Ansvers_list = [];
                }
            })
            .catch((err) => console.log('error_bot'));
    };

    if(endTest){
        sendData()
    }

    return (
        <section className="section">
            <div className="orange_div">
                <div className="blue_div">
                    {!endTest ? (
                        <>
                            <div className="flex max-md:flex-col items-center max-md:items-center max-md:justify-center justify-between text-white text_size gap-3 font-semibold">
                                <h2 className="w-1/3 max-3xl:w-1/2 max-md:w-full max-md:text-center">
                                    {translation?.textPage?.title}
                                </h2>
                                <h3>{data.title}</h3>
                            </div>

                            <div className="mt-5 max-lg:mt-4 max-md:mt-3 max-sm:mt-2 flex flex-col gap-3 max-xl:gap-2 max-md:gap-1">
                                <p className="text-white small_text_size font-semibold">
                                    {translation?.textPage?.question} {test.id}
                                    из {data.test.length}
                                </p>
                                <div className="p-1 h-4 max-lg:h-3 rounded-full bg-white">
                                    <div
                                        style={{
                                            width: `${Math.floor(
                                                (100 / data.test.length) *
                                                    (test.id - 1)
                                            )}%`,
                                            borderRadius: "10px",
                                            transition: "1s",
                                        }}
                                        className={`h-full bg-orange rounded-full]`}
                                    ></div>
                                </div>
                            </div>

                            <div className="bg-white flex items-center justify-center mt-7 max-3xl:mt-5 max-2xl:mt-4 max-lg:mt-3 min-h-[257px] max-3xl:min-h-[150px] max-2xl:min-h-[120px] max-lg:min-h-[100px] max-md:min-h-[90px] rounded-2xl p-5 max-3xl:p-4 max-lg:p-3 max-sm:p-2">
                                <p className="text_size font-medium">
                                    {test.question}
                                </p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="flex max-xl:flex-col items-start justify-between gap-5 max-xl:gap-4 max-md:gap-3 mt-7 max-3xl:mt-5 max-2xl:mt-4 max-lg:mt-3">
                                    {test.answers.map((item: any) => (
                                        <label
                                            key={item.id}
                                            className="bg-white w-full h-auto p-4 max-3xl:p-3 max-md::p-2 rounded-xl flex items-center cursor-pointer"
                                        >
                                            <div className="small_text_size font-medium flex items-center justify-between">
                                                <input
                                                    onChange={(e) => {
                                                        setNextButton(true);
                                                        setTestAnsver(
                                                            item.examination
                                                        );
                                                        setInputСheck(e.target);
                                                    }}
                                                    required
                                                    type="radio"
                                                    name="ansver"
                                                    className="w-14 h-5 cursor-pointer"
                                                />
                                                <p>{item.title}</p>
                                            </div>
                                        </label>
                                    ))}
                                </div>

                                <div className="flex max-sm:flex-col max-[380px]:gap-2 max-lg:gap-6 items-center justify-between max-sm:justify-center mt-10 max-2xl:mt-5 max-lg:mt-4 max-md:mt-3">
                                    <div className="flex min-w-[250px] items-center gap-5">
                                        <Image
                                            className="w-10 h-10 max-sm:h-7 max-sm:w-7 animate-spin animate-infinite animate-duration-[2000ms] animate-ease-out animate-normal"
                                            src="/icons/time.svg"
                                            alt=""
                                            width={10}
                                            height={10}
                                        />
                                        <p className="text-white text-4xl max-sm:text-3xl font-medium">
                                            <Timer
                                                time={data.time}
                                                setEndTest={setEndTest}
                                            />
                                        </p>
                                    </div>
                                    {!sendDataButton ? (
                                        <>
                                            {nextButton ? (
                                                <button
                                                    type="submit"
                                                    className="font-semibold flex items-center justify-between gap-5 max-sm:gap-2 small_text_size bg-white py-3 px-7 max-3xl:py-2 max-3xl:px-4 max-xl:py-2 max-xl:px-3 max-md:px-2 max-[380px]:w-1/2 rounded-xl"
                                                >
                                                    {
                                                        translation?.textPage?.next
                                                    }
                                                    <Image
                                                        className="w-7 h-7 max-md:h-5 max-md:w-5"
                                                        src="/icons/Arrow-Right.svg"
                                                        alt=""
                                                        width={10}
                                                        height={10}
                                                    />
                                                </button>
                                            ) : (
                                                <button
                                                    title="Выберите вариант"
                                                    type="submit"
                                                    className="font-semibold flex items-center justify-between gap-5 max-sm:gap-2 cursor-not-allowed small_text_size bg-[#989898] py-3 px-7 max-3xl:py-2 max-3xl:px-4 max-xl:py-2 max-xl:px-3 max-md:px-2 max-[380px]:w-1/2 rounded-xl"
                                                >
                                                    {
                                                        translation?.textPage?.next
                                                    }
                                                    <Image
                                                        className="w-7 h-7 max-md:h-5 max-md:w-5"
                                                        src="/icons/Arrow-Right.svg"
                                                        alt=""
                                                        width={10}
                                                        height={10}
                                                    />
                                                </button>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {nextButton ? (
                                                <button
                                                    type="submit"
                                                    className="font-semibold flex items-center justify-between gap-5 max-sm:gap-2 small_text_size bg-white py-3 px-7 max-3xl:py-2 max-3xl:px-4 max-xl:py-2 max-xl:px-3 max-md:px-2 max-[380px]:w-1/2 rounded-xl"
                                                >
                                                    {
                                                        translation?.textPage?.submit
                                                    }
                                                    <Image
                                                        className="w-7 h-7 max-md:h-5 max-md:w-5"
                                                        src="/icons/Arrow-Right.svg"
                                                        alt=""
                                                        width={10}
                                                        height={10}
                                                    />
                                                </button>
                                            ) : (
                                                <button
                                                    title="Выберите вариант"
                                                    type="submit"
                                                    className="font-semibold flex items-center justify-between gap-5 max-sm:gap-2 cursor-not-allowed small_text_size bg-[#989898] py-3 px-7 max-3xl:py-2 max-3xl:px-4 max-xl:py-2 max-xl:px-3 max-md:px-2 max-[380px]:w-1/2 rounded-xl"
                                                >
                                                    {
                                                        translation?.textPage?.submit
                                                    }
                                                    <Image
                                                        className="w-7 h-7 max-md:h-5 max-md:w-5"
                                                        src="/icons/Arrow-Right.svg"
                                                        alt=""
                                                        width={10}
                                                        height={10}
                                                    />
                                                </button>
                                            )}
                                        </>
                                    )}
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="flex flex-col gap-5 items-center justify-center">
                            <h2 className="text-white text-center text-2xl font-medium">
                                🎉 {translation?.endTest?.title}{" "}
                                {infoStudent?.name}! 🎉
                            </h2>
                            <h2 className="text-white text-center text-2xl font-medium">
                                {translation?.endTest?.text}
                            </h2>
                            <button
                                onClick={()=>router.push("/")}
                                title="result"
                                className="bg-white font-semibold cursor-pointer px-5 py-2 text-center rounded-xl"
                            >
                                {translation?.endTest?.goToBack}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TestingPage;
