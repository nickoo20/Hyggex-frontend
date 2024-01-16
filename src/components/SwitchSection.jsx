import { useState } from "react"; 
const menu = [
    "Study","Quiz","Test", "Game", "Others"
];
const SwitchSection = () => {
    const [selectedMenu, setSelectedMenu] = useState("Study");
    const clickHandler = (menuItem) => {
      setSelectedMenu(menuItem);
  }
  return (
    <>
            <h1 className="custom leading-[39px] text-[32px] font-bold font-montesserat">Relations and Functions ( Mathematics )</h1>
        <div className="flex justify-center gap-[40px] py-6">
                {menu.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col cursor-pointer hover:bg-gray-100 relative
                    ${selectedMenu === item ? "text-blue-900 font-bold" : ""
                            } `}
                        onClick={() => clickHandler(item)}
                    >
                        <div className="text-sm">{item}</div>
                        {selectedMenu === item && (
                            <div className="h-[2px] w-full absolute bg-[#211ae8] bottom-0" />
                        )}
                    </div>
                ))}
            </div>
    </>
  )
}

export default SwitchSection
