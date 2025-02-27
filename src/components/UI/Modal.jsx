'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"

export default function Modal({ sector, onClose }) {
  if (!sector) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <motion.div 
            className="bg-blue rounded-md px-12 py-10 max-w-7xl w-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            >
            <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl text-white font-bold">{sector.name}</h2>
            <button 
                onClick={onClose}
                className="text-gray-500 hover:text-white"
            >
                ✕
            </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
            {sector.companies.map((company, index) => (
                <Link href="/" key={index}>
                    <div className="min-h-48 p-4 bg-gray-50 rounded-sm">
                        <h3 className="mb-2 font-semibold">{company.name}</h3>
                        <p className="text-sm text-gray-600">{company.description}</p>
                    </div>
                </Link>
            ))}
            </div>
        </motion.div>
    </div>
  );
}