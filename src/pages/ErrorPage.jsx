import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center px-3 py-10 md:py-20 md:pl-20 md:pr-10 bg-white">
        {/* Left Section */}
        <div className="flex flex-col md:items-start md:text-left md:w-1/2">
          <h1 className="text-[55px] text-center md:text-left font-bold text-black mb-3">Ops!</h1>
          <p className="text-[#333333] text-center md:text-left text-[20px] font-[500] md:w-[350px] mb-6">
            Non siamo riusciti a trovare la pagina che stavi cercando
          </p>
          <a
            href="/"
            className="hidden md:block bg-[#FF7A00] text-[#0A1A2F] px-6 py-3 rounded-full font-medium shadow-md transition"
          >
            Torna alla home →
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/Group 237897.png" // replace with your image path
            alt="Not Found"
            className="max-w-xs md:max-w-md"
          />
        </div>
        <a
            href="/"
            className="md:hidden mt-10  bg-[#FF7A00] text-[#0A1A2F] px-6 py-3 rounded-full font-medium shadow-md transition"
          >Torna alla home →  </a>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage
