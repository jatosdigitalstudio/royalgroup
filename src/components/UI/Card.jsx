'use client';

import Image from 'next/image';

export default function Card({ sector, onClick, style }) {
  return (
    <button
      onClick={onClick}
      className={`${style} group relative w-full overflow-hidden shadow-md transition-all hover:shadow-xl`}
    >
      {/* Background Image */}
      <Image
        src={sector.image}
        alt={sector.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
      
      {/* Content */}
      <div className="relative flex h-full flex-col items-start justify-end p-6 text-left text-white">
        <h2 className="text-2xl font-bold">{sector.title}</h2>
        <p className="mt-2 text-sm opacity-90">
          {sector.companies.length} companies 
        </p>
      </div>
    </button>
  );
}