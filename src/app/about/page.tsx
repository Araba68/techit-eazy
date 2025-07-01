'use client';
import { FaPuzzlePiece, FaLightbulb, FaBullseye, FaEye, FaHeart, FaHistory } from 'react-icons/fa';

export default function AboutPage() {
  const sections = [
    {
      icon: <FaPuzzlePiece className="text-3xl text-[#3F8EFC]" />,
      title: 'The Problem',
      content:
        'Many grassroots organizations lack the digital presence they need to amplify their impact. These invisible heroes remain disconnected from partners and opportunities.',
    },
    {
      icon: <FaLightbulb className="text-3xl text-purple-500" />,
      title: 'The Solution',
      content:
        'TechIT Eazy provides free websites and scalable digital support to NGOs, CBOs, and community groups — ensuring no one is left behind due to cost or complexity.',
    },
    {
      icon: <FaBullseye className="text-3xl text-[#74CBE3]" />,
      title: 'Our Mission',
      content:
        'To empower grassroots organizations with simple, effective, and sustainable tech tools that elevate their visibility and impact.',
    },
    {
      icon: <FaEye className="text-3xl text-[#3F8EFC]" />,
      title: 'Our Vision',
      content:
        'A digitally inclusive Africa where every grassroots organization can thrive, tell its story, and scale its impact online',
    },
    {
      icon: <FaHeart className="text-3xl text-purple-400" />,
      title: 'Core Values',
      content: (
        <ul className="list-disc list-inside pl-2">
          <li>Equity and Inclusion</li>
          <li>Simplicity and Scalability</li>
          <li>Collaboration and Community</li>
          <li>Transparency and Accountability</li>
          <li>Empowerment through Technology</li>
        </ul>
      ),
    },
    {
      icon: <FaHistory className="text-3xl text-[#74CBE3]" />,
      title: 'What Inspired TechIT Eazy?',
      content:
        'In 2023, our founder worked with Likoni-based youth groups and realized most community heroes were unseen — not because of their impact, but because of their invisibility online. TechIT Eazy was born to change that.',
    },
  ];

  return (
    <main className="py-20 px-6 md:px-20 bg-gradient-to-br from-white via-[#f0f7ff] to-white text-gray-800">
      <div className="max-w-6xl mx-auto space-y-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-12">
          About TechIT Eazy
        </h1>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100"
            >
              <div className="mb-4 flex items-center gap-3">
                {section.icon}
                <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                {typeof section.content === 'string' ? (
                  <p>{section.content}</p>
                ) : (
                  section.content
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
