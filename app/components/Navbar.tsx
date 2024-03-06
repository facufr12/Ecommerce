"use client"
import React from 'react'
import Link from 'next/link';
import Zapatillas from '../ui/Zapatillas';
const Navbar = () => {
  return (
    
    <>
 <nav className="bg-gray-600 py-5 m-0 rounded-full">
  <div className="max-w-screen-xl mx-auto px-20">
    <div className="flex justify-between items-center">
      <Link href="/">
        <span className="text-white m-4 font-semibold text-lg cursor-pointer">Home</span>
      </Link>
      <div className="flex items-center">
        <input type="text" placeholder="Buscar productos..." className="m-3 px-10 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:bg-white focus:text-gray-900" />
        <Link href="/zapatillas">
          <span className="text-white ml-6 cursor-pointer" >Zapatillas</span>
        </Link>
        <Link href="/remeras">
          <span className="text-white ml-6 cursor-pointer">Remeras</span>
        </Link>
        <Link href="/buzos">
          <span className="text-white ml-6 cursor-pointer">Buzos</span>
        </Link>
      </div>
    </div>
  </div>
</nav>

  </>

  )
}

export default Navbar