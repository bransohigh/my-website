import React from "react";
import Image from "next/image";

interface TimelineItem {
  title: string;
  description: string;
  image: string;
  badge?: string;
}

export const TimelineComponent = ({ data }: { data: TimelineItem[] }) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
            My Journey
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
            A timeline of milestones and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {data.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      {item.badge && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-6 h-6 bg-white dark:bg-neutral-950 border-4 border-blue-500 rounded-full transform -translate-x-2.5 md:-translate-x-1/2 md:translate-y-0 z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
