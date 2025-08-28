
import React, { useRef } from 'react'

const UltimeNotizie = ({ img1, img2, img3, heading, paragraph, headingcolor, title1, title2, title3, desc1, desc2, desc3 })  => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (direction === "left") {
            scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
        } else {
            scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
    };
    const articles = [
        {
            img: img1,
            title: title1,
            desc: desc1,
        },
        {
            img: img2,
            title: title2,
            desc: desc2,
        },
        {
            img: img3,
            title: title3,
            desc: desc3,
        },

    ];


    return (
        <div>
            <div className="w-full md:ml-7 text-center pl-6 mt-6 md:mt-20">
                {/* Header */}
                <h2 className={`text-2xl md:text-3xl text-center font-semibold md:font-normal text-[25px] md:text-[45px]  text-[${headingcolor}] mb-2`}>
                    {heading}
                </h2>
                <p className="hidden md:block text-[17px]  text-[#333333] text-center mt-6 mb-6">
                   {paragraph}
                </p>
                <p className="md:hidden text-[10px] pr-4 text-[#333333] text-center mt-6 mb-6">
                    {paragraph}
                </p>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-4 no-scrollbar pb-4 md:mt-10"
                >
                    {articles.map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-50 md:w-130 bg-white rounded-lg overflow-hidden text-left"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full md:h-[400px] rounded-[4px] md:rounded-[10px] object-cover"
                            />
                            <div className="py-2 md:p-4">
                                <h3 className="font-bold text-[14px] md:text-[22px] text-[#000000] mb-2">{item.title}</h3>
                                <p className="text-[10px] md:text-[13px] text-[#000000] mb-4">{item.desc}</p>
                                <div className='border-t border-black md:w-[300px]' />
                                <button className="text-sm text-[#000000]  font-semibold">
                                    Leggi Ora →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll Buttons Below */}
                <div className="hidden md:flex justify-center gap-10 mt-4">
                    <img src='/Frame 237997.png' className='w-[40px] h-[40px] cursor-pointer' onClick={() => scroll("left")} />
                    <img src='/Frame 237998.png' className='w-[40px] h-[40px] cursor-pointer' onClick={() => scroll("right")} />
                </div>
            </div>
        </div>
    )
}

export default UltimeNotizie
