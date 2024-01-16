import { CiHome } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <div className="flex text-sm items-center py-10">
      <a href="/">
        <CiHome className="cursor-pointer w-[30px] h-[30px]" />
      </a>
      <IoIosArrowForward className="cursor-pointer text-blue-900 w-[24px] h-[24px]" />
      <span className="text-[18px] font-inter leading-[21px]">Flashcard</span>
      <IoIosArrowForward className="cursor-pointer text-blue-900 w-[24px] h-[24px]" />
      <span className="text-[18px] font-inter leading-[21px]">Mathematics</span>
      <IoIosArrowForward className="cursor-pointer text-blue-900 w-[24px] h-[24px]" />
      <span className="text-blue-800 font-bold text-[18px] font-inter leading-[18px]">Relation and Function</span>
    </div>
  )
}

export default HomeSection
