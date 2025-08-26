import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const PopupV2 = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 56,
    seconds: 28,
  });

  // Countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) days -= 1;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] md:w-[900px] overflow-hidden flex relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* Left Image */}
        <div className="flex-1 flex items-center justify-center py-3">
          <img
            src="/Image Remplace (1).png" // replace with product image
            alt="Product"
            className="max-h-[350px]"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 p-8 flex flex-col justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#170F49] mb-2">
            Spedizione Gratuita 🔥
          </h2>
          <p className="text-gray-500 mb-6">ASSICURATI IL TUO POSTO</p>

          {/* Countdown */}
          <div className="flex justify-center  gap-3 mb-6">
            {[
              { label: "Giorni", value: timeLeft.days },
              { label: "Ore", value: timeLeft.hours },
              { label: "Minuti", value: timeLeft.minutes },
              { label: "Secondi", value: timeLeft.seconds },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-md px-4 py-3 text-center shadow-sm"
              >
                <div className="text-[#FF7A00] font-bold text-xl">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-gray-500 text-xs">{item.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-[#FF7A00] text-white px-10 py-3 rounded-full font-medium transition w-fit mx-auto">
            Compra Ora →
          </button>

          {/* Reviews */}
          <div className="mt-4 text-sm text-black">
            <p>2,5k reviews 4.9</p>
            <div className="flex justify-center text-yellow-400 text-lg">
              ★★★★★
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupV2
