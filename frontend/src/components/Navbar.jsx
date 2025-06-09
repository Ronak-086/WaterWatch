import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Environments", to: "/environments" },
    { name: "Dashboard", to: "/dashboard" },
    { name: "About", to: "/about" }
  ];
const linkClass = (to) => {
  const isActive =
    path === to || (to === "/environments" && path.startsWith("/analytics"));
  return `hover:text-blue-600 ${
    isActive ? "text-blue-700 font-semibold underline underline-offset-4" : "text-gray-700"
  }`;
};

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://i.imghippo.com/files/MTV6870w.png"
            alt="WaterWatch"
            className="h-8 w-8 border-2 rounded-full scale-110"
          />
          <span className="text-xl font-semibold text-blue-700">WaterWatch</span>
        </div>

        <div className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.name}
            </Link>
          ))}
        </div>

        <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-medium flex flex-col">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
