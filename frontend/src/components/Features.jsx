import { FlaskConical, LineChart, Brain, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
      title: "Simple Water Testing",
      desc: "Enter pH, turbidity, and more using strips or basic meters—no lab needed.",
    },
    {
      icon: <LineChart className="w-8 h-8 text-green-600" />,
      title: "Instant Safe/Unsafe Verdict",
      desc: "Get immediate water safety status based on WHO guidelines.",
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI-Powered Suggestions",
      desc: "Receive low-cost, local advice to make water potable—via ChatGPT or Gemini.",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-600" />,
      title: "Multiple Source Tracking",
      desc: "Track rivers, ponds, and wells independently—see trends over time.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">
          Powerful, Yet Simple Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
