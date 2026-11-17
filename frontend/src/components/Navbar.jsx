
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaCoffee, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F3EB]/95 backdrop-blur-md border-b border-[#E8DFD1]">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#3B261B] text-[#F7F3EB] flex items-center justify-center">
            <FaCoffee size={21} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-[#3B261B] tracking-wide">
              The Cozy Café
            </h1>
            <p className="text-[10px] tracking-[3px] text-[#78866B] uppercase">
              Coffee & Comfort
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition duration-300 ${
                  isActive
                    ? "text-[#78866B]"
                    : "text-[#5B4638] hover:text-[#78866B]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden md:flex items-center gap-2 bg-[#78866B] hover:bg-[#647456] text-white px-6 py-3 rounded-full text-sm font-medium transition duration-300"
        >
          Visit Us 
          <FaArrowRight size={12} />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#3B261B] text-2xl"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#F7F3EB] border-t border-[#E8DFD1] px-6 py-5">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive ? "text-[#78866B]" : "text-[#3B261B]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-[#78866B] text-white text-center py-3 rounded-full"
            >
              Visit Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
