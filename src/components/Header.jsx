import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react';

const Header = () => {

  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className='flex justify-between px-[20px] md:px-[70px] py-[20px] bg-black md:bg-[#0A1A2F] items-center'>

      {/* MOBILE: Hamburger + Logo + Icons */}
      <div className="flex md:hidden w-full justify-between items-center ">
        <div className='flex gap-2 items-center'>
          {/* Hamburger */}
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <img src='/Vector (13).png' className="object-contain w-5 h-4 " />
          )}
        </button>

        {/* Logo */}
        <div className='flex items-center'>
          <img src='/logo.png' alt='logo' className='w-[50px] h-[55px] object-contain cursor-pointer' />
          <img src="/GoalMania.png"  />
        </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-1">
          <img
            src="/Frame (8).png"
            className="cursor-pointer"
            onClick={() => navigate("/cart")}
          />
          <img
            src="/Frame 29.png"
            className="cursor-pointer"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>

      {/* DESKTOP: Full Navbar */}
      <div className="hidden md:flex justify-between w-full items-center">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="logo"
          className="w-[55px] h-[59px] object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />
        {/* Navbar */}
        <div className='flex justify-between text-[#FFFFFF] text-[18px] gap-[40px] font-[300]'>

          {[
            { name: "home", url: "" },
            { name: "category", url: "seriea" },
            { name: "articles", url: "" },
            { name: "info", url: "" },
            { name: "about", url: "" },
            { name: "contact", url: "contact" },
            { name: "shop", url: "product" }

          ].map((item, index, arr) => (
            <p className='capitalize cursor-pointer hover:text-[#FF7A00]' onClick={() => navigate(`/${item.url}`)} key={index}>{item.name} </p>
          ))}
        </div>

        {/* login */}
        <div className='flex justify-between gap-[15px] items-center'>
          <div className='flex gap-2 items-center bg-white px-3 py-2 rounded-full cursor-pointer'>
            <img src="/material-symbols-light_language.png" className='w-[15px] h-[15px] ' />
            <p>Italian</p>
            <img src='/weui_arrow-outlined.png' className='w-[13px] h-[10px]' />
          </div>
          <img src='/mdi-light_heart.png' className='w-[33px] h-[24px] cursor-pointer' />
          <img src='/bi_cart.png' className='w-[28px] h-[28px] cursor-pointer' />
          <div className='flex items-center gap-2 px-3 py-2 border border-[#FF7A00] rounded-[40px] cursor-pointer' onClick={() => navigate("/login")}>
            <p className='font-bold text-[13px] text-[#FFFFFF]'>Login/Sign-up</p>
            <img src='/mdi-light_arrow-up.png' className='w-[13px] h-[14px]' />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenu && (
        <div className="absolute top-[65px] left-0 w-full bg-[#0A1A2F] text-white flex flex-col gap-4 px-6 py-4 md:hidden">
          {[
            { name: "home", url: "" },
            { name: "category", url: "" },
            { name: "articles", url: "" },
            { name: "info", url: "" },
            { name: "about", url: "" },
            { name: "contact", url: "contact" },
            { name: "shop", url: "product" },
          ].map((item, index) => (
            <p
              key={index}
              className="capitalize cursor-pointer hover:text-[#FF7A00]"
              onClick={() => {
                navigate(`/${item.url}`);
                setMobileMenu(false);
              }}
            >
              {item.name}
            </p>
          ))}
        </div>
      )}


    </div>
  )
}

export default Header
