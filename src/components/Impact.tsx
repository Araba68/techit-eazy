// src/components/Impact.tsx

import { FaChartLine, FaGlobeAfrica, FaHandshake, FaLightbulb } from 'react-icons/fa';

export default function Impact() {
  const impactMetrics = [
    {
      icon: <FaGlobeAfrica className="text-4xl text-[#3F8EFC]" />,
      title: 'Digital Inclusion',
      description:
        'Bridging the digital divide by bringing grassroots organizations online and ensuring equal access to technology.',
    },
    {
      icon: <FaHandshake className="text-4xl text-purple-500" />,
      title: 'Community Partnerships',
      description:
        'Partnering with community-based organizations to create long-term, sustainable digital infrastructure.',
    },
    {
      icon: <FaChartLine className="text-4xl text-[#74CBE3]" />,
      title: 'Capacity Growth',
      description:
        'Boosting technical skills and self-reliance through training and easy-to-manage platforms.',
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#3F8EFC]" />,
      title: 'Innovation at the Grassroots',
      description:
        'Empowering local creativity and solutions through custom tools and storytelling strategies.',
    },
  ];

  return (
    <section id="impact" className="py-20 bg-white px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Impact
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((impact, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-white ${
                index % 2 === 0
                  ? 'bg-purple-500'
                  : 'bg-[#74CBE3] text-gray-900'
              }`}
            >
              <div className="mb-4 flex justify-center">{impact.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {impact.title}
              </h3>
              <p className="text-sm">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
