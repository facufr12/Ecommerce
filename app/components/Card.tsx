import React from 'react'
import LETRAFNUVO from "../assets/LETRAFNUVO.png"
import Image from 'next/image';

const Card = ({ image, name, description, price }) => {
  return (
    <div className="bg-gray-600 max-w-sm  overflow-hidden shadow-lg rounded-3xl ">
      <Image src={LETRAFNUVO} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-white text-xl mb-6">Adidas Ozweego</div>
        <p className="text-white text-base">Zapatillas de la mas alta calidad de adidas</p>
        <p className="text-white text-xl mt-4 mb-3">$120.000</p>
      </div>
    </div>
  );
};

  
export default Card