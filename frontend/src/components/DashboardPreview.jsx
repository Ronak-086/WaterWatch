import { Link } from "react-router-dom";

export default function DashboardPreview() {
  return (
    <section className="bg-blue-0 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        <div className="md:w-1/2">
          <img
            src="https://i.imghippo.com/files/ArKc7343WSA.png"
            alt="WaterWatch Dashboard"
            className="rounded-xl w-full object-cover border"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left space-y-5">
          <h2 className="text-3xl font-bold text-blue-800">
            Live Water Health Dashboard
          </h2>
          <p className="text-green-700 text-lg">
            Track real-time stats, compare water bodies, and view historical trends—empowering communities to act early.
          </p>
          <Link
            to="/dashboard"
            className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-400 transition"
          >
            Explore Dashboard
          </Link>
        </div>

      </div>
    </section>
  );
}
