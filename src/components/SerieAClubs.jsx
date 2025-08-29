// import React, { useRef } from 'react';

// const SerieAClubs = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (direction === 'left') {
//       scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
//     } else {
//       scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="">
//       <div className="w-full md:ml-7 text-center pl-6 mt-6 md:mt-20">
//         {/* Header */}
//         <h2 className="text-2xl md:text-3xl text-center font-semibold md:font-normal text-[25px] md:text-[45px] text-[#000000] mb-2">
//           Serie A Clubs
//         </h2>
//         <p className="hidden md:block text-[17px] text-[#333333] text-center mt-6 mb-6">
//           Explore all Serie A teams from legendary giants to rising challengers. Click a logo to see the latest news, matches, and updates for each club.
//         </p>

//         {/* Scrollable Cards */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto gap-4 no-scrollbar pb-4 md:mt-10 touch-pan-x"
//           style={{ WebkitOverflowScrolling: 'touch' }} // iOS smooth scrolling
//         >
//           {[
//             'Ellipse 1', 'Ellipse 2', 'Ellipse 13', 'Ellipse 3', 'Frame 238098',
//             'Frame 238091', 'Frame 238092', 'Frame 238093', 'Frame 238094',
//             'Frame 238095', 'Frame 238096', 'Frame 238097'
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-[90px] md:w-[120px] flex justify-center items-center"
//             >
//               <img
//                 src={`/${item}.png`}
//                 alt={item}
//                 className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] cursor-pointer object-contain"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Scroll Buttons Below (Desktop only) */}
//         <div className="hidden md:flex justify-center gap-4 mt-4">
//           <img
//             src="/Frame 237997.png"
//             className="w-[40px] h-[40px] cursor-pointer"
//             onClick={() => scroll('left')}
//           />
//           <img
//             src="/Frame 237998.png"
//             className="w-[40px] h-[40px] cursor-pointer"
//             onClick={() => scroll('right')}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SerieAClubs;


import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SerieAClubs = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  const clubs = [
    { id: 1, logo: "/Ellipse 1.png", name: "Cagliari" },
    { id: 2, logo: "/Ellipse 2.png", name: "Fiorentina" },
    { id: 3, logo: "/Ellipse 13.png", name: "Inter" },
    { id: 4, logo: "/Ellipse 3.png", name: "Sassuolo" },
    { id: 5, logo: "/Frame 238098.png", name: "Napoli" },
    { id: 6, logo: "/Frame 238091.png", name: "AC Milan" },
    { id: 7, logo: "/Frame 238092.png", name: "Empoli" },
    { id: 8, logo: "/Frame 238093.png", name: "Roma" },
    { id: 9, logo: "/Frame 238094.png", name: "Genoa" },
    { id: 10, logo: "/Frame 238095.png", name: "Bologna" },
    { id: 10, logo: "/Frame 238096.png", name: "Bologna" },
    { id: 10, logo: "/Frame 238097.png", name: "Bologna" },
  ];

  return (
    <div className="w-full my-3 md:py-10 text-center">
      <h2 className="text-2xl md:text-3xl text-center font-semibold md:font-normal text-[25px] md:text-[45px]  text-[${headingcolor}] mb-2">Serie A Clubs</h2>
      <p className="text-[11px] md:text-[17px]  text-[#333333] text-center mb-6 mt-2">
        Explore all Serie A teams from legendary giants to rising challengers.
        Click a logo to see the latest news, matches, and updates for each club.
      </p>

      <div className="relative md:mt-8 md:px-15">
        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide md:space-x-10 px-6 scroll-smooth lg:overflow-hidden"
        >
          {clubs.map((club) => (
            <div
              key={club.id}
              className="flex-shrink-0 w-[70px] h-[70px] md:w-[100px] md:h-[100px]   rounded-full p-2 hover:scale-110 transition cursor-pointer"
            >
              <img
                src={club.logo}
                alt={club.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Buttons for Desktop */}
        {/* <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 shadow"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 shadow"
          >
            <ChevronRight />
          </button>
        </div> */}
         <div className="hidden md:flex justify-center gap-9 mt-10">
       <img
            src="/Frame 237997.png"
            className="w-[40px] h-[40px] cursor-pointer"
            onClick={() => scroll('left')}
          />
          <img
            src="/Frame 237998.png"
            className="w-[40px] h-[40px] cursor-pointer"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default SerieAClubs;

