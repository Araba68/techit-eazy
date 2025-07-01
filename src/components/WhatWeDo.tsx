'use client';

import Image from 'next/image';
import { FaGlobe, FaUsers, FaTools, FaRocket } from 'react-icons/fa';

const iconMap: Record<string, JSX.Element> = {
  globe: <FaGlobe className="text-3xl text-white" />,
  users: <FaUsers className="text-3xl text-white" />,
  tools: <FaTools className="text-3xl text-white" />,
  rocket: <FaRocket className="text-3xl text-white" />,
};

type Service = {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  iconName: string;
};

export default function WhatWeDo({ services = [] }: { services?: Service[] }) {
  return (
    <section id="what-we-do" className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          What We Do
        </h2>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Left: Text card with background */}
              <div
                className={`${service.bgColor} text-white p-8 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]`}
              >
                <div className="mb-4">
                  {iconMap[service.iconName] ?? (
                    <FaGlobe className="text-3xl text-white" />
                  )}
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm">{service.description}</p>
              </div>

              {/* Right: Image */}
              <div className="flex justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
