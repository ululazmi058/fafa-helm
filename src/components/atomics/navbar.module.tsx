"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, User, ShoppingBag, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({
    products: false,
    about: false,
    language: false,
    currency: false,
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu: string) =>
    setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));

  return (
    <nav className="bg-white text-black shadow-md">
      {/* Red Announcement Bar */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-semibold">
      </div>

      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer hover:scale-165 transition-transform duration-200 ml-15">
            <img
                src="/logo.png" // Ganti dengan path logo Anda
                alt="Logo"
                width={100}
                height={40}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li>
            <Link href="/" className="hover:text-red-500">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-red-500">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/product-service" className="hover:text-red-500">
                OUR THINGS
            </Link>
          </li>
          <li>
            <Link href="/teams" className="hover:text-red-500">
              TEAMS
            </Link>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-center bg-white p-4 shadow-md">
          <li>
            <Link href="/" className="hover:text-red-500">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-red-500">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/product-service" className="hover:text-red-500">
                PRODUCTS & SERVICES
            </Link>
          </li>
          <li>
            <Link href="/teams" className="hover:text-red-500">
              TEAMS
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
