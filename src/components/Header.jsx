
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  const navItems = [
    { name: "home", url: "" },
    {
      name: "category",
      url: "",
      dropdown: [
        { name: "Serie A", url: "category/seriea" },
        { name: "Premier League", url: "category/premier-league" },
        { name: "La Liga al momento", url: "category/laliga" },
        { name: "Ligue 1", url: "category/ligue1" },
        { name: "Champions League", url: "category/champions-league" },
        { name: "Transfer", url: "category/transfer" },
        { name: "Fantacalcio", url: "category/fantacalcio" },
        { name: "Colpo di Mercato", url: "category/colpo-di-mercato" },
      ],
    },
    { name: "articles", url: "articles" },
    { name: "info", url: "" },
    { name: "about", url: "" },
    { name: "contact", url: "contact" },
    { name: "shop", url: "product" },
  ];

  return (
    <div className="flex justify-between px-[20px] md:px-[70px] py-[20px] bg-[#0A1A2F] items-center">
      <div className="flex md:hidden w-full justify-between items-center">
        <div className="flex gap-2 items-center">

          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <img
                src="/Vector (13).png"
                className="object-contain w-5 h-4 "
              />
            )}
          </button>

          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="logo"
              className="w-[50px] h-[55px] object-contain cursor-pointer"
              onClick={() => navigate("/")}
            />
            <img src="/GoalMania.png" />
          </div>
        </div>

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

   
      <div className="hidden md:flex justify-between w-full items-center">
        
        <img
          src="/logo.png"
          alt="logo"
          className="w-[55px] h-[59px] object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />

   
        <div className="flex justify-between text-[#FFFFFF] text-[18px] gap-[40px] font-[300] relative">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
     
              <p
                className="capitalize cursor-pointer hover:text-[#FF7A00]"
                onClick={() => {
                  if (item.dropdown) {
                    setOpenCategory((prev) => !prev); 
                  } else {
                    navigate(`/${item.url}`);
                  }
                }}
              >
                {item.name}
              </p>

              {item.dropdown && openCategory && (
                <div className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg z-50">
                  <ul className="flex flex-col text-black text-[16px]">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#FF7A00]"
                        onClick={() => {
                          navigate(`/${subItem.url}`);
                          setOpenCategory(false); 
                        }}
                      >
                        {subItem.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between gap-[15px] items-center">
          <div className="flex gap-2 items-center bg-white px-3 py-2 rounded-full cursor-pointer">
            <img
              src="/material-symbols-light_language.png"
              className="w-[15px] h-[15px] "
            />
            <p>Italian</p>
            <img
              src="/weui_arrow-outlined.png"
              className="w-[13px] h-[10px]"
            />
          </div>
          <img
            src="/mdi-light_heart.png"
            className="w-[33px] h-[24px] cursor-pointer"
          />
          <img
            src="/bi_cart.png"
            className="w-[28px] h-[28px] cursor-pointer"
          />
          <div
            className="flex items-center gap-2 px-3 py-2 border border-[#FF7A00] rounded-[40px] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            <p className="font-bold text-[13px] text-[#FFFFFF]">
              Login/Sign-up
            </p>
            <img
              src="/mdi-light_arrow-up.png"
              className="w-[13px] h-[14px]"
            />
          </div>
        </div>
      </div>


      {mobileMenu && (
        <div className="absolute top-[65px] left-0 z-50 w-full bg-[#0A1A2F] text-white flex flex-col gap-4 px-6 py-4 md:hidden">
          {navItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <p
                className="capitalize cursor-pointer hover:text-[#FF7A00]"
                onClick={() => {
                  if (item.dropdown) {
                    setOpenCategory((prev) => !prev); 
                  } else {
                    navigate(`/${item.url}`);
                    setMobileMenu(false);
                  }
                }}
              >
                {item.name}
              </p>


              {item.dropdown && openCategory && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <p
                      key={subIndex}
                      className="cursor-pointer hover:text-[#FF7A00]"
                      onClick={() => {
                        navigate(`/${subItem.url}`);
                        setMobileMenu(false);
                        setOpenCategory(false);
                      }}
                    >
                      {subItem.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
