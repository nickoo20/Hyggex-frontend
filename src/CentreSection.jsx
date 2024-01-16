import { AiOutlineBulb } from "react-icons/ai";
import { AiFillSound } from "react-icons/ai";
import { GiClockwiseRotation } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiFullscreenFill } from "react-icons/ri";
const CentreSection = () => {
  return (
    <section id="flashcard">
    <div className="flex flex-col items-center justify-center">
        <div className="text-center customButton w-[712px] h-[393px] rounded-3xl text-white relative">
          <div className="flex justify-between text-3xl p-5 mt-3 px-10">
            <AiOutlineBulb className="cursor-pointer" />
            <AiFillSound className="cursor-pointer"/>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-white absolute top-[192px] transform -translate-x-1 
          font-lato md:text-[38px] leading-[45px] tracking-wider text-[20px]
          ">9 + 6 + 7x - 2x - 3 </div>
          </div>
        </div>
        <div className="flex items-center justify-around py-6 w-[712px]">
          <GiClockwiseRotation className="w-[30px] h-[30px] text-blue-900 cursor-pointer"/>
          <div className="flex justify-center items-center gap-[40px]">
          <IoIosArrowBack className="w-[60px] h-[60px] customButton rounded-full text-white cursor-pointer"/>
            <span className="text-black font-inter text-[24px] leading-[29px]">01/10</span>
          <IoIosArrowForward className="w-[60px] h-[60px] customButton rounded-full text-white cursor-pointer"/>
          </div>
          <RiFullscreenFill className="text-blue-900 w-[30px] h-[30px] cursor-pointer" />
        </div>
      </div>
      </section>
     
  )
}

export default CentreSection
