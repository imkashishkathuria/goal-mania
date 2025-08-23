import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();

  return (
    <div className='flex justify-between px-[70px] py-[20px] bg-[#0A1A2F] items-center'>
        {/* Logo */}
        <img src='/logo.png' alt='logo' className='w-[55px] h-[59px] object-contain cursor-pointer' />
        {/* Navbar */}
        <div className='flex justify-between text-[#FFFFFF] text-[18px] gap-[40px] font-[300]'>
            
            {[
                { name: "home", url:"" },
                { name: "category", url:"" },
                { name: "articles", url:"" },
                { name: "info", url:"" },
                { name: "about", url:"" },
                { name: "contact", url:"contact" },
                { name: "shop", url:"product" }

            ].map((item, index, arr) => (
                <p className='capitalize cursor-pointer hover:text-[#FF7A00]' onClick={()=> navigate(`/${item.url}`)} key={index}>{item.name} </p>
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
            <div className='flex items-center gap-2 px-3 py-2 border border-[#FF7A00] rounded-[40px] cursor-pointer'>
                <p className='font-bold text-[13px] text-[#FFFFFF]'>Login/Sign-up</p>
                <img src='/mdi-light_arrow-up.png' className='w-[13px] h-[14px]' />
            </div>
        </div>

      
    </div>
  )
}

export default Header
