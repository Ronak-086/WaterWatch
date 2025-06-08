import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md  w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="https://i.imghippo.com/files/MTV6870w.png" alt="WaterWatch" className="h-8 w-8 border-2 rounded-full scale-110" />
          <span className="text-xl font-semibold text-blue-700">WaterWatch</span>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#features" className="hover:text-blue-600">Environments</a>
          <a href="#dashboard" className="hover:text-blue-600">Dashboard</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <a href="#home" className="block hover:text-blue-600">Home</a>
          <a href="#features" className="block hover:text-blue-600">Environments</a>
          <a href="#dashboard" className="block hover:text-blue-600">Dashboard</a>
          <a href="#contact" className="block hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
}
