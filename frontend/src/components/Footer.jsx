import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <img src="https://i.imghippo.com/files/MTV6870w.png" alt="WaterWatch" className="h-8 w-8" />
            <span className="text-xl font-bold text-blue-700">WaterWatch</span>
          </div>
          <p className="text-sm">
            A community-driven water quality monitoring platform designed to empower, protect, and inform.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
          <li><a href="#features" className="hover:text-blue-600">Home</a></li>
            <li><a href="#features" className="hover:text-blue-600">Environments</a></li>
            <li><a href="#dashboard" className="hover:text-blue-600">Dashboard</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-700"><Facebook /></a>
            <a href="#" className="hover:text-blue-700"><Twitter /></a>
            <a href="#" className="hover:text-blue-700"><Instagram /></a>
            <a href="https://github.com/Ronak-086/River-Health-Monitoring-Intervention" className="hover:text-blue-700"><Github /></a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} WaterWatch | Made with 💧 by Team Kela
      </div>
    </footer>
  );
}
