import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button';

const Articles = () => {

  const articles = [
    {
      id: 1,
      tag: "Action",
      title: "Le Statistiche di Inizio Stagione",
      date: "27 AGOSTO, 2025",
      img: "/spotlight_post02.jpg (1).png",
    },
    {
      id: 2,
      tag: "Fighter",
      title: "Tutto Quello che Devi Sapere sul",
      date: "27 AGOSTO, 2025",
      img: "/Link.png",
    },
    {
      id: 3,
      tag: "Gaming",
      title: "La Coreografia che ha Stupito Tutto lo",
      date: "27 AGOSTO, 2025",
      img: "/Link (1).png",
    },
  ];

  return (
    <div>
      <Header />
      <img src='/Section.png' className='hidden md:flex' />
      <img src='/Frame 238056 (4).png' className='md:hidden' />


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-5 md:px-20 py-4 md:py-12">
        {/* Left + Middle Content */}
        <div className="lg:col-span-2">
          {/* Section Title */}
          <div className="md:mb-6">
            <p className='md:hidden text-[#0F1B2D] text-center font-bold text-[30px]'>In Primo Piano</p>
            <div className='hidden md:flex items-center'>
              <span className="inline-block bg-[#0F1B2D] text-white px-4 py-1 font-medium transform -skew-x-14">
                <span className="inline-block w-30  transform skew-x-12">In Primo Piano</span>
              </span>

              <div className='border border-gray-300 h-1 w-180' />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Main Featured Article */}
            <div className="md:col-span-2">
              <img
                src="/spotlight_post01.jpg.png"
                alt="featured"
                className="rounded-lg mb-4 w-130 object-cover"
              />
              <span className="bg-white border border-gray-300 text-gray-700 px-2 py-0.5 text-xs font-semibold uppercase">
                Racing
              </span>
              <h2 className="mt-3 text-md md:text-xl font-bold text-[#183354] leading-snug">
                La Maglia e la Storia Dietro il Simbolo
              </h2>
              <div className="text-gray-500 text-[9px] md:text-sm mt-2 gap-2 flex items-center md:gap-3">
                <div className='flex gap-1 md:gap-2 items-center'>
                  <img src="/Vector (16).png" className='w-3 md:w-4' />
                  <span className='uppercase'>By Admin</span>
                </div>
                 <div className='flex gap-1 md:gap-2 items-center'>
                <img src="/Vector (15).png" className='w-3 md:w-4'/>
                <span>27 AGOSTO, 2025</span>
                </div>
                <div className='flex gap-1 md:gap-2 items-center'>
                <img src="/Vector (17).png" className='w-3 md:w-4'/>
                <span>20 MINS</span>
                </div>
              </div>
            </div>

            {/* Other Articles */}
            <div className="flex flex-col gap-6 mt-5 md:mt-0">
              {articles.map((article) => (
                <div key={article.id} className="flex gap-3">
                  
                  <div>
                    <span className="bg-white border border-gray-300 text-gray-700 px-2 py-0.5 text-xs font-semibold uppercase">
                      {article.tag}
                    </span>
                    <h3 className="mt-2 text-sm text-[#183354] font-bold leading-snug">
                      {article.title}
                    </h3>
                    <div className='flex gap-2 items-center'>
                    <img src="/Vector (15).png" className='w-4'/>
                    <p className="text-xs text-gray-500 mt-1">{article.date}</p>
                    </div>
                  </div>
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-30  rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Follow Us */}
          <div>
             <div className='hidden md:flex items-center'>
            <span className=" w-40 inline-block bg-[#0F1B2D] text-white px-4 py-1 font-medium transform -skew-x-14">
              Follow Us
            </span>
            <div className='border border-gray-300 h-1 w-100' />
            </div>
            <div className="hidden md:grid grid-cols-2 gap-3 mt-4">
              <button className="flex items-center justify-center bg-[#F5F5F5] rounded-md py-2 hover:bg-gray-100">
                <div className='flex gap-2 items-center'>
                  <img src='/Symbol.png' />
                  <p className='text-[#0A1A2F] capitalize'>facebook</p>
                </div>
                {/* <FaFacebookF /> */}
              </button>
                <button className="flex items-center justify-center bg-[#F5F5F5] rounded-md py-2 hover:bg-gray-100">
                <div className='flex gap-2 items-center'>
                  <img src='/Symbol (1).png' />
                  <p className='text-[#0A1A2F] capitalize'>twitter</p>
                </div>
                {/* <FaFacebookF /> */}
              </button>
                <button className="flex items-center justify-center bg-[#F5F5F5] rounded-md py-2 hover:bg-gray-100">
                <div className='flex gap-2 items-center'>
                  <img src='/Symbol (2).png' />
                  <p className='text-[#0A1A2F] capitalize'>instagram</p>
                </div>
                {/* <FaFacebookF /> */}
              </button>
               <button className="flex items-center justify-center bg-[#F5F5F5] rounded-md py-2 hover:bg-gray-100">
                <div className='flex gap-2 items-center'>
                  <img src='/Symbol (3).png' />
                  <p className='text-[#0A1A2F] capitalize'>youtube</p>
                </div>
                {/* <FaFacebookF /> */}
              </button>
               <button className="flex items-center justify-center bg-[#F5F5F5] rounded-md py-2 hover:bg-gray-100">
                <div className='flex gap-2 items-center'>
                  <img src='/Symbol (4).png' />
                  <p className='text-[#0A1A2F] capitalize'>LinkedIn</p>
                </div>
                {/* <FaFacebookF /> */}
              </button>
                <button className="flex items-center justify-center bg-[#F5F5F5] rounded-md py-2 hover:bg-gray-100">
                <div className='flex gap-2 items-center'>
                  <img src='/Symbol (5).png' />
                  <p className='text-[#0A1A2F] capitalize'>Pinterest</p>
                </div>
                {/* <FaFacebookF /> */}
              </button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="hidden md:block bg-[#0F1B2D] text-white p-10 rounded-xl">
            <h3 className="text-lg font-bold mb-5 text-center">Newsletter Giornaliera</h3>
            <p className="text-gray-300 text-sm mb-10 w-60 text-center mx-auto">
              Ricevi tutte le notizie più importanti dal mondo del calcio!
            </p>
            <div className="flex">
          
              <button className="bg-[#FF7A00] w-full py-2 rounded-r-lg hover:bg-orange-600 transition">
                Inserisci la tua e-mail    <span className='ml-4 inline-block'><img src='/Button → SVG.png' className='w-3' /></span>
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 md:py-10 flex gap-8">
      
      {/* Left Column - Popular News */}
      <div className="lg:col-span-2">
        {/* Title */}
         <div className='hidden md:flex items-center'>
              <span className="inline-block bg-[#0F1B2D] text-white px-4 py-1 font-medium transform -skew-x-14">
                <span className="inline-block w-40  transform skew-x-12">Notizie Più Popolari</span>
              </span>

              <div className='border border-gray-300 h-1 w-180' />
            </div>

        {/* News Grid */}
        <div className="hidden md:flex flex-col gap-3 mt-6">
          {/* Big Top News */}
          <div className='flex gap-6'>
          <div className="rounded-lg overflow-hidden bg-gray-800 text-white">
            <img
              src="/Container.png"
              alt="news"
              className="w-full h-full object-contain rounded-lg"
            />
            
          </div>

          <div className="rounded-lg overflow-hidden bg-gray-800 text-white">
            <img
              src="/Container (2).png"
              alt="news"
              className="w-full h-full object-contain rounded-lg "
            />
            
            
          </div>
          </div>

          {/* Small News Grid */}
          <div className='flex gap-2'>
          <div>
            <img
              src="/Container (3).png"
              alt="news"
              className=" w-full h-full object-contain rounded-lg"
            />
            
          </div>

          <div>
            <img
              src="/Container (4).png"
              alt="news"
              className="w-full h-full object-contain rounded-lg"
            />
            
          </div>

          <div>
            <img
              src="/Container (5).png"
              alt="news"
              className=" w-full h-full object-contain rounded-lg"
            />
            
          </div>
        </div>
      </div>
      </div>

      {/* Right Column - Recent Posts */}
      <div>
        
        <div className='hidden md:flex items-center'>
              <span className="inline-block bg-[#0F1B2D] text-white px-4 py-1 font-medium transform -skew-x-14">
                <span className="inline-block w-25  transform skew-x-12">Post Recenti</span>
              </span>

              <div className='border border-gray-300 h-1 w-40' />
            </div>

        <div className="hidden md:block mt-6 space-y-4">
          {["rc_post01.jpg", "Container (6)", "rc_post03.jpg", "rc_post04.jpg", "Link (2)"].map((post, index) => (
            <div key={index} className="flex items-center gap-3">
              <img
                src={`/${post}.png`}
                alt="recent"
                className="w-20 h-16 object-cover rounded-md"
              />
              <div>
                <span className="bg-white border border-gray-300 text-gray-700 px-2 py-0.5 text-xs font-semibold uppercase">
                  SERIE A
                </span>
                <h4 className="font-medium text-sm text-gray-900 mt-1">
                  Derby di Milano: Tutti i Numeri e le Curiosità
                </h4>
                 <div className='flex gap-2 items-center'>
                    <img src="/Vector (15).png" className='w-4'/>
                    <p className="text-xs text-gray-500 mt-1">27 AGOSTO, 2025</p>
                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


        <div className='flex justify-between pr-10 my-10 mx-20 border items-center rounded-[50px] bg-[#0A1A2F]'>
          <img src='/Frame 238059.png' />
          <div className='flex flex-col gap-3'>
            <p className='text-[#E53E3E]  text-[20px] font-bold'>30% Off</p>
            <p className='text-white text-[30px] font-bold w-80'>Compra la Nuova Maglia Ufficiale</p>
          </div>
          <Button text="Buy Now" />
        </div>

        <div className='hidden md:block py-10'>
          <img src='/Section (1).png' />
        </div>

        <div className='hidden md:block p-10'>
          <img src='/Section (2).png' />
        </div>
      <Footer />
    </div>
  )
}

export default Articles
