import React from 'react'
import { FaPlus } from "react-icons/fa6";
import logo from '../assets/logo.png';
import name from '../assets/name.png'

const CreateSection = () => {
  return (
    <div className="flex flex-col justify-between items-center md:flex-row py-12">
        <div className="flex items-center gap-[10px]">
        <img src={logo} width={80} height={80} />
        <div className="flex flex-col">
          <span className="font-inter font-bold text-[12px] leading-4">Published By</span>
          {/* <span className="text-blue-900 text-[17px]">Hygge */}
          {/* <span className="text-2xl font-bold text-[22px]">X</span></span>  */}
          <img src={name} width={115} height={34}/>
        </div>

      </div>
        <div></div>
        <div className="flex items-center gap-[8px]">
          <div><FaPlus className=" text-white rounded-full customButton w-[50px] h-[50px] cursor-pointer"/></div>
          <div className="font-inter font-semibold text-[28px] leading-[33px] custom">Create FlashCard</div>
        </div>
      </div>
  )
}

export default CreateSection
