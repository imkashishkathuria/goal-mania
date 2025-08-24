import React from 'react'
import { useState } from "react";
import Header from '../components/Header'
import Button from '../components/Button';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';

const Contact = () => {

  return (
    <div>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:px-20 md:py-10 ">
        {/* LEFT: Image + Contact Info */}
        <div className="flex flex-col gap-4">
          <img
            src="/Frame 238054.png"
            alt="Contact person"
            className="hidden md:block rounded-lg object-cover"
          />
          <img src='/Frame 238100.png' className='md:hidden w-full object-contain' />
          <div className="hidden md:flex bg-[#0B1B3B] text-white p-6 rounded-2xl space-y-4">
            <p className="flex items-center gap-3">
              <img src='/Vector (11).png' /> +39 090 330 47732
            </p>
            <p className="flex items-center gap-3">
              <img src='/Vector (12).png' /> safe.support@goal-mania.it
            </p>
            <p className="flex items-center gap-3 text-sm">
              <img src='\Frame (6).png' /> 3° Piano, Via Roma 245, Complesso i-Hub, di fronte a
              PRL, Centro, Milano, Lombardia 20100
            </p>
            <p className="flex items-center gap-3">
              <img src='/Frame (7).png' />Get Direction
            </p>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div>
          <h2 className="hidden md:flex text-3xl font-extrabold mb-2 text-[#0A1A2F]">Scrivici</h2>
          <p className="hidden md:block text-[#333333] mb-6 text-sm">
            Hai una domanda, un suggerimento o semplicemente vuoi salutarci?
            Compila il modulo qui sotto e il nostro team ti risponderà al più presto.
          </p>

          <form className="space-y-5 px-5 md:px-0">
            {/* Name + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Nome*"
                className="border-b outline-none p-2 w-full text-[24px] md:text-[16px]"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Cognome*"
                className="border-b outline-none p-2 w-full text-[24px] md:text-[16px]"
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              className="border-b outline-none p-2 mb-20 mt-4 md:mt-0 md:mb-0 w-full md:w-[50%] text-[24px] md:text-[16px]"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="La tua email*"
              className="border-b outline-none p-2 w-full resize-none mt-4 text-[24px] md:text-[16px]"
            />

            {/* Products Checkbox */}
            <div>
              <label className="block mb-2 font-medium text-xl md:text-sm">Products*</label>
              <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                <div className="flex gap-6 text-xl md:text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="News"
                    />
                    News
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Products"
                    />
                    Products
                  </label>
                </div>
                <div className='hidden md:block'>
                  <Button text="Spedisci" px="50" py="7" />
                </div>
                <div className='md:hidden py-7'>
                  <button className='bg-[#FF7A00] rounded-[30px] text-[#0A1A2F] px-[25px] py-[7px] text-[14px]'>
                    <div className='flex gap-2 items-center cursor-pointer'>
                      <p>Spedisci</p>
                      <img src='/mdi-light_arrow-up (1).png' className='w-[10px] h-[10px] md:w-[13px] md:h-[14px]' />
                    </div>
                  </button>
                </div>
                <div className='md:hidden py-7'>
                  <img src='/Frame 80.png' className='w-full object-contain' />
                </div>

              </div>
            </div>

            {/* Submit */}

          </form>
        </div>
      </div>
      <FAQs />
      <Footer />
    </div>
  )
}

export default Contact
