// src/components/SuccessStories.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

const stories = [
  {
    name: 'Sultan Empire',
    image: '/images/success-sultan.jpg',
    summary:
      'A youth-led group in Likoni gained visibility and support after their new website launch helped showcase their work in arts, culture, and leadership.',
  },
  {
    name: 'She Forward CBO',
    image: '/images/success-she.jpg',
    summary:
      'Empowered with a modern site, Path Youth now communicates impact, shares resources, and reaches new partners for their youth development initiatives.',
  },
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 bg-white px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Success Stories
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 w-60 rounded-t-2xl overflow-hidden">
                <Image
                  src={story.image}
                  fill
                  style={{ objectFit: 'cover' }}
                  alt={`Success story: ${story.name}`}
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#3F8EFC] mb-2">
                  {story.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{story.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
