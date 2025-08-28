import React, { useRef } from 'react';

const SerieAClubs = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div className="">
      <div className="w-full md:ml-7 text-center pl-6 mt-6 md:mt-20">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl text-center font-semibold md:font-normal text-[25px] md:text-[45px] text-[#000000] mb-2">
          Serie A Clubs
        </h2>
        <p className="hidden md:block text-[17px] text-[#333333] text-center mt-6 mb-6">
          Explore all Serie A teams from legendary giants to rising challengers. Click a logo to see the latest news, matches, and updates for each club.
        </p>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 no-scrollbar pb-4 md:mt-10 touch-pan-x"
          style={{ WebkitOverflowScrolling: 'touch' }} // iOS smooth scrolling
        >
          {[
            'Ellipse 1', 'Ellipse 2', 'Ellipse 13', 'Ellipse 3', 'Frame 238098',
            'Frame 238091', 'Frame 238092', 'Frame 238093', 'Frame 238094',
            'Frame 238095', 'Frame 238096', 'Frame 238097'
          ].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90px] md:w-[120px] flex justify-center items-center"
            >
              <img
                src={`/${item}.png`}
                alt={item}
                className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] cursor-pointer object-contain"
              />
            </div>
          ))}
        </div>

        {/* Scroll Buttons Below (Desktop only) */}
        <div className="hidden md:flex justify-center gap-4 mt-4">
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
