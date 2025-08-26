import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const [loginState, setLoginState] = useState(true); // true = login, false = signup

  return (
    <div>
      <div className='md:hidden'>
        <Header />
      </div>
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row items-center md:justify-between md:py-10 md:px-20">
        {/* LEFT IMAGE */}
        <div className="flex-1 flex items-center justify-center md:w-1/2 p-4 md:p-0">
          <img
            src="/Mask group (5).png"
            alt="Logo"
            className="object-contain"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="rounded-2xl flex flex-col gap-5 md:flex-row overflow-hidden md:w-1/2">
          <div className="flex-1 p-4 md:p-8 gap-5 flex flex-col justify-center">
            
            {/* TITLE */}
            <h2 className="text-[40px] md:text-[45px] font-bold text-[#000000]">
              {loginState ? "Accedi" : "Crea account"}
            </h2>

            <p className="text-[#131228] text-[16px]">
              {loginState
                ? "Inserisci il numero di cellulare (most common)"
                : ""}
            </p>

            <form className="space-y-5">
              {/* Phone Input */}
              <div className="flex items-center border-b-2 border-gray-600 pb-2 text-[20px]">
                <span className="mr-2 text-black ">+39</span>
                <input
                  type="tel"
                  placeholder="  |    XXXX XXXXX"
                  className="flex-1 outline-none"
                  required
                />
              </div>
               {/* Checkbox */}
              <label className="flex items-center gap-2 text-[#888888] text-sm mb-10">
                <input type="checkbox" />
                Avvisami su ordini, offerte e aggiornamenti
              </label>

              {/* Extra fields only in Signup */}
              {!loginState && (
                <>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-b-2 border-gray-600 pb-2 outline-none text-[19px] mb-10"
                    required
                  />
                  <div className="flex gap-3 mb-10">
                    <select className="border rounded-full px-4 py-3 w-[180px] outline-none">
                      <option>Italy</option>
                      <option>USA</option>
                      <option>India</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Pin Code"
                      className="w-full border-b-2 border-gray-600 pb-2 outline-none text-[19px]"
                      required
                    />
                  </div>
                </>
              )}

             

              {/* Primary Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-medium transition"
              >
                {loginState ? "Spedisci →" : "Crea account →"}
              </button>

              <p className="text-[10px] md:text-xs text-[#888888]">
                Leggi l'informativa sulla <span className="text-blue-600">privacy</span> e i termini e <span className="text-blue-600">condizioni</span> 
              </p>

              {/* Toggle Button */}
              <button
                type="button"
                className="w-full border border-black py-3 rounded-full font-medium hover:bg-gray-50 transition"
                onClick={() => setLoginState(!loginState)}
              >
                {loginState ? "Crea account →" : "Spedisci →"}
              </button>

              <p className="text-[10px] text-xs text-[#888888]">
                Leggi l'informativa sulla privacy e i Termini e Condizioni.
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <Footer />
      </div>
    </div>
  )
}

export default Login
