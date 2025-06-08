export default function WhyItMatters() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Why It Matters</h2>
        <p className="text-lg text-gray-700 mb-10 ">
          Millions of people still rely on untreated rivers, ponds, and wells for drinking water. WaterWatch brings timely, low-cost monitoring and guidance to those who need it most.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div className="bg-blue-50 p-2 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-2 text-center">🌿 Protect Local Ecosystems</h3>
            <p className="text-gray-600">By spotting contamination early, communities can prevent irreversible harm to aquatic life and the surrounding environment.</p>
          </div>

          <div className="bg-blue-50 p-2 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-2 text-center">💧 Empower Communities</h3>
            <p className="text-gray-600">No lab? No problem. Local volunteers and families can now check water safety with basic tools and get instant AI advice.</p>
          </div>

          <div className="bg-blue-50 p-2 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-700 mb-2 text-center">📈 Enable Smart Decisions</h3>
            <p className="text-gray-600">Real-time data and historical trends help local bodies, NGOs, and governments take targeted, data-driven actions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
