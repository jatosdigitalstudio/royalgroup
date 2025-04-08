'use client';

import { useState } from 'react';
import Link from 'next/link';
import * as motion from "motion/react-client"
import Image from 'next/image';

export default function Modal({ sector, onClose }) {
  if (!sector) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center p-8 z-50">
        <motion.div 
            className="relative overflow-y-auto rounded-md px-8 py-10 max-w-7xl h-full w-full"
            style={{
                background: `linear-gradient(rgba(27, 50, 81, 1), rgba(27, 50, 81, .8)), url(${sector.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, type:'keyframes',  }}
            >
            <div className="flex justify-between items-start mb-8 z-70">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-sm md:text-md text-white font-third uppercase">{sector.subtitle}</h2>
                    <h2 className="text-xl md:text-3xl text-white font-bold">{sector.title}</h2>
                    <h2 className="text-xs md:text-sm font-normal text-white md:w-[80%]">{sector.text}</h2>
                </div>
            
                <button 
                    onClick={onClose}
                    className="text-white"
                >
                    ✕
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto">
                {sector.companies.map((company, index) => (
                    <Link href="/" key={index}>
                        <div className="min-h-36 p-4 border border-gray rounded-sm">
                            <div className="flex flex-col gap-4 justify-center items-start md:flex-row">
                                <Image
                                    src={company.image} 
                                    alt={company.name}
                                    width={100}
                                    height={100}
                                />
                                <p className="text-sm text-white">{company.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </motion.div>
    </div>
  );
}