"use client"

import {useState, useRef, useEffect} from "react";
import Image from 'next/image';
import Modal from '../UI/Modal';
import Card from "../UI/Card";
import { SECTOR } from "@/lib/data";
import { useWindowSize } from "@/utils/custom";

export default function Product() {
    const [selectedSector, setSelectedSector] = useState(null);
    const size = useWindowSize()
    const isMobile = size.width < 768
    const modalRef = useRef(null)
     
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSelectedSector(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <section className="lg:h-screen py-40 md:py-0" id='companies' ref={modalRef}>
            <div className="container mx-auto px-6 lg:px-12" id='modal-root' >
                <div className="flex flex-col justify-center items-center">
                    <div className="" data-aos="zoom-in">
                        <Image src="/images/icon.png" width={50} height={50} alt='Icon Royal Group' />
                    </div>
                    <div className="text-center" data-aos="fade-up">
                        <h1 className="text-2xl uppercase text-blue my-2">Our Companies</h1>
                        <p className='text-md'>
                            Royal Group evolving as a strategic partner, is now focused on 
                            five key sectors <br/> driving Indonesia’s future in this digital era.
                        </p>
                    </div>
                </div>

                {
                    isMobile ? 
                    ( 
                        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-5 gap-2 mt-12 text-white content-end" >
                            {SECTOR.map((sector) => (
                                <Card
                                    key={sector.id}
                                    sector={sector}
                                    onClick={() => setSelectedSector(sector)}
                                    data-aos="fade-up"
                            />
                            ))}
                        </div>  
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-5 gap-2 mt-12 text-white content-end" >
                            {SECTOR.map((sector) => (
                                <Card
                                    key={sector.id}
                                    sector={sector}
                                    style={sector.style}
                                    onClick={() => setSelectedSector(sector)}
                                    data-aos="fade-up"
                            />
                            ))}
                        </div> 
                    )
                }
                
                <Modal
                    sector={selectedSector}
                    onClose={() => setSelectedSector(null)}
                    modalRef={modalRef}
                />
            </div>
        </section>
    );
}
