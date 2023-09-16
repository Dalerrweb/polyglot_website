import Timer from "../components/Timer";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   let res = await fetch(`${process.env.NEXT_PUBLIC_URL}`);
   let data = await res.json();

   return {
      props: {
         data: data.testing[query.testingPage !== undefined ? +query.testingPage - 1 : 0],
      },
   };
};

let Ansvers_list: any = [];

const TestingPage = ({ data }: any) => {
   const [testNumber, setTestNumber] = useState(0);
   const [test, setTest] = useState(data.test[testNumber]);
   const [testAnsver, setTestAnsver] = useState(false);
   const [inputСheck, setInputСheck] = useState<any>();

   
   const [endTest, setEndTest] = useState(false);
   

   const handleSubmit = (e: any) => {
      e.preventDefault();

      if (testNumber + 1 === data.test.length) {
         setEndTest(true);
      }

      if (data.test.length <= testNumber + 1) {
         Ansvers_list.push({ number: testNumber + 1, ansver: testAnsver });
      } else {
         Ansvers_list.push({ number: testNumber + 1, ansver: testAnsver });
         setTest(data.test[testNumber + 1]);
         setTestNumber(testNumber + 1);
         inputСheck.checked = false;
      }
   };

   const hendlReset = (e: any) => {
      Ansvers_list = [];
      setTestNumber(0);
      setTest(data.test[0]);
   };


   return (
      <section className="section">
         <div className="orange_div">
            <div className="blue_div">
               {!endTest ? (
                  <>
                     <div className="flex max-md:flex-col items-center max-md:items-center max-md:justify-center justify-between text-white text_size gap-3 font-semibold">
                        <h2 className="w-1/3 max-3xl:w-1/2 max-md:w-full max-md:text-center">
                           Пройдите мини-тест на уровень владения языком
                        </h2>
                        <h3>{data.title}</h3>
                     </div>

                     <div className="mt-5 max-lg:mt-4 max-md:mt-3 max-sm:mt-2 flex flex-col gap-3 max-xl:gap-2 max-md:gap-1">
                        <p className="text-white small_text_size font-semibold">
                           Вопрос {test.id} из {data.test.length}
                        </p>
                        <div className="p-1 h-4 max-lg:h-3 rounded-full bg-white">
                           <div style={{width:`${Math.floor((100 / data.test.length) * (test.id -1))}%`, borderRadius:"10px"}} className={`h-full bg-orange rounded-full]`}></div>
                        </div>
                     </div>

                     <div className="bg-white flex items-center justify-center mt-7 max-3xl:mt-5 max-2xl:mt-4 max-lg:mt-3 min-h-[257px] max-3xl:min-h-[150px] max-2xl:min-h-[120px] max-lg:min-h-[100px] max-md:min-h-[90px] rounded-2xl p-5 max-3xl:p-4 max-lg:p-3 max-sm:p-2">
                        <p className="text_size font-medium">{test.question}</p>
                     </div>
                     <form onSubmit={handleSubmit} onReset={hendlReset}>
                        <div className="flex max-xl:flex-col items-start justify-between gap-5 max-xl:gap-4 max-md:gap-3 mt-7 max-3xl:mt-5 max-2xl:mt-4 max-lg:mt-3">
                           {test.answers.map((item: any) => (
                              <label key={item.id} className="bg-white w-full h-auto p-4 max-3xl:p-3 max-md::p-2 rounded-xl flex items-center cursor-pointer">
                              <div
                                 className="small_text_size font-medium flex items-center justify-between"
                              >
                                    <input
                                       onChange={(e) => {
                                          //   setTestId(item.id);
                                          setTestAnsver(item.examination);
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

                        <div className="max-lg:flex justify-center items-center gap-5 w-1/2 hidden  mt-5 m-auto">
                           <Image
                              className="w-7 h-7 max-md:h-6 max-md:w-6"
                              src="/icons/time.svg"
                              width={10}
                              height={10}
                              alt=""
                           />
                           <p className="text-white text-3xl max-3xl:text-2xl max-md:text-xl font-medium">
                              <Timer time={data.time} setEndTest={setEndTest} />
                           </p>
                        </div>

                        <div className="flex max-[380px]:flex-col max-[380px]:gap-2 max-lg:gap-6 items-center justify-between mt-10 max-2xl:mt-5 max-lg:mt-4 max-md:mt-3 max-sm:mt-2">
                           <button
                              type="reset"
                              className="flex items-center justify-between gap-5 max-sm:gap-2 small_text_size bg-white py-3 px-7 max-3xl:py-2 max-3xl:px-4 max-xl:py-2 max-xl:px-3 max-md:px-2  max-[380px]:w-1/2 rounded-xl"
                           >
                              Сбросить
                              <Image
                                 className="w-7 h-7 max-md:h-5 max-md:w-5"
                                 src="/icons/Square-Down-left.svg"
                                 width={10}
                                 height={10}
                                 alt=""
                              />
                           </button>

                           <div className="flex items-center gap-5 max-lg:hidden">
                              <Image
                                 className="w-10 h-10"
                                 src="/icons/time.svg"
                                 alt=""
                                 width={10}
                                 height={10}
                              />
                              <p className="text-white text-4xl font-medium">
                                 <Timer
                                    time={data.time}
                                    setEndTest={setEndTest}
                                 />
                              </p>
                           </div>

                           <button
                              type="submit"
                              className="flex items-center justify-between gap-5 max-sm:gap-2 small_text_size bg-white py-3 px-7 max-3xl:py-2 max-3xl:px-4 max-xl:py-2 max-xl:px-3 max-md:px-2 max-[380px]:w-1/2 rounded-xl"
                           >
                              Дальше
                              <Image
                                 className="w-7 h-7 max-md:h-5 max-md:w-5"
                                 src="/icons/Arrow-Right.svg"
                                 alt=""
                                 width={10}
                                 height={10}
                              />
                           </button>
                        </div>
                     </form>
                  </>
               ) : (
                  <div className="flex flex-col gap-5 items-center justify-center">
                     <h1 className="text-white text-center text-2xl font-medium">
                        The end
                     </h1>
                     <div>
                        {Ansvers_list.map((item: any) => (
                           <div
                              key={item.number}
                              className="flex items-center text-white"
                           >
                              <p>{item.number}</p>:
                              <p>{item.ansver ? "+" : "-"}</p>
                           </div>
                        ))}
                     </div>
                     <Link href={"/"}>
                        <button
                           title="result"
                           className="bg-white font-semibold cursor-pointer px-5 py-2 text-center rounded-xl"
                        >
                           Go to back
                        </button>
                     </Link>
                  </div>
               )}
            </div>
         </div>
      </section>
   );
};

export default TestingPage;
