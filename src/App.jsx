import Nav from "./components/Nav"
import HomeSection from "./components/HomeSection";
import SwitchSection from "./components/SwitchSection";
import CentreSection from "./CentreSection";
import CreateSection from "./components/CreateSection";
import {data} from '../Constants.jsx';
import { FaChevronDown } from "react-icons/fa";


const App = () => {

  return (
    <main className=" px-12 py-6 ml-10 text-[#696671] mr-14">
      <Nav />
      <HomeSection />
      <SwitchSection />
      <CentreSection />
      <CreateSection />
      <section id="faq" className="py-20 mb-7">
        <h1 className="font-inter text-[48px]
      leading-[58px] custom tracking-[0.005em] font-bold">FAQ</h1>
        <div className="flex flex-col mt-3 gap-[40px] w-[800px]">
        {
                data.map((item,index)=>(
                    <div className="text-[#28262C] flex justify-between items-center border rounded-[12px] border-blue-500 p-3">
                        <div key={index} className='text-[16px] font-inter leading-normal text-sm font-semibold py-3'>
                        {item}
                        </div>
                        <FaChevronDown className="w-[24px]"/>
                    </div>
                ))
            }
        </div>
      </section>
    </main>
  )
}

export default App
