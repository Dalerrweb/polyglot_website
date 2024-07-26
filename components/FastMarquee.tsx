import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

const FastMarquee = () => {
    return (
        <div className='flex flex-col'>
            <Marquee className='bg-blue pb-5 max-xl:pb-3'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 28, 30, 32].map((i: number) => (
                        <div key={i} className="px-3 max-xl:px-2 min-w-[380px] max-xl:w-[300px] max-md:w-[250px] max-sm:min-w-[200px] h-[250px] max-2xl:h-[200px] max-xl:h-[170px] max-lg:h-[150px] max-md:min-h-[120px]">
                            <Image
                                className="w-full h-full object-cover rounded-2xl max-lg:rounded-xl max-md:rounded-lg bg-[#D9D9D9]"
                                src={`/images/offices/photo-${i}.webp`}
                                width={1000}
                                height={1000}
                                alt="photo"
                            />
                        </div>
                    ))
                }
            </Marquee>

            <Marquee direction='right' className='bg-blue'>
                {
                    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 29, 31, 33].map((i: number) => (
                        <div key={i} className="px-3 max-xl:px-2 min-w-[380px] max-xl:w-[300px] max-md:w-[250px] max-sm:min-w-[200px] h-[250px] max-2xl:h-[200px] max-xl:h-[170px] max-lg:h-[150px] max-md:min-h-[120px]">
                            <Image
                                className="w-full h-full object-cover rounded-2xl max-lg:rounded-xl max-md:rounded-lg bg-[#D9D9D9]"
                                src={`/images/offices/photo-${i}.webp`}
                                width={1000}
                                height={1000}
                                alt="photo"
                            />
                        </div>
                    ))
                }
            </Marquee>
        </div>
    )
}

export default FastMarquee
