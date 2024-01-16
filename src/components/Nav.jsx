import rectangle from '../assets/rectangle.png' ;

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#flashcard", label: "Flashcard" },
    { href: "#contact", label: "Contact" },
    { href: "#faq", label: "FAQ" },
  ];
const Nav = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-1'>
            <img src={rectangle} alt='Logo' width={191} height={39} />
            {/* <span className='text-blue-900 text-lg font-montserrat'>Hygeex</span> */}
        </div>
        <div>
        <div className='flex gap-[40px] items-center' >
            {
                navLinks.map((item)=>(
                    <span key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-sm font-normal'>
                        {item.label}
                        </a>
                    </span>
                ))
            }
            <button className='customButton rounded-full text-white px-9 py-2'>Login</button>
        </div>
        </div>
        
    </div>
  )
}

export default Nav
