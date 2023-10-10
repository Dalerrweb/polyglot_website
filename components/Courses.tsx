import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Rodal from "rodal";

import Course from "./children/Course";

import InputMask from "react-input-mask";

import "rodal/lib/rodal.css";
import "swiper/css";
import axios from "axios";

interface CoursesProps {
    translation: any;
}

const URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`;

const Courses: React.FC<CoursesProps> = ({ translation }) => {
    const [constructor, setConstructor] = useState(false);
    const [swiperRef, setSwiperRef] = useState<any>(false);
    const [modalInfo, setModalInfo] = useState<any>(null);

    const [phone, setPhone] = useState("");

    const show = () => {
        setConstructor(true);
    };

    const hide = () => {
        setConstructor(false);
    };

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    const SendMessage = (e: any) => {
        e.preventDefault();

        let info: any = {};

        const formData = new FormData(e.target);

        formData.forEach((value, key) => {
            info[key] = value;
        });

        let msg = `🆕 Запись на курса! \n`;
        msg += `📕 Курс: ${modalInfo?.name1} ${modalInfo?.name2} \n`;
        msg += `👨 Имя: ${info?.name} \n`;
        msg += `📞 Номер телефона: ${info?.phone} \n`;

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
            .catch((err) => console.log(err));
			setConstructor(false)
		};

    return (
        <div className="custom-container" id="courses">
            <div className="mb-9 max-lg:mb-5 max-md:mb-1 mt-20 flex items-center justify-between">
                <div className="">
                    <h2 className="text-[96px] max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-[32px] font-semibold leading-[90.5px] max-lg:leading-[32px] text-blue">
                        {translation?.title}
                    </h2>
                </div>
                <div className="flex gap-3 items-center">
                    <button
                        onClick={prevHandler}
                        className="w-12 h-12 max-xl:w-12 max-xl:h-12 max-md:w-10 max-md:h-10 flex items-center justify-center bg-blue rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                        >
                            <path
                                d="M4.04448 12.4645C4.04466 12.2603 4.12591 12.0646 4.27037 11.9203L11.4579 4.73278C11.656 4.54019 11.9417 4.46791 12.2076 4.54317C12.4734 4.61843 12.6789 4.82979 12.7466 5.09764C12.8144 5.36548 12.7341 5.64912 12.536 5.84171L5.91323 12.4645L12.536 19.0872C12.742 19.2792 12.8268 19.5684 12.7571 19.8412C12.6875 20.1141 12.4744 20.3271 12.2016 20.3968C11.9287 20.4665 11.6396 20.3817 11.4476 20.1756L4.2601 12.9881C4.12432 12.8473 4.04723 12.6601 4.04448 12.4645Z"
                                fill="white"
                            />
                            <path
                                d="M4.05474 12.4645C4.06028 12.0415 4.40184 11.6999 4.82483 11.6944L20.2266 11.6944C20.5017 11.6944 20.756 11.8412 20.8935 12.0794C21.0311 12.3177 21.0311 12.6113 20.8935 12.8495C20.756 13.0878 20.5017 13.2346 20.2266 13.2346L4.82483 13.2346C4.40184 13.229 4.06028 12.8875 4.05474 12.4645Z"
                                fill="white"
                            />
                            <path
                                d="M3.29492 12.4645C3.29528 12.0561 3.45779 11.6646 3.74671 11.3761L10.9342 4.18859C11.5381 3.58748 12.515 3.58978 13.1161 4.19372C13.7172 4.79766 13.7149 5.77454 13.111 6.37564L7.00162 12.4645L13.0905 18.5431C13.6944 19.1442 13.6967 20.121 13.0956 20.725C12.4945 21.3289 11.5176 21.3312 10.9137 20.7301L3.72617 13.5426C3.44727 13.2533 3.29251 12.8664 3.29492 12.4645Z"
                                fill="white"
                            />
                            <path
                                d="M3.29492 12.4645C3.29492 11.6139 3.98449 10.9243 4.8351 10.9243L20.2369 10.9243C21.0875 10.9243 21.7771 11.6139 21.7771 12.4645C21.7771 13.3151 21.0875 14.0047 20.2369 14.0047L4.8351 14.0047C3.98449 14.0047 3.29492 13.3151 3.29492 12.4645Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={nextHandler}
                        className="w-12 h-12 max-xl:w-12 max-xl:h-12 max-md:w-10 max-md:h-10 flex items-center justify-center bg-blue rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                        >
                            <path
                                d="M19.9759 12.4918C19.9758 12.6874 19.8979 12.8749 19.7596 13.0131L12.8743 19.8984C12.6845 20.0828 12.4108 20.1521 12.1561 20.08C11.9015 20.0079 11.7046 19.8054 11.6397 19.5488C11.5748 19.2923 11.6518 19.0205 11.8415 18.8361L18.1858 12.4918L11.8415 6.14753C11.6442 5.96363 11.5629 5.68666 11.6297 5.42528C11.6964 5.16391 11.9005 4.95981 12.1619 4.89306C12.4233 4.8263 12.7002 4.90755 12.8841 5.10491L19.7694 11.9902C19.8995 12.1251 19.9733 12.3044 19.9759 12.4918Z"
                                fill="white"
                            />
                            <path
                                d="M19.9661 12.4918C19.9608 12.897 19.6336 13.2242 19.2284 13.2295L4.47431 13.2295C4.21075 13.2295 3.96721 13.0889 3.83544 12.8606C3.70366 12.6324 3.70366 12.3512 3.83544 12.1229C3.96721 11.8947 4.21075 11.7541 4.47431 11.7541L19.2284 11.7541C19.6336 11.7594 19.9608 12.0866 19.9661 12.4918Z"
                                fill="white"
                            />
                            <path
                                d="M20.694 12.4918C20.6936 12.883 20.538 13.258 20.2612 13.5344L13.3759 20.4197C12.7974 20.9955 11.8616 20.9933 11.2858 20.4147C10.71 19.8362 10.7122 18.9004 11.2907 18.3246L17.1432 12.4918L11.3104 6.66885C10.7318 6.09302 10.7296 5.15722 11.3055 4.57868C11.8813 4.00014 12.8171 3.99794 13.3956 4.57376L20.2809 11.459C20.548 11.7362 20.6963 12.1068 20.694 12.4918Z"
                                fill="white"
                            />
                            <path
                                d="M20.694 12.4918C20.694 13.3066 20.0334 13.9672 19.2186 13.9672L4.46447 13.9672C3.64962 13.9672 2.98906 13.3066 2.98906 12.4918C2.98906 11.6769 3.64962 11.0164 4.46447 11.0164L19.2186 11.0164C20.0334 11.0164 20.694 11.677 20.694 12.4918Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <Rodal
                animation={"slideUp"}
                visible={constructor}
                onClose={hide}
                width={600}
                height={500}
                className="modal backdrop-blur-sm overflow-hidden"
            >
                <div className="mb-6">
                    <h3 className="text-[36px] max-xl:text-[28px] max-lg:text-[25px] max-3xl:text-[30px] font-semibold text-center">
                        {modalInfo?.name1} {modalInfo?.name2}
                    </h3>
                </div>
                <div className="mb-4">
                    <p className="text-[24px] max-3xl:text-[20px] max-2xl:text-[16px] leading-[32px] max-2xl:leading-[22.312px] text-center">
                        {modalInfo?.info}
                    </p>
                </div>
                <div className="">
                    <form
                        onSubmit={(e) => SendMessage(e)}
                        className="flex flex-col gap-2"
                    >
                        <input
                            type="text"
                            placeholder="Имя"
                            required
                            name="name"
                            className="text-[24px] max-2xl:text-[20px] max-xl:text-[16px] max-sm:text-[14px] px-4 max-2xl:px-4 py-[10px] max-2xl:py-1 max-xl:py-[8px] max-xl:px-3 rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
                        />
                        <div className="overflow-hidden text-[24px] max-2xl:text-[20px] max-xl:text-[16px] max-sm:text-[14px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]">
                            <InputMask
                                className="w-full py-[16px] max-2xl:py-1 px-6 max-2xl:px-4  max-xl:py-[8px] max-xl:px-3"
                                mask="+\9\98-(99)-999-99-99"
								name="phone"
                                placeholder="Номер"
                                required
                                value={phone}
                                onChange={(e: any) =>
                                    setPhone(e.target.value)
                                }
                            ></InputMask>
                        </div>
                        <button className="max-xl:text-[16px] font-medium py-[12px] rounded-md bg-blue text-white">
                            Проконсультироваться
                        </button>
                    </form>
                </div>
            </Rodal>
            <Swiper
                className="swiper-hidden"
                onSwiper={(swiper) => setSwiperRef(swiper)}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                    1536: {
                        spaceBetween: 35,
                    },
                    1920: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                }}
            >
                {translation?.courses?.map((item: any) => {
                    return (
                        <SwiperSlide key={item}>
                            <Course
                                item={item}
                                show={show}
                                setModalInfo={setModalInfo}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Courses;
