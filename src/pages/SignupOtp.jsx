import React, { useEffect, useState } from 'react'

const SignupOtp = () => {

  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [timeLeft, setTimeLeft] = useState(30); // 30 sec timer

  // Countdown timer
  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Handle OTP input
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Auto focus next
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100">
      <div className="bg-white rounded-3xl shadow-md p-9 md:p-12 w-full md:w-[1000px] text-center">
        {/* Title */}
        <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-6">
          Enter OTP sent to <span className="font-semibold">+39- 77039 *****</span>{" "}
          <button className="text-orange-500 font-medium hover:underline">Edit</button>
        </h2>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-4 mb-6">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              className="w-16 h-20 border border-gray-200 rounded-lg bg-gray-100 text-center text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          ))}
        </div>

        {/* Resend Timer */}
        <p className="text-sm text-gray-500">
          Resend OTP in{" "}
          <span className="font-medium text-gray-700">
            {timeLeft > 0 ? `00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}` : "00:00"}
          </span>
        </p>
      </div>
    </div>
  )
}

export default SignupOtp
