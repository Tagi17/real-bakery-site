'use client';

import { useState } from "react";

const Order = () => {
  const [isTouched, setIsTouched] = useState<string | null>(null);

  // Function to handle touch for mobile devices
  const handleTouch = (id: string) => {
    setIsTouched(id);
    // Remove the message after a delay
    setTimeout(() => {
      setIsTouched(null);
    }, 2000);
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-soft-pink mb-6 mt-20 shadow-lg">
        Order
      </h1>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-3xl text-center mt-20 italic">
          We offer a limited number of cookies each week. Only shipping to the US.
          Once sold out, please visit us again next week for new order
          opportunities. Thank you for your support!
        </div>

        {/* First item */}
        <div
          className="relative text-center mt-20 mb-4 mx-auto p-4 max-w-2xl cursor-pointer group"
          onTouchStart={() => handleTouch('item1')}
        >
          <div className="text-4xl mb-4 transition-colors duration-300 ease-in-out group-hover:text-gray-500">
            Harmonie Du Temp Chocolate Chip Cookie
          </div>
          <div className="text-xl transition-colors duration-300 ease-in-out group-hover:text-gray-500">
            This refined chocolate chip cookie is crafted with brown butter and
            premium chocolate. It&apos;s rested for two days to enhance its
            flavors and is topped with fleur de sel for the perfect bite.
          </div>
          {isTouched === 'item1' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl">
              Coming Soon
            </div>
          )}
          <div className="hidden absolute inset-0 items-center justify-center bg-black bg-opacity-50 text-white text-2xl group-hover:flex">
            Coming Soon
          </div>
        </div>

        {/* Second item */}
        <div
          className="relative text-center mt-20 mb-4 mx-auto p-4 max-w-2xl cursor-pointer group"
          onTouchStart={() => handleTouch('item2')}
        >
          <div className="text-4xl mb-4 transition-colors duration-300 ease-in-out group-hover:text-gray-500">
            Summer Delight Cookie Box
          </div>
          <div className="mb-20 text-xl transition-colors duration-300 ease-in-out group-hover:text-gray-500">
            Immerse yourself in the essence of summer with each bite from our
            limited-time cookie collection. These flavors are crafted to whisk
            you away to sun-kissed days and carefree moments:
          </div>
          {isTouched === 'item2' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl">
              Coming Soon
            </div>
          )}
          <div className="hidden absolute inset-0 items-center justify-center bg-black bg-opacity-50 text-white text-2xl group-hover:flex">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
};
export default Order;
