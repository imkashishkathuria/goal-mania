// import React from 'react'
// import HomeSections from './HomeSections'
// import HomeCards from './HomeCards'
// import AddToCartBtn from './AddToCartBtn'
// import Button from './Button'

// const SceltiperTe = () => {
//   return (
//     <div className='px-5 md:px-0 py-7 flex justify-center'>
//         <HomeSections heading="Scelti per Te" subheading="Scopri la nostra selezione di maglie, accessori e articoli ufficiali per vivere il calcio ogni giorno." gap="5" cards={
//             <div className='flex px-5 md:pl-10 gap-3 md:gap-5 w-full  overflow-auto  md:overflow-hidden'>
//                 <div className='md:hidden w-[220px] h-[420px] shrink-0'>
//                 <HomeCards image="/Rectangle 8.png" heading="Maglia Ufficiale Inter 2024/25" subheading="Indossa i colori nerazzurri con la maglia ufficiale della nuova stagione. Tessuto traspirante e design autentico."  btn1={
//                     <div className='flex gap-1 md:gap-3 items-center'>
//                         <AddToCartBtn size="12" px="8" py="4" />
//                         <Button text="Buy Now" px="8" py="4" size="12" />
//                          <img src='/mdi-light_heart (1).png' className='w-[20px] h-[20px] md:w-[30px] md:h-[24px]' />
//                     </div>
//                 } />
//                 </div>
//                 <div className='hidden md:block w-full'>
//                     <HomeCards image="/Rectangle 8.png" heading="Maglia Ufficiale Inter 2024/25" imgsmwidth="400" subheading="Indossa i colori nerazzurri con la maglia ufficiale della nuova stagione. Tessuto traspirante e design autentico."  btn1={
//                     <div className='flex gap-3 items-center'>
//                         <AddToCartBtn size="14" px="8" py="4" />
//                         <Button text="Buy Now" px="8" py="4" size="18" />
//                          <img src='/mdi-light_heart (1).png' className='w-[30px] h-[24px]' />
//                     </div>
//                 } />
//                 </div>

//                  <div className='md:hidden w-[220px] h-[420px] shrink-0'>
//                 <HomeCards image="/Rectangle 8 (1).png" heading="Maglia Retro Milan 1993/94" subheading="Rivivi la storica stagione con la maglia iconica rossonera, un must per ogni vero tifoso." btn1={
//                     <div className='flex gap-3 items-center'>
//                         <AddToCartBtn size="12"  px="8" py="4" />
//                         <Button text="Buy Now" px="8" py="4" size="12" />
//                          <img src='/mdi-light_heart (1).png' className='w-[20px] h-[20px]' />
//                     </div>
//                 } />
//                 </div>
//                 <div className='hidden md:block  w-full'>
//                     <HomeCards image="/Rectangle 8 (1).png" heading="Maglia Retro Milan 1993/94" subheading="Rivivi la storica stagione con la maglia iconica rossonera, un must per ogni vero tifoso." btn1={
//                     <div className='flex gap-3 items-center'>
//                         <AddToCartBtn size="12"  px="8" py="4" />
//                         <Button text="Buy Now" px="8" py="4" size="12" />
//                          <img src='/mdi-light_heart (1).png' className='w-[30px] h-[24px]' />
//                     </div>
//                 } />
//                 </div>


