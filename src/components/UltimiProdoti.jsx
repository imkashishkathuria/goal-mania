import React, { useRef } from 'react'
import AddToCartBtn from './AddToCartBtn';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const UltimiProdoti = () => {
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    const scroll = (direction) => {
        if (direction === "left") {
            scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
        } else {
            scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
    };

    const articles = [
        {
            img: "/Frame 32.png",
            title: "Maglia Napoli Partenope Edizione Speciale",

        },
        {
            img: "/Frame 238015.png",
            title: "Maglia INTER x VR46 EDIZIONE LIMITATA",

        },
        {
            img: "/Frame 238016.png",
            title: "Maglia INTER x VR46 EDIZIONE LIMITATA",

        },
        {
            img: "/Frame 238017.png",
            title: "Maglia INTER x VR46 EDIZIONE LIMITATA",

        },
        {
            img: "/Frame 238017.png",
            title: "Maglia INTER x VR46 EDIZIONE LIMITATA",
        },

    ];
    return (
        <div>
            <div className="w-full md:ml-7 text-center pl-6 mt-6 md:mt-20">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl text-center font-semibold md:font-normal text-[25px] md:text-[45px]  text-[#0A1A2F] mb-2">
                    Ultimi prodotti
                </h2>
                <p className="hidden md:block text-[17px]  text-[#333333] text-center mt-6 mb-6">
                    Comfort e stile in un solo capo.
                </p>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto md:gap-4 no-scrollbar pb-4 md:mt-10" 
                >
                    {articles.map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-40 md:w-100 bg-white rounded-lg overflow-hidden text-left" onClick={() => navigate(`/product${item.img}`)}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="md:h-100 w-[150px] md:w-130 object-contain"
                            />
                            <div className="md:p-4">
                                <h3 className="font-bold text-[9px] md:text-[22px] text-[#000000] mb-2">{item.title}</h3>
                                <div className='flex items-center gap-2'>
                                    <p className='text-[#0A1A2F] text-[22px] font-bold'>€35.00</p>
                                    <img src="/Frame 35.png" />

                                </div>
                                <div className='flex gap-1 md:gap-2 items-center'>
                                    <AddToCartBtn />
                                    <Button text="Buy Now" />
                                    <img src='/mdi-light_heart (2).png' className='w-[13px] object-contain md:w-[30px]' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll Buttons Below */}
                <div className="hidden md:flex justify-center gap-12 mt-4">
                    <img src='/Frame 237997.png' className='w-[40px] h-[40px] cursor-pointer' onClick={() => scroll("left")} />
                    <img src='/Frame 237998.png' className='w-[40px] h-[40px] cursor-pointer' onClick={() => scroll("right")} />
                </div>
            </div>
        </div>
    )
}

export default UltimiProdoti
