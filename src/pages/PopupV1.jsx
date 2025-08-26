import React, { useState } from 'react'
import { X } from "lucide-react"; 

const PopupV1 = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;
  return (
    <div className="md:fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white px-8 rounded-2xl shadow-lg w-[90%] md:w-[900px] overflow-hidden flex flex-col md:flex-row relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 bg-black text-white p-2 rounded-full"
        >
          <X size={16} />
        </button>

        {/* Left Content */}
        <div className="flex-1 md:p-8 flex flex-col justify-center">
          <div className="flex justify-center items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-35 h-35 object-contain" />
            {/* replace with your logo */}
          </div>

          <h2 className=" md:text-[40px] text-center font-bold text-[#131228]">
            Offerta a Tempo Limitato
          </h2>
          <p className="text-gray-500 text-center text-lg mb-4">Maglia da Calcio Ufficiale</p>

          <div className="flex flex-col md:flex-row items-center gap-3 text-lg mb-4">
            <span className="text-black text-[20px]">A soli</span>
            <span className="text-orange-500 font-bold text-2xl">30€</span>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-2 rounded-full font-medium transition">
              Compra Ora →
            </button>
          </div>

          {/* Reviews */}
          <div className="text-xl text-black text-center flex flex-col">
            <span>2,5k reviews 4.9</span>
            <div className="flex text-yellow-400 justify-center mt-2 text-2xl">★★★★★</div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/Image Remplace.png" // replace with your product image
            alt="Product"
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default PopupV1
