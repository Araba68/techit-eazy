// src/components/Partners.tsx

import { FaHandsHelping, FaUniversity, FaLightbulb, FaCity } from 'react-icons/fa';

export default function Partners() {
  const partners = [
    {
      icon: <FaHandsHelping className="text-4xl text-purple-600" />,
      title: 'Donors & Foundations',
    },
    {
      icon: <FaCity className="text-4xl text-[#3F8EFC]" />,
      title: 'Local Government Programs',
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#74CBE3]" />,
      title: 'Youth Innovation Hubs',
    },
    {
      icon: <FaUniversity className="text-4xl text-purple-600" />,
      title: 'Research Institutions',
    },
  ];

  return (
    <section id="partners" className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          🤝 Partners
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          <strong>Collaboration Fuels Impact</strong><br />
          We are actively forming partnerships with:
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{partner.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{partner.title}</h3>
            </div>
          ))}
        </div>

        <p className="text-gray-700 text-lg">
          Our goal is to build a support ecosystem for grassroots tech inclusion.<br />
          <span className="font-medium text-purple-600">Interested in becoming a partner?</span> Let’s talk.
        </p>
        <p className="mt-2 text-blue-600 font-semibold text-lg">
          Email us: <a href="mailto:infotechiteazy@gmail.com" className="underline">infotechiteazy@gmail.com</a>
        </p>
      </div>
    </section>
  );
}
