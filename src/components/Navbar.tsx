import { useState } from 'react';
import decor from '../assets/images/Decore.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, context: "Destinations", href: "/" },
    { id: 2, context: "Hotels", href: "/" },
    { id: 3, context: "Flights", href: "/" },
    { id: 4, context: "Bookings", href: "/" },
  ];

  return (
    <nav className="lg:px-20 px-6 relative z-10">
      <img 
        className="hidden lg:flex lg:absolute top-0 right-0 w-auto z-0 pointer-events-none" 
        src={decor} 
        alt="decor" 
        aria-label="decor" 
      />

      <div className="flex items-center justify-between h-[100px] relative z-10">
        <div>
          <h1 className="text-[40px] font-bold text-[#5E6282]">Jadoo</h1>
        </div>

        <div className="lg:flex hidden items-center gap-20">
          <ul className="flex gap-10">
            {links.map((l) => (
              <li key={l.id}>
                <a className='transition-all duration-[1s] hover:text-[#FF9500]' href={l.href}>{l.context}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <a href="/" className="list-none transition-all duration-[1s] hover:text-[#FF9500]">Login</a>
            <button className="px-4 border h-[40px] transition-all duration-[1s] hover:text-white hover:bg-[#FF9500]">Sign up</button>
          </div>
        </div>

        {/* Hamburger icon */}
        <div 
          className="lg:hidden flex flex-col gap-1 cursor-pointer z-20" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="w-7 h-1 bg-[#DF6951]"></div>
          ))}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white px-6 py-4 rounded-b-xl shadow-md`}
      >
        <ul className="flex flex-col gap-4 text-[#5E6282] font-medium">
          {links.map((l) => (
            <li key={l.id}>
              <a href={l.href}>{l.context}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 mt-4">
          <a href="/" className="text-[#5E6282]">Login</a>
          <button className="px-4 py-2 border w-fit">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
