// src/components/WhyTechItEazy.tsx

export default function WhyTechItEazy() {
  const reasons = [
    {
      title: 'Grassroots First',
      description:
        'We are built specifically to uplift grassroots organizations—ensuring their stories, needs, and services are visible online.',
    },
    {
      title: 'Mission-Aligned Tech',
      description:
        'Every solution is built around your mission. We don’t just give you tools—we empower your growth and social impact.',
    },
    {
      title: 'Sustainable Model',
      description:
        'Our freemium approach ensures every organization can access essential tools, with scalable options as you grow.',
    },
    {
      title: 'Local Partnerships',
      description:
        'We work hand-in-hand with community leaders, trainers, and youth to build tech that’s relevant and inclusive.',
    },
    {
      title: 'Beyond Websites',
      description:
        'Websites are the start. We help you collect data, gain insights, raise funds, and tell your story to the world.',
    },
    {
      title: 'Future-Proof Vision',
      description:
        'TechIT Eazy is constantly evolving. We’re building a future where tech amplifies purpose for every grassroots hero.',
    },
  ];

  return (
    <section
      id="why-techit-eazy"
      className="py-20 px-6 md:px-20 bg-purple-600 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why TechIT Eazy?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/20 text-white border border-white/30 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
