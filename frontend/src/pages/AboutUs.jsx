import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6 animate-fade-in">
            Redefining Water Safety,<br />One Drop at a Time.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in delay-200">
            WaterWatch is a real-time water monitoring platform that bridges tech and sustainability to protect water bodies and empower communities.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <h2 className="text-4xl font-bold text-blue-800">🌍 Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            To ensure every water source is safe and sustainable through real-time monitoring, predictive analysis, and data-driven action. We're building a world where clean water isn't a privilege — it's a default.
          </p>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <h2 className="text-4xl font-bold text-blue-800">🔧 Our Approach</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We use sensors, machine learning, and intuitive dashboards to analyze water quality in real-time. Every environment is tracked and assessed using smart rules and adaptive recommendations — all backed by data.
          </p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <h2 className="text-4xl font-bold text-blue-800">💧 Why It Matters</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Polluted water contributes to disease, ecosystem collapse, and social inequality. WaterWatch exists to change that — through transparency, automation, and empowering people with the data they deserve.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Monitor Smarter?</h2>
          <p className="text-lg mb-8">
            Join the mission. Let’s make clean water a reality — for everyone, everywhere.
          </p>
          <Link to={"/"} className="px-6 py-3 bg-white text-blue-800 rounded-full font-semibold hover:bg-blue-100 transition">
            Get Started
          </Link>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
