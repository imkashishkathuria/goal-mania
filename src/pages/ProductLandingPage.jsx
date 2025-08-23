import React, { useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import AddToCartBtn from '../components/AddToCartBtn';
import Button from '../components/Button';
import ProductService from '../components/ProductService';
import Piùvenduti from '../components/Piùvenduti';
import Footer from '../components/Footer';

const ProductLandingPage = () => {

  const image = useParams();
  console.log(image.id);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [activeTab, setActiveTab] = useState("reviews");

  const sizes = ["Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large"];


  const images = [
    "/Frame 238015 (1).png",
    "/Frame 238016 (3).png",
    "/Frame 238017 (1).png",
    "/Frame 238018.png",
  ];

  const reviews = [
    {
      name: "Samantha D.",
      date: "August 14, 2023",
      rating: 5,
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    },
    {
      name: "Alex M.",
      date: "August 15, 2023",
      rating: 5,
      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    },
    {
      name: "Ethan R.",
      date: "August 16, 2023",
      rating: 5,
      text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    },
    {
      name: "Olivia P.",
      date: "August 17, 2023",
      rating: 5,
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    },
    {
      name: "Liam K.",
      date: "August 18, 2023",
      rating: 5,
      text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    },
    {
      name: "Ava H.",
      date: "August 19, 2023",
      rating: 4,
      text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this t-shirt a conversation starter.",
    },
  ];



  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 gap-6 px-7 py-6 ">
        <div className='col-span-2 flex flex-col gap-3 items-center'>
          <img src='/weui_arrow-outlined (1).png' />
          <div className="flex-1 overflow-y-auto">
            {images.map((src, index) => (
              <div
                key={index}
                className={`w-full ${index !== images.length - 1 ? "mb-2" : ""
                  } bg-white rounded-lg`}
              >
                <img
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="w-full h-auto object-cover cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-5 flex">
          <img src={`/${image.id}`} alt="Main Product" className="w-[500px] h-[750px] object-contain -mt-23" />
        </div>

        <div className=" col-span-5 mt-6">
          {/* Title & Price */}
          <h2 className="text-[25px] font-extrabold text-[#000000]">
            One Life Graphic T-shirt
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[25px] font-extrabold text-[#000000]">$260</span>
            <span className="text-[25px] text-[#0000004D]">$300</span>
            <span className="text-[#E53E3E] font-medium">-40%</span>
            <img src='/Frame 11.png' className='object-contain' />
          </div>
          <p className="text-[#00000099] text-[15px] mt-2">
            This graphic t-shirt which is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr className='w-[400px] h-[2px] mt-5 text-[#b1b1b199] mb-4' />

          {/* Customize */}
          <h3 className=" font-semibold text-[#FF7A00]">
            Customize Your Jersey
          </h3>
          <p className='text-[14px] text-[#333333] mt-4'>Jersey Type</p>

          {/* Jersey Type */}
          <div className="flex gap-4 mt-3">
            <div className='flex gap-2 items-center'>
              <div className='w-[14px] h-[14px] bg-[#D9D9D9] rounded-full' />
              <p>
                Fan Edition
              </p>
            </div>
            <div className='flex gap-2 items-center'>
              <img src='/Ellipse 45.png' className='w-[14px] h-[14px]' />
              <p>
                Player Edition (+€5)
              </p>
            </div>
          </div>
          <hr className='w-[400px] h-[2px] mt-5 text-[#b1b1b199] mb-4' />

          {/* Input Fields */}
          <div className="flex gap-3 mt-4">
            <input
              type="text"
              placeholder="Type here your name on shirt..."
              className="flex-1 px-3 py-2 border-b border-[#333333] outline-none"
            />
            <input
              type="text"
              placeholder="Type here your number on shirt..."
              className="flex-1 border-b border-[#333333]  px-3 py-2 outline-none"
            />
          </div>

          {/* Patches */}
          <h4 className="mt-6 font-semibold text-[#0A1A2F]">Add Official Patches</h4>
          <div className='flex justify-between items-center'>
            <div className="flex gap-3 mt-3">
              {["Ellipse 45 (1)", "image 1 (1)", "Ellipse 45 (2)", "image 2", "Ellipse 45 (2)", "image 3"].map((item, index) => (
                <img key={index} src={`/${item}.png`} className='object-contain w-[16px] h-[16px] rounded-full' />
              ))}
            </div>
            <div className='flex gap-3 mt-2'>
              <div className='flex gap-1 items-center'>
                <img src='/Ellipse 45.png' className='w-[14px] h-[14px]' />
                <p className='text-[14px]'>
                  Small
                </p>
              </div>
              {["Medium", "Large", "Large", "Kids"].map((item, index) => (
                <div className='flex gap-1 items-center'>
                  <div key={index} className='w-[14px] h-[14px] bg-[#D9D9D9] rounded-full' />
                  <p className='text-[14px]'>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <h4 className="mt-6 font-semibold text-[#0A1A2F]">Add Matching Items</h4>
          <div className="flex gap-4 mt-3">
            <div className='flex gap-2 items-center'>
              <div className='w-[14px] h-[14px] bg-[#D9D9D9] rounded-full' />
              <p>Add Matching Shorts (+€11)</p>
            </div>
            <div className='flex gap-2 items-center'>
              <img src='/Ellipse 45.png' className='w-[14px] h-[14px]' />
              <p>Add Matching Socks (+€17)</p>
            </div>
          </div>

          {/* Sizes */}
          <h4 className="mt-6 font-semibold text-[#0A1A2F]">Choose Size</h4>
          <div className="flex gap-2 flex-wrap mt-3">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 rounded-full cursor-pointer ${selectedSize === size
                  ? "border-black bg-[#0A1A2F] text-[#F0F0F0]"
                  : "bg-[#F0F0F0]"
                  }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quantity & Buttons */}
          <div className="flex items-center gap-4 mt-6 mb-10">
            <div className="flex items-center bg-[#F0F0F0] rounded-full">
              <button
                className="px-3 py-2"
              >
                −
              </button>
              <span className="px-2">{quantity}</span>
              <button
                className="px-3 py-2"
              >
                +
              </button>
            </div>

            <AddToCartBtn px="10" py="8" />
            <Button text="Buy Now" px="30" py="8" />
            <img src='/Vector (8).png' />
          </div>
        </div>

      </div>
      <ProductService bgColor="#0A1A2F" textcolor="#F5F5F5" img1="Frame (2)" img2="Frame (3)" img3="Vector (9)" img4="Frame (4)" />


      <div className="px-20 py-10">
        {/* Tabs */}
        <div className="flex justify-between border-b border-[#0000001A] px-30">
          {["Dettagli prodotto", "Valutazioni e recensioni", "Domande frequenti"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-md font-medium ${activeTab === tab
                  ? "border-b-2 border-black text-[#0A1A2F]"
                  : "text-gray-500"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mt-6">
          <h3 className="text-lg text-[#0A1A2] font-semibold">
            All Reviews <span className="text-gray-500">(451)</span>
          </h3>
          <div className="flex gap-3">
            <select className="rounded-full bg-[#F5F5F5] outline-none pl-4 py-2 text-sm">
              <option>Latest</option>
              <option>Oldest</option>
              <option>Highest Rated</option>
              <option>Lowest Rated</option>
            </select>
            <button className="px-5 py-2 bg-[#333333] text-[#FFFFFF] rounded-full hover:bg-gray-800 text-sm">
              Write a Review
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-10">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="border border-[#0000001A] rounded-xl p-5 bg-white shadow-sm flex flex-col gap-2"
            >
              {/* Stars */}
              <div className='flex justify-between items-center'>

              <div className="flex text-yellow-500">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <img src='/Frame (5).png' className='w-[14px] object-contain'/>
              </div>
              {/* Name + Verified */}
              <div className="flex items-center gap-2 font-semibold">
                {review.name}
                <img src='/Vector (10).png' className='w-[17px] h-[17px] rounded-full' />
              </div>
              {/* Review Text */}
              <p className="text-[#333333] text-sm">{review.text}</p>
              {/* Date */}
              <span className="text-xs text-[#333333]">
                Posted on {review.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Piùvenduti />
      <Footer />

    </div>
  )
}

export default ProductLandingPage
