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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-20 py-10 ">
      {/* LEFT: Image + Contact Info */}
      <div className="flex flex-col gap-4">
        <img
          src="/Frame 238054.png"
          alt="Contact person"
          className="rounded-lg object-cover"
        />
        <div className="bg-[#0B1B3B] text-white p-6 rounded-2xl space-y-4">
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
        <h2 className="text-3xl font-extrabold mb-2 text-[#0A1A2F]">Scrivici</h2>
        <p className="text-[#333333] mb-6 text-sm">
          Hai una domanda, un suggerimento o semplicemente vuoi salutarci? 
          Compila il modulo qui sotto e il nostro team ti risponderà al più presto.
        </p>

        <form className="space-y-5">
          {/* Name + Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Nome*"
              className="border-b outline-none p-2 w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Cognome*"
              className="border-b outline-none p-2 w-full"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            className="border-b outline-none p-2 w-[50%]"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="La tua email*"
            className="border-b outline-none p-2 w-full resize-none mt-4"
          />

          {/* Products Checkbox */}
          <div>
            <label className="block mb-2 font-medium text-sm">Products*</label>
            <div className='flex justify-between items-center'>
            <div className="flex gap-6">
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
              <Button text="Spedisci" px="50" py="7" />
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
