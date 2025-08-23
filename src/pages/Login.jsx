import React, { useState } from 'react'

const Login = () => {

  const [loginState, signup] = useState("Crea account →")
  return (
    <div>
      <div className="flex items-center justify-between py-10 px-20">
        <div className="flex-1 flex items-center justify-center w-1/2">
          <img
            src="/Mask group (5).png"
            alt="Logo"
            className="object-contain"
          />
        </div>
      <div className="rounded-2xl flex flex-col gap-5 md:flex-row overflow-hidden w-1/2">
        {/* RIGHT: Login Form */}
        <div className="flex-1 p-8 gap-5 flex flex-col justify-center">
          <h2 className="text-[40px] font-bold text-[#000000]">Accedi</h2>
          <p className="text-[#131228]  text-[16px]">
            Inserisci il numero di cellulare (most common)
          </p>

          <form className="space-y-5">
            {/* Phone Input */}
            <div className="flex items-center border-b pb-2">
              <span className="mr-2 text-gray-600">+39</span>
              <input
                type="tel"
                placeholder="XXXX XXXXX"
                
                className="flex-1 outline-none"
                required
              />
            </div>

            {/* Subscribe Checkbox */}
            <label className="flex items-center gap-2 text-[#888888] text-sm">
              <input
                type="checkbox"
                
              />
              Avvisami su ordini, offerte e aggiornamenti
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-medium transition"
            >
              Spedisci →
            </button>

            <p className="text-xs text-[#888888]">
              Leggi l'informativa sulla privacy e i termini e condizioni
            </p>

            {/* Create Account Button */}
            <button
              type="button"
              className="w-full border border-gray-300 py-3 rounded-full font-medium hover:bg-gray-50 transition"
            >
             {login}
            </button>

            <p className="text-xs text-[#888888] ">
              Leggi l'informativa sulla privacy e i Termini e Condizioni.
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
