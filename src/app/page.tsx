// app/page.tsx
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import WhyTechItEazy from '@/components/WhyTechItEazy';
import Impact from '@/components/Impact';
import SuccessStories from '@/components/SuccessStories';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

import { fetchWhatWeDoEntries } from '@/lib/contentful';

export default async function Home() {
  const entries = await fetchWhatWeDoEntries();

  const services = entries.map((entry: any) => ({
    title: entry.fields.title,
    description: entry.fields.description,
    iconName: entry.fields.icon, // Must match one of: 'globe', 'users', 'tools', 'rocket'
    bgColor: entry.fields.bgColor, // e.g. 'bg-purple-500'
    image: 'https:' + entry.fields.image.fields.file.url, // Full image URL from Contentful
  }));

  return (
    <div className="bg-white text-gray-900">
      <Hero />
      <WhatWeDo services={services} />
      <WhyTechItEazy />
      <Impact />
      <SuccessStories />
      <Partners />
      <Footer />
    </div>
  );
}