//                 <div className='md:hidden w-[220px] shrink-0'>
//                  <HomeCards image="/Rectangle 8 (2).png" heading="Pallone Serie A 2024" subheading="Il pallone ufficiale della Serie A, perfetto per collezionisti e per il gioco in campo." btn1={
//                     <div className='flex gap-3 items-center'>
//                         <AddToCartBtn size="12"  px="8" py="4" />
//                         <Button text="Buy Now" px="8" py="4" size="12" />
//                          <img src='/mdi-light_heart (1).png' className='w-[20px] h-[20px]' />
//                     </div>
//                 } />
//                 </div>
//                  <div className='hidden md:block  w-full'>
//                     <HomeCards image="/Rectangle 8 (2).png" heading="Pallone Serie A 2024" subheading="Il pallone ufficiale della Serie A, perfetto per collezionisti e per il gioco in campo." btn1={
//                     <div className='flex gap-3 items-center'>
//                         <AddToCartBtn size="12"  px="8" py="4" />
//                         <Button text="Buy Now" px="8" py="4" size="12" />
//                          <img src='/mdi-light_heart (1).png' className='w-[30px] h-[24px]' />
//                     </div>
//                 } />
//                 </div>
//                   <div className='md:hidden w-[220px] shrink-0'>
//                  <HomeCards image="/public/6cad815ed3ad25113b8b70f684b7b6464ec12451.jpg" heading="Maglia Ufficiale Inter 2024/25" subheading="Indossa i colori nerazzurri con la maglia ufficiale della nuova stagione. Tessuto traspirante e design autentico." btn1={
//                     <div className='flex gap-3 items-center'>
//                         <AddToCartBtn size="12"  px="8" py="4" />
//                         <Button text="Buy Now" px="8" py="4" size="12" />
//                          <img src='/mdi-light_heart (1).png' className='w-[20px] h-[20px]' />
//                     </div>
//                 } />
//                 </div>
//                  <div className='hidden md:block  w-full'>
//                     <HomeCards image="/public/6cad815ed3ad25113b8b70f684b7b6464ec12451.jpg" heading="Maglia Ufficiale Inter 2024/25" subheading="Indossa i colori nerazzurri con la maglia ufficiale della nuova stagione. Tessuto traspirante e design autentico." btn1={
//                     <div className='flex gap-3 items-center'>
//                         <AddToCartBtn size="12"  px="8" py="4" />
//                         <Button text="Buy Now" px="8" py="4" size="12" />
//                          <img src='/mdi-light_heart (1).png' className='w-[30px] h-[24px]' />
//                     </div>
//                 } />
//                 </div>

//             </div>
//         } />
      
//     </div>
//   )
// }

// export default SceltiperTe

import React, { useRef } from 'react'
import AddToCartBtn from './AddToCartBtn';
import Button from './Button';

const SceltiperTe = () => {
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
            img: "/Rectangle 8.png",
            title: "Maglia Ufficiale Inter 2024/25",
            desc: "Indossa i colori nerazzurri con la maglia ufficiale della nuova stagione. Tessuto traspirante e design autentico.",
        },
        {
            img: "/Rectangle 8 (1).png",
            title: "Maglia Retro Milan 1993/94",
            desc: "Rivivi la storica stagione con la maglia iconica rossonera, un must per ogni vero tifoso.",
        },
        {
            img: "/Rectangle 8 (2).png",
            title: "Pallone Serie A 2024",
            desc: "Il pallone ufficiale della Serie A, perfetto per collezionisti e per il gioco in campo.",
        },
        {
            img: "/Rectangle 8 (2).png",
            title: "Maglia Ufficiale Inter 2024/25",
            desc: "Indossa i colori nerazzurri con la maglia ufficiale della nuova stagione. Tessuto traspirante e design autentico.",
        },
        {
            img: "/Rectangle 8 (2).png",
            title: "Osimhen verso la Ligue 1",
            desc: "Victor Osimhen, capocannoniere della Serie A, vicino a un trasferimento al Marsiglia.",
        },
       
    ];
  return (
    <div>
       <div className="w-full md:ml-7 text-center pl-6 mt-6 md:mt-20">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl text-center font-semibold md:font-normal text-[25px] md:text-[45px]  text-[#0A1A2F] mb-2">
                   Scelti per Te
                </h2>
                <p className="hidden md:block text-[17px]  text-[#333333] text-center mt-6 mb-6">
                    Scopri la nostra selezione di maglie, accessori e articoli ufficiali per vivere il calcio ogni giorno.
                </p>
                <p className="md:hidden text-[10px] pr-4 text-[#333333] text-center mt-6 mb-6">
                   Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale.
                </p>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto md:gap-4 no-scrollbar pb-4 md:mt-10"
                >
                    {articles.map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-40 md:w-100 bg-white rounded-lg overflow-hidden text-left"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="md:h-100 w-[150px] md:w-130 object-cover rounded-lg"
                            /> 
                            <div className="md:p-4">
                                <h3 className="font-bold text-[9px] md:text-[22px] text-[#000000] mb-2">{item.title}</h3>
                            <p className="text-[8px] md:text-[13px] text-[#000000] mb-4">{item.desc}</p>
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
                    <img src='/Frame 237997.png' className='w-[40px] h-[40px] cursor-pointer' onClick={() => scroll("left")}/>
            <img src='/Frame 237998.png' className='w-[40px] h-[40px] cursor-pointer' onClick={() => scroll("right")} />
                </div>
            </div>
    </div>
  )
}

export default SceltiperTe

