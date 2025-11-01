import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-semibold text-center text-blue-700 mb-6">
          About LogiSync
        </h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed text-gray-700 text-center mb-10">
          <strong>LogiSync</strong> is an intuitive inventory management
          platform designed to make stock and order tracking effortless. It
          combines powerful backend tools and modern frontend frameworks to
          deliver speed, scalability, and a seamless user experience.
        </p>

        {/* Project Overview */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The system was built to help businesses monitor inventory,
            synchronize orders, and analyze data in real time. Using a modern
            web stack ensures reliable performance, quick load times, and
            maintainable code. LogiSync also integrates secure authentication
            flows and real-time database updates for dynamic user interaction.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Below are some of the core technologies that power LogiSync, along
            with screenshots showing how each is integrated into the system.
          </p>
        </div>

        {/* Technology Sections */}
        <div className="space-y-12">
          {/* Next.js */}
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Next.js — Frontend Framework
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The frontend of LogiSync is built using <strong>Next.js</strong>,
              providing a server-rendered, SEO-friendly structure with dynamic
              routing and optimized performance. The framework allows for
              modular component design, better developer productivity, and
              smoother user experiences.
            </p>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/nextjs-dashboard.png"
                alt="Next.js Dashboard Screenshot"
                width={1200}
                height={700}
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Neon DB */}
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Neon Database — Cloud PostgreSQL
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Neon</strong> is used as the backend database for storing
              all inventory, order, and user data. Its serverless PostgreSQL
              setup allows for branching, scaling, and quick connection handling
              with minimum latency. This ensures data reliability and seamless
              updates even with high concurrency.
            </p>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/neon-dashboard.png"
                alt="Neon Database Screenshot"
                width={1200}
                height={700}
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Stack Auth */}
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Stack Auth — Authentication Layer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Stack Auth</strong> manages user authentication and
              sessions across the LogiSync platform. It ensures that sensitive
              dashboard features are only accessible to authorized users, while
              maintaining fast login and registration experiences.
            </p>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/stackauth-dashboard.png"
                alt="Stack Auth Screenshot"
                width={1200}
                height={700}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Footer / Outro */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-base leading-relaxed">
            LogiSync continues to evolve, combining simplicity with performance.
            Each technology was carefully selected to create a system that’s not
            just functional but delightful to use.
          </p>
        </div>
      </div>
    </div>
  );
}
