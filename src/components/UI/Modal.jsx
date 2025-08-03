'use client';
import Link from 'next/link';
import * as motion from "motion/react-client"
import { MdArrowRight } from "react-icons/md";

export default function Modal({ sector, onClose, modalRef }) {
    if (!sector) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center p-8 z-50" ref={modalRef}>
            <motion.div 
                className="relative overflow-y-auto rounded-md px-6 md:px-12 py-10 max-w-5xl h-full w-full"
                style={{
                    background: `linear-gradient(rgba(27, 50, 81, 1), rgba(27, 50, 81, .85)), url(${sector.image})`,
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
                        <h2 className="text-xs md:text-sm font-normal font-text text-white md:w-[80%]">{sector.text}</h2>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-white"
                    >
                        ✕
                    </button>
                </div>
                
                <div className="grid grid-cols-1 gap-8 md:divide-y-2 overflow-y-auto">
                    {sector.companies.map((company, index) => (
                        <div className="min-h-36 pt-8 rounded-sm" key={index}>
                            <Link 
                                href={`https://${company.link}`} target='_blank' rel="noreferrer" passHref={true}
                                className="flex flex-col gap-10 justify-center items-center md:flex-row">
                                <img
                                    src={company.image} 
                                    alt={company.name}
                                    width={250}
                                    height={100}
                                />
                                <div className="flex flex-col gap-4 text-white pointer-events-none">
                                    <h1 className="text-lg font-bold">{company.name}</h1>
                                    <p className="text-sm font-light text-justify">{company.description}</p>
                                    <div className="flex justify-start items-end ml-[-5px] mt-2 ">
                                        <MdArrowRight size={20} />
                                        <Link href={`https://${company.link}`} target='_blank' rel="noreferrer" passHref={true} className='text-xs'>Visit Website</Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}